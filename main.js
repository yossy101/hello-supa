const supabaseUrl = window.ENV_SUPABASE_URL;
const supabaseAnon = window.ENV_SUPABASE_ANON;
const client = supabase.createClient(supabaseUrl, supabaseAnon);

async function refresh() {
  const { data, error } = await client
    .from('messages')
    .select('*')
    .order('id', { ascending: false })
    .limit(20);
  if (error) { console.error(error); alert(error.message); return; }
  const ul = document.getElementById('msgList');
  ul.innerHTML = '';
  (data || []).forEach(r => {
    const li = document.createElement('li');
    li.textContent = `#${r.id}: ${r.content}`;
    ul.appendChild(li);
  });
}

document.getElementById('msgForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const v = document.getElementById('msgInput').value.trim();
  if (!v) return;
  const { error } = await client.from('messages').insert({ content: v });
  if (error) { alert('insert error: ' + error.message); return; }
  document.getElementById('msgInput').value = '';
  refresh();
});

refresh();
