# spell-duel

A modern Next.js application with Tailwind CSS, ESLint, and TypeScript.

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- ⚡ Next.js 15 with App Router
- 🎨 Tailwind CSS for styling
- 📝 TypeScript for type safety
- 🔧 ESLint for code linting
- 🚀 pnpm for fast package management

## Project Structure

```
spell-duel
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/        # UI Components (Table, Box, Text, Spinner, etc.)
│   │   └── Button.tsx
│   ├── constants/         # Static constants (Tabs, Roles, etc.)
│   ├── hooks/             # Custom Hooks (React Query, Zustand store)
│   ├── libs/              # Utilities (api.ts, dropdown.ts, formatter.ts)
│   ├── assets/            # Images, animations (e.g., Lottie files)
│   ├── types/             # Shared TypeScript types (API, DTOs)
│   ├── fonts/             # Custom fonts (THSarabun for PDFs)
│   └── styles/            # Tailwind config and global styles
│       └── globals.css
├── public/
├── tsconfig.json
└── package.json
```

## Tailwind CSS v4

This project uses Tailwind CSS v4 with CSS-based configuration. No separate config file needed - all customization is done through CSS imports and layers in `src/styles/globals.css`.

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/)

## Deploy

Deploy easily with [Vercel](https://vercel.com/):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/your-repo)
