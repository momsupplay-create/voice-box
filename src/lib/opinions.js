import { supabase } from './supabaseClient';

const PHOTO_BUCKET = 'opinion-photos';
const EXCERPT_LENGTH = 60;

function formatDate(isoString) {
  const d = new Date(isoString);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}.${mm}.${dd}`;
}

function mapOpinion(row) {
  return {
    id: row.id,
    title: row.title,
    excerpt:
      row.content.length > EXCERPT_LENGTH
        ? `${row.content.slice(0, EXCERPT_LENGTH)}…`
        : row.content,
    content: row.content,
    status: row.status,
    category: row.category,
    author: row.author || '익명',
    date: formatDate(row.created_at),
    photo: row.photo_url,
  };
}

export async function fetchOpinions() {
  const { data, error } = await supabase
    .from('opinions')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data.map(mapOpinion);
}

export async function fetchOpinionById(id) {
  const { data, error } = await supabase
    .from('opinions')
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (error) throw error;
  return data ? mapOpinion(data) : null;
}

async function uploadPhoto(file) {
  const ext = file.name.split('.').pop();
  const path = `${crypto.randomUUID()}.${ext}`;

  const { error } = await supabase.storage.from(PHOTO_BUCKET).upload(path, file);
  if (error) throw error;

  const { data } = supabase.storage.from(PHOTO_BUCKET).getPublicUrl(path);
  return data.publicUrl;
}

export async function createOpinion({ title, content, category, photo }) {
  const photoUrl = photo ? await uploadPhoto(photo) : null;

  const { data, error } = await supabase
    .from('opinions')
    .insert({ title, content, category, photo_url: photoUrl })
    .select()
    .single();

  if (error) throw error;
  return mapOpinion(data);
}
