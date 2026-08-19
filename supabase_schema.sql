-- Database schema for Kronik (Supabase PostgreSQL)

-- 1. Profiles Table (extends Supabase Auth)
create table profiles (
  id uuid references auth.users on delete cascade not null primary key,
  username text unique,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. User Quiz Scores Table
create table quiz_scores (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  article_slug text not null,
  score integer not null,
  max_score integer not null,
  completed_at timestamp with time zone default timezone('utc'::text, now()) not null,
  -- Ensure one score per user per article (upsert strategy)
  unique(user_id, article_slug)
);

-- 3. User Badges Table
create table user_badges (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  badge_id text not null,
  unlocked_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, badge_id)
);

-- RLS (Row Level Security) Policies
alter table profiles enable row level security;
alter table quiz_scores enable row level security;
alter table user_badges enable row level security;

-- Profiles: Users can read all profiles, but only update their own.
create policy "Public profiles are viewable by everyone." on profiles for select using (true);
create policy "Users can insert their own profile." on profiles for insert with check (auth.uid() = id);
create policy "Users can update own profile." on profiles for update using (auth.uid() = id);

-- Quiz Scores: Users can only see and manage their own scores.
create policy "Users can read own scores." on quiz_scores for select using (auth.uid() = user_id);
create policy "Users can insert own scores." on quiz_scores for insert with check (auth.uid() = user_id);
create policy "Users can update own scores." on quiz_scores for update using (auth.uid() = user_id);

-- Badges: Publicly viewable (for profiles), but users can only unlock their own.
create policy "Badges are viewable by everyone." on user_badges for select using (true);
create policy "Users can unlock own badges." on user_badges for insert with check (auth.uid() = user_id);

-- Trigger to create profile automatically when a user signs up
create or replace function public.handle_new_user() 
returns trigger as $$
begin
  insert into public.profiles (id, username, avatar_url)
  values (new.id, new.raw_user_meta_data->>'user_name', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
