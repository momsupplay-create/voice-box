export async function generateAssist(draft) {
  const res = await fetch('/api/ai-assist', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ draft }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'AI 작성도우미 요청에 실패했어요.');
  return data;
}
