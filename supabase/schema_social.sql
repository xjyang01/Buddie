-- Buddie social layer: posts, comments, likes, follows

-- Update profiles with social fields
alter table public.profiles add column if not exists bio text;
alter table public.profiles add column if not exists location text;
alter table public.profiles add column if not exists avatar text default '🌻';
alter table public.profiles add column if not exists interests text[] default '{}';
alter table public.profiles add column if not exists website text;

-- Posts
create table if not exists public.posts (
  id uuid primary key default uuid_generate_v4(),
  author_id uuid references public.profiles on delete cascade not null,
  content text not null check (char_length(content) <= 500),
  tags text[] default '{}',
  created_at timestamptz default now()
);

-- Comments
create table if not exists public.comments (
  id uuid primary key default uuid_generate_v4(),
  post_id uuid references public.posts on delete cascade not null,
  author_id uuid references public.profiles on delete cascade not null,
  content text not null check (char_length(content) <= 280),
  created_at timestamptz default now()
);

-- Likes
create table if not exists public.likes (
  id uuid primary key default uuid_generate_v4(),
  post_id uuid references public.posts on delete cascade not null,
  user_id uuid references public.profiles on delete cascade not null,
  created_at timestamptz default now(),
  unique(post_id, user_id)
);

-- Follows
create table if not exists public.follows (
  id uuid primary key default uuid_generate_v4(),
  follower_id uuid references public.profiles on delete cascade not null,
  following_id uuid references public.profiles on delete cascade not null,
  created_at timestamptz default now(),
  unique(follower_id, following_id)
);

-- RLS
alter table public.posts enable row level security;
alter table public.comments enable row level security;
alter table public.likes enable row level security;
alter table public.follows enable row level security;

-- Posts policies
do $$ begin
  create policy "Anyone can view posts" on public.posts for select using (true);
exception when duplicate_object then null; end $$;

do $$ begin
  create policy "Logged in users can post" on public.posts for insert with check (auth.uid() = author_id);
exception when duplicate_object then null; end $$;

do $$ begin
  create policy "Authors can delete own posts" on public.posts for delete using (auth.uid() = author_id);
exception when duplicate_object then null; end $$;

-- Comments policies
do $$ begin
  create policy "Anyone can view comments" on public.comments for select using (true);
exception when duplicate_object then null; end $$;

do $$ begin
  create policy "Logged in users can comment" on public.comments for insert with check (auth.uid() = author_id);
exception when duplicate_object then null; end $$;

do $$ begin
  create policy "Authors can delete own comments" on public.comments for delete using (auth.uid() = author_id);
exception when duplicate_object then null; end $$;

-- Likes policies
do $$ begin
  create policy "Anyone can view likes" on public.likes for select using (true);
exception when duplicate_object then null; end $$;

do $$ begin
  create policy "Logged in users can like" on public.likes for insert with check (auth.uid() = user_id);
exception when duplicate_object then null; end $$;

do $$ begin
  create policy "Users can unlike" on public.likes for delete using (auth.uid() = user_id);
exception when duplicate_object then null; end $$;

-- Follows policies
do $$ begin
  create policy "Anyone can view follows" on public.follows for select using (true);
exception when duplicate_object then null; end $$;

do $$ begin
  create policy "Logged in users can follow" on public.follows for insert with check (auth.uid() = follower_id);
exception when duplicate_object then null; end $$;

do $$ begin
  create policy "Users can unfollow" on public.follows for delete using (auth.uid() = follower_id);
exception when duplicate_object then null; end $$;

-- Profiles: allow anyone to view
do $$ begin
  create policy "Anyone can view profiles" on public.profiles for select using (true);
exception when duplicate_object then null; end $$;
