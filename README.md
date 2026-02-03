# KÉK Nyelvi Asszisztens

A modern, component-driven chat application featuring an AI assistant that communicates in **KÉK (Könnyen Érthető Kommunikáció)** — Easy-to-Understand Communication.

Könnyen Érthető Kommunikáció (KÉK) egy olyan módszertan, amely az információkat (írásban, szóban, képekkel) egyszerűsíti, hogy értelmi sérült, tanulási nehézséggel küzdő, vagy a nyelvet kevéssé ismerő emberek számára is hozzáférhetővé tegye a tartalmat.

## Features

✨ **Modern Chat UI**
- Real-time message streaming with auto-scroll
- Beautiful message bubbles with avatar profiles
- Responsive design with dark mode support
- Markdown rendering for rich AI responses

🤖 **AI-Powered Assistant**
- OpenAI integration via Vercel AI SDK
- KÉK-compliant communication (short sentences, simple language)
- Markdown-formatted responses with code blocks, lists, and emphasis
- Server-side processing for security

⚙️ **Robust Architecture**
- Atomic design component structure (atoms → molecules → organisms)
- React Query for server state management
- Backend API endpoints for AI queries
- TypeScript for type safety

## Tech Stack

- **Framework**: Next.js 16.1.6 with App Router
- **UI**: React 19, Tailwind CSS
- **State Management**: @tanstack/react-query
- **AI**: @ai-sdk/openai, Vercel AI SDK
- **Markdown**: react-markdown + remark-gfm
- **Language**: TypeScript

## SEO & Metadata

The application includes comprehensive SEO optimization:
- **Metadata**: Title, description, keywords, Open Graph tags, Twitter card
- **Structured Data**: Schema.org JSON-LD for search engines
- **Robots & Sitemap**: Automatic generation via Next.js
- **PWA Support**: Manifest.json for installability
- **Semantic HTML**: Proper language tags (`lang="hu"`) and accessibility
- **Mobile Optimization**: Theme colors, viewport settings for all devices

Key SEO files:
- `app/layout.tsx` — Global metadata & structured data
- `app/sitemap.ts` — Auto-generated XML sitemap
- `app/robots.ts` — Search engine crawler rules
- `public/manifest.json` — Progressive Web App manifest
- `public/robots.txt` — Fallback crawler rules

---

## Installation

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup

1. **Clone and install**
```bash
npm install
```

2. **Configure environment**
Create `.env.local` in the project root:
```bash
OPENAI_API_KEY=your_openai_api_key_here
AI_PROVIDER=openai
AI_MODEL=gpt-4o-mini
OPENAI_API_BASE_URL=  # Optional: custom OpenAI endpoint
```

3. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `OPENAI_API_KEY` | Yes | Your OpenAI API key |
| `AI_PROVIDER` | No | AI provider (default: `openai`) |
| `AI_MODEL` | No | Model ID (default: `gpt-4o-mini`) |
| `OPENAI_API_BASE_URL` | No | Custom OpenAI endpoint (optional) |
| `NEXT_PUBLIC_URL` | No | Application URL for SEO/Open Graph (default: `http://localhost:3000`) |

**⚠️ Important**: Environment variables are loaded at build time. Restart `npm run dev` after creating/updating `.env.local`.

### NEXT_PUBLIC_URL Usage
This variable is exposed to the client and used for:
- **Canonical URLs**: Tells search engines the primary URL
- **Open Graph**: Social media share previews
- **Sitemap**: Search engine indexing
- **Robots.txt**: Crawler instructions

Set it to your production domain when deploying:
```bash
# Development
NEXT_PUBLIC_URL=http://localhost:3000

# Production
NEXT_PUBLIC_URL=https://your-domain.com
```

## Available Scripts

```bash
# Development server
npm run dev

# Production build
npm build

# Start production server
npm start

# Lint code
npm run lint
```

## Architecture Notes

### Atomic Design Pattern
The component hierarchy follows atomic design principles:
- **Atoms**: Reusable UI primitives (Avatar, Button, TextInput)
- **Molecules**: Atoms combined into logical groups (MessageForm, MessageList)
- **Organisms**: Complex, page-level components (ChatContainer)
- **Pages**: Final layouts using organisms

This structure ensures **reusability, maintainability, and scalability**.

### Server-Side AI Processing
- AI queries are handled by a backend API endpoint (`/api/answer`)
- Sensitive keys (`OPENAI_API_KEY`) are never exposed to the client
- Frontend communicates via standard HTTP POST requests
- React Query manages caching and state

### KÉK Communication Rules
The AI assistant follows these principles for clarity:
1. **Short sentences** — one thought per sentence
2. **Simple vocabulary** — easy-to-understand words
3. **Examples & lists** — visual structure when explaining
4. **Clear explanations** — complex terms always explained
5. **Friendly tone** — approachable and helpful
6. **Responsiveness** — explains differently if misunderstood

## API Endpoints

### `POST /api/answer`
Submit a question and get an AI response.

**Request**:
```json
{
  "prompt": "Mi az a Python?",
  "format": "markdown"
}
```

**Response**:
```json
{
  "answer": "A Python egy programozási nyelv..."
}
```

## Customization

### Change AI Model
Edit `lib/ai/provider.ts` and update `AI_MODEL` env var:
```typescript
const modelId = process.env.AI_MODEL || "gpt-4o";
```

### Modify Welcome Message
Edit `app/components/organisms/ChatContainer.tsx`:
```typescript
const WELCOME_MESSAGE = `Your custom welcome text...`;
```

### Update Styling
- Component-level styles use Tailwind classes
- Global styles in `app/globals.css`
- Dark mode fully supported via `dark:` prefix

## Troubleshooting

### "OPENAI_API_KEY is not set"
- Create `.env.local` with your key
- Restart `npm run dev`

### Messages not appearing
- Check browser console for errors
- Verify API endpoint is responding: `curl http://localhost:3000/api/answer`
- Ensure OpenAI API key is valid

### App won't build
- Clear `.next` directory: `rm -rf .next`
- Reinstall dependencies: `npm install`
- Rebuild: `npm run build`

## License

MIT

## Contributing

This is a personal project. For suggestions or improvements, feel free to fork and customize!

