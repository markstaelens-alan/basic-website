-- Stores messages sent from the website's Contact us page.
create table public.contact_messages (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) <= 200),
  email text not null check (char_length(email) <= 320),
  business text check (char_length(business) <= 200),
  message text not null check (char_length(message) <= 5000)
);

-- Row level security: block everything by default...
alter table public.contact_messages enable row level security;

-- ...then let website visitors ADD messages, but never read, edit or delete them.
create policy "anyone can submit" on public.contact_messages
  for insert to anon, authenticated with check (true);
