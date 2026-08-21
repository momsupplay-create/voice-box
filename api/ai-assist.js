import { generateAssist, AssistError } from './_lib/assist.js';

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    const { draft } = request.body || {};
    const result = await generateAssist(draft, process.env.GEMINI_API_KEY);
    response.status(200).json(result);
  } catch (err) {
    const statusCode = err instanceof AssistError ? err.statusCode : 500;
    response.status(statusCode).json({ error: err.message });
  }
}
