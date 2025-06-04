# EchoMeet (WIP) 🎙️🤖

**EchoMeet** is a next-generation meeting app that brings AI into your conversations — in real time. While traditional video conferencing tools let you talk to people, **EchoMeet** lets you also interact with AI using your voice during the meeting.

> Imagine a world where your AI teammate is always in the room — that's EchoMeet.

---

## ✨ Features

- 🧠 **Real-time Voice AI Assistant** (powered by Gemini + Vapi)
- 🎙️ **Voice Interaction** — Speak directly with AI during meetings
- 🔐 **Secure Auth** using Better Auth
- 📹 **Video Meetings** with recording support
- 📡 **Real-time Communication**
- 📦 Planned: Screen sharing, collaborative tools, and more

---

## ⚙️ Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind, shadcn/ui
- **Backend**: Drizzle ORM, NeonDB
- **AI Integration**: Gemini (via Vapi)
- **Authentication**: Better Auth
- **Deployment**: Planned for Vercel

---

## 🚧 Status

This project is currently under development. The core voice AI integration is functional, and new features like screen sharing, chat support, and enhanced meeting tools are coming soon.

---

## 🧪 Getting Started

> 🛠️ The project is not yet publicly deployable, but here’s how to run it locally once it's ready:

```bash
# Clone the repo
git clone https://github.com/alireza-akbarzadeh/meetai.git

# Install dependencies
cd echomeet
npm install

# Create a .env file and configure:
# - DATABASE_URL
# - VAPI_KEY
# - GEMINI_API_KEY
# - AUTH_SECRET, etc.

# Run the dev server
npm run dev
