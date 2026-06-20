-- Add structured location fields to posts
alter table public.posts add column if not exists post_country text;
alter table public.posts add column if not exists post_region  text;
alter table public.posts add column if not exists post_city    text;

-- Index for grouping/filtering
create index if not exists posts_location_idx on public.posts (post_country, post_region, post_city);
