import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { generateAssist, AssistError } from './api/_lib/assist.js'

function aiAssistDevApi(env) {
  return {
    name: 'ai-assist-dev-api',
    configureServer(server) {
      server.middlewares.use('/api/ai-assist', (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.end('Method Not Allowed')
          return
        }

        let body = ''
        req.on('data', (chunk) => {
          body += chunk
        })
        req.on('end', async () => {
          res.setHeader('Content-Type', 'application/json')
          try {
            const { draft } = body ? JSON.parse(body) : {}
            const result = await generateAssist(draft, env.GEMINI_API_KEY)
            res.end(JSON.stringify(result))
          } catch (err) {
            res.statusCode = err instanceof AssistError ? err.statusCode : 500
            res.end(JSON.stringify({ error: err.message }))
          }
        })
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react(), aiAssistDevApi(env)],
  }
})
