# Blank Dashboard

A blank Next.js 14 dashboard project with the same technologies as siloq-dashboard.

## Tech Stack

- **Framework**: Next.js 14.2.15 (App Router)
- **Language**: TypeScript 5.3.3
- **Styling**: Tailwind CSS 3.4.1
- **UI Components**: shadcn/ui (New York style)
- **Icons**: Lucide React + Heroicons
- **Forms**: React Hook Form + Zod
- **Testing**: Vitest + Playwright
- **Documentation**: Storybook 10
- **Theme**: next-themes (dark/light mode)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run storybook` - Start Storybook dev server
- `npm run build-storybook` - Build Storybook for production

## Project Structure

```
app/                 # Next.js App Router
components/          # React components
components/ui/       # shadcn/ui components
hooks/              # Custom React hooks
lib/                # Utility functions
public/             # Static assets
stories/            # Storybook stories
.storybook/         # Storybook configuration
```

## Features Included

- TypeScript strict mode
- Tailwind CSS with CSS variables for theming
- Dark/Light mode support
- shadcn/ui component library setup
- Storybook for component documentation
- Vitest for testing
- ESLint + Prettier configuration
- Path aliases (@/*)
