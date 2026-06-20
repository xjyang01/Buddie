-- Buddie: user profiles + job postings with phone/email verification

create extension if not exists "uuid-ossp";

-- Profiles
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text not null,
  company_name text,
  company_email text,
  phone text,
  email_verified boolean default false,
  phone_verified boolean default false,
  phone_otp text,
  phone_otp_expires_at timestamptz,
  can_post boolean generated always as (email_verified and phone_verified) stored,
  created_at timestamptz default now()
);

-- Job postings
create table public.job_postings (
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

create policy "Users can view own profile" on public.profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);

create policy "Anyone can view active jobs" on public.job_postings for select using (status = 'active');
create policy "Verified users can post jobs" on public.job_postings for insert with check (
  exists (select 1 from public.profiles where id = auth.uid() and can_post = true)
);
create policy "Posters can manage own jobs" on public.job_postings for update using (poster_id = auth.uid());

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, company_email, email_verified)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', new.email),
    new.email,
    coalesce((new.email_confirmed_at is not null), false)
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Update email_verified when user confirms email
create or replace function public.handle_email_confirmed()
returns trigger as $$
begin
  if new.email_confirmed_at is not null and old.email_confirmed_at is null then
    update public.profiles set email_verified = true where id = new.id;
  end if;
  return new;
end;
$$ language plpgsql security definer;

create trigger on_email_confirmed
  after update on auth.users
  for each row execute procedure public.handle_email_confirmed();
