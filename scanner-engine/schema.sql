-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Create Scans Table
create table scans (
  id uuid default uuid_generate_v4() primary key,
  target_url text not null,
  status text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  completed_at timestamp with time zone,
  crawled_count integer default 0,
  vulnerability_count integer default 0,
  user_id uuid
);

-- Create Findings Table
create table findings (
  id uuid default uuid_generate_v4() primary key,
  scan_id uuid references scans(id) not null,
  type text not null,
  severity text not null,
  url text not null,
  description text,
  remediation text,
  remediation_code text,
  cwe text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Turn on Row Level Security (RLS) - Optional for now but good practice
alter table scans enable row level security;
alter table findings enable row level security;

-- Allow public access (since we are using client-side anon key for simpler demo, or backend logic)
-- ideally backend uses service_role, but for now we open it for the anon key to work easily from python if backend uses anon (not recommended for production but ok here)
create policy "Enable read/insert for all" on scans for all using (true) with check (true);
create policy "Enable read/insert for all" on findings for all using (true) with check (true);
