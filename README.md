# Koenaite Developer Portfolio

A responsive personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons.

## Requirements

- Node.js 22 (see `.nvmrc`)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Deploy to Netlify

Connect the repository to Netlify and deploy from the repository root. Netlify
uses the build command in `netlify.toml`, reads the Node.js version from
`.nvmrc`, and automatically configures its Next.js adapter. Leave the publish
directory unset so the adapter can handle the Next.js build output.

## Code quality

```bash
npm run lint
npm run format
npm run format:check
```

Husky runs ESLint and Prettier on staged files before each commit.

## Routes

- `/` — Home and overview
- `/about` — About me
- `/work` — Project portfolio
- `/skills` — Technical competencies
- `/experience` — Work experience and education
- `/contact` — Contact options

## Personalise before publishing

Edit `lib/portfolio.ts`:

1. Replace `your.email@example.com` with the email address you want to publish.
2. Replace GitHub and LinkedIn placeholder URLs with your real profiles.
3. Confirm project repository/demo URLs and project status. Remove any project you cannot publicly discuss.
4. Add exact employer names, role dates, and measurable achievements to the experience array.
5. Confirm whether the availability message is accurate.

## Design notes

- Semantic HTML and anchor/navigation links
- Responsive layouts and keyboard focus states
- Framer Motion reveal transitions with reduced-motion support
- Contact uses a copy-email action and `mailto:` link. It does not store messages server-side; add a form provider or API route if you need a submission form.
- This scaffold uses the Next.js App Router; route folders under `app/` provide each page. Shared layout, navigation, and footer live in `app/layout.tsx` and `components/`.
