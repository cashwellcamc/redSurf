const PAYLOAD_URL = import.meta.env.VITE_PAYLOAD_URL || 'http://localhost:3001';

async function apiFetch(path) {
  const res = await fetch(`${PAYLOAD_URL}${path}`);
  if (!res.ok) throw new Error(`Payload API error: ${res.status}`);
  return res.json();
}

export async function fetchArticles() {
  const data = await apiFetch('/api/articles?where[status][equals]=published&sort=-publishedAt&depth=1&limit=50');
  return data.docs ?? [];
}

export async function fetchArticleBySlug(slug) {
  const data = await apiFetch(`/api/articles?where[slug][equals]=${encodeURIComponent(slug)}&where[status][equals]=published&depth=1&limit=1`);
  return data.docs?.[0] ?? null;
}

export async function incrementViewCount(id) {
  try {
    const current = await apiFetch(`/api/articles/${id}?depth=0`);
    const count = (current.viewCount || 0) + 1;
    await fetch(`${PAYLOAD_URL}/api/articles/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ viewCount: count }),
    });
  } catch {}
}

export async function fetchServices() {
  const data = await apiFetch('/api/services?where[active][equals]=true&sort=order&depth=0');
  return data.docs ?? [];
}
