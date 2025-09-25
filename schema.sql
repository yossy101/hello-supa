create table if not exists public.messages(
  id bigserial primary key,
  content text not null,
  created_at timestamptz not null default now()
);
alter table public.messages enable row level security;
create policy "allow read messages" on public.messages for select using (true);
create policy "allow insert messages" on public.messages for insert with check (true);
