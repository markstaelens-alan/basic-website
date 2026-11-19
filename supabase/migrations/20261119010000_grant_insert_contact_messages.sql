-- Row level security policies only apply once the role has table privileges.
-- Let website visitors (anon) and signed-in users insert rows, nothing more.
grant insert on table public.contact_messages to anon, authenticated;
