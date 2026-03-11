<div align="center">

# 💀 What Am I AI

### *A Gen-Z personality quiz that roasts you with AI*

<br/>

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Cloudflare](https://img.shields.io/badge/Cloudflare_AI-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)

<br/>

> Answer 5 unhinged questions. Get roasted by AI. Find out if you're a Green Flag 🟢, Red Flag 🚩, Narcissist 😈, Pick-Me 🤡, Main Character 👑, or just Unhinged 💀.

<br/>

</div>

---

## ✨ Features

- 🤖 **AI-Powered Roasts** — Cloudflare Workers AI (Llama 3) generates a savage, personalized roast based on your answers
- 🎲 **Random Questions** — 5 questions are picked randomly from a pool of 20 every time you play
- 💅 **6 Personality Types** — Green Flag, Red Flag, Narcissist, Pick-Me, Main Character, Unhinged
- 📤 **Share Your Results** — Share to Twitter, WhatsApp, or copy to clipboard
- 🌊 **Gorgeous UI** — Dark glassmorphism design with cyan glow effects and smooth animations
- ⚡ **Fast & Lightweight** — Built with Next.js App Router and Tailwind CSS v4

---

## 🖼️ Preview

```
✨ Start Screen  →  ❓ 5 Random Questions  →  ⏳ AI Analyzing  →  💀 Your Roast
```

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/what-am-i-ai.git
cd what-am-i-ai
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root:

```env
CF_ACCOUNT_ID=your_cloudflare_account_id
CF_API_TOKEN=your_cloudflare_api_token
```

> Get your credentials from [dash.cloudflare.com](https://dash.cloudflare.com) — you need a **Workers AI** API token.

### 4. Run the dev server

```bash
npm run dev
```

Link -  https://whatami-ai.vercel.app/ Open and find out what you are 💀

---

## 🧠 How It Works

```
User answers 5 random questions
        ↓
calculatePersonality() scores the answers
        ↓
Personality type sent to /api/chat
        ↓
Cloudflare Workers AI (Llama 3) generates a savage roast
        ↓
Result page displays your type + AI roast
```

---

## 🗂️ Project Structure

```
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts        # Cloudflare AI API route
│   ├── globals.css              # Tailwind v4 styles + glassmorphism utilities
│   └── page.tsx
├── components/
│   ├── QuizApp.tsx              # Main quiz logic & state
│   ├── QuizQuestion.tsx         # Individual question card
│   ├── ResultCard.tsx           # Personality result + AI roast display
│   └── LoadingState.tsx         # AI loading animation
└── lib/
    └── quiz-data.ts             # Questions, personality types & scoring
```

---

## 🎭 Personality Types

| Type | Emoji | Vibe |
|------|-------|------|
| Green Flag | 🟢 | You're actually a decent human. Rare. |
| Red Flag | 🚩 | Your exes have a group chat about you. |
| Narcissist | 😈 | The world revolves around you and you know it. |
| Pick-Me | 🤡 | The validation addiction is loud. |
| Main Character | 👑 | Everyone else is just your supporting cast. |
| Unhinged | 💀 | Chaos follows you like a loyal puppy. |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| Next.js 15 | Framework & App Router |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling & animations |
| Cloudflare Workers AI | AI roast generation (Llama 3 8B) |
| Lucide React | Icons |

---

## 📝 License

MIT — do whatever you want with it, just don't be a red flag about it 🚩

---

<div align="center">

Made with chaos and zero chill ✨

**[Try it live →](#https://whatami-ai.vercel.app/)**

</div>


