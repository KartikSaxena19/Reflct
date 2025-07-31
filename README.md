# 🪞 Reflct – Mood-based Blogging & Collections App

**Reflct** is a personal blogging platform where users can reflect on their mood, organize entries into collections, and visualize emotional trends using interactive graphs. Designed for a private, introspective experience — powered by secure authentication and image-rich reflections.

## ✨ Features

- 🔐 Authentication and session management with **Clerk**
- 🌈 Users can create mood-based blog entries and organize them into **collections**
- 📊 Visual mood **analytics dashboard** using interactive charts
- 🖼️ Auto-generated images for moods using **Pixabay API**
- 🌱 Built with **Next.js**, **TailwindCSS**, **Prisma**, and **Neon DB**
- 🛡️ Secured with **Arcjet** for bot protection and request integrity

---

## 🚀 Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS + ShadCN UI
- **Database**: Neon (PostgreSQL)
- **ORM**: Prisma
- **Auth**: Clerk
- **Security**: Arcjet
- **Images**: Pixabay API

---

## 🛠️ Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

---

## Set-Up Environment Variables
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
DATABASE_URL=
ARCJET_KEY=
PIXABAY_API_KEY=
```
