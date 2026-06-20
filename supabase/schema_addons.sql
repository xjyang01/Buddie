-- Run this if profiles table already exists
-- Only adds job_postings, triggers, and policies

create extension if not exists "uuid-ossp";

-- Add missing columns to profiles if they don't exist
alter table public.profiles add column if not exists company_name text;
alter table public.profiles add column if not exists company_email text;
alter table public.profiles add column if not exists phone text;
alter table public.profiles add column if not exists email_verified boolean default false;
alter table public.profiles add column if not exists phone_verified boolean default false;
alter table public.profiles add column if not exists phone_otp text;
alter table public.profiles add column if not exists phone_otp_expires_at timestamptz;

-- Add can_post computed column (drop first if exists)
alter table public.profiles drop column if exists can_post;
alter table public.profiles add column can_post boolean generated always as (email_verified and phone_verified) stored;

-- Job postings table
create table if not exists public.job_postings (
  id uuid primary key default uuid_generate_v4(),
  poster_id uuid references public.profiles on delete cascade not null,
  title text not null,
  company text not null,
  location text not null,
  job_type text not null check (job_type in ('Full-time', 'Part-time', 'Contract', 'Internship', 'Hybrid', 'Remote')),
  description text not null,
  apply_url text,
  tags text[] default '{}',
  status text not null default 'active' check (status in ('active', 'closed')),
  created_at timestamptz default now()
);

-- RLS
alter table public.profiles enable row level security;
alter table public.job_postings enable row level security;

-- Policies (ignore if already exist)
do $$ begin
  create policy "Users can view own profile" on public.profiles for select using (auth.uid() = id);
exception when duplicate_object then null; end $$;

do $$ begin
  create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);
exception when duplicate_object then null; end $$;

do $$ begin
  create policy "Anyone can view active jobs" on public.job_postings for select using (status = 'active');
exception when duplicate_object then null; end $$;

do $$ begin
  create policy "Verified users can post jobs" on public.job_postings for insert with check (
    exists (select 1 from public.profiles where id = auth.uid() and can_post = true)
  );
exception when duplicate_object then null; end $$;

do $$ begin
  create policy "Posters can manage own jobs" on public.job_postings for update using (poster_id = auth.uid());
exception when duplicate_object then null; end $$;

-- Triggers
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, company_email, email_verified)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', new.email),
    new.email,
    coalesce((new.email_confirmed_at is not null), false)
  )
  on conflict (id) do nothing;
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

create or replace function public.handle_email_confirmed()
returns trigger as $$
begin
  if new.email_confirmed_at is not null and old.email_confirmed_at is null then
    update public.profiles set email_verified = true where id = new.id;
  end if;
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_email_confirmed on auth.users;
create trigger on_email_confirmed
  after update on auth.users
  for each row execute procedure public.handle_email_confirmed();
