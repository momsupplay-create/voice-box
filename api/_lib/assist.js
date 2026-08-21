const MODEL = 'gemini-3.5-flash-lite';
const CATEGORIES = ['시설/안전', '환경/미화', '교통', '소음', '기타'];

export class AssistError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
  }
}

export async function generateAssist(draft, apiKey) {
  if (!draft || !draft.trim()) {
    throw new AssistError('내용을 먼저 입력해주세요.', 400);
  }
  if (!apiKey) {
    throw new AssistError('서버에 GEMINI_API_KEY가 설정되어 있지 않아요.', 500);
  }

  const prompt = `당신은 동네 민원 게시판 "우리 동네 목소리함"의 글쓰기 도우미입니다.
주민이 짧게 쓴 메모를 정식 민원글로 다듬어주세요.

규칙:
- title: 15자 내외의 간결한 제목
- content: 상황을 구체적으로 설명하는 정중한 본문 (2~4문장)
- category: 다음 중 정확히 하나만 선택 — ${CATEGORIES.join(', ')}
- 사실을 과장하거나 지어내지 말고, 입력된 내용만 다듬어서 정리하세요.

주민이 쓴 메모:
"""
${draft}
"""`;

  let response;
  try {
    response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            responseMimeType: 'application/json',
            responseSchema: {
              type: 'OBJECT',
              properties: {
                title: { type: 'STRING' },
                content: { type: 'STRING' },
                category: { type: 'STRING', enum: CATEGORIES },
              },
              required: ['title', 'content', 'category'],
            },
          },
        }),
      },
    );
  } catch {
    throw new AssistError('Gemini에 연결하지 못했어요.', 502);
  }

  if (!response.ok) {
    throw new AssistError(`Gemini 요청이 실패했어요. (${response.status})`, 502);
  }

  const data = await response.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) {
    throw new AssistError('Gemini 응답을 읽지 못했어요.', 502);
  }

  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch {
    throw new AssistError('Gemini 응답 형식이 올바르지 않아요.', 502);
  }

  return {
    title: String(parsed.title || '').slice(0, 60),
    content: String(parsed.content || ''),
    category: CATEGORIES.includes(parsed.category) ? parsed.category : '기타',
  };
}

export { CATEGORIES };
