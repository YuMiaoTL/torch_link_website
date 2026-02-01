# Torch Link — Startup website

Next.js marketing site with **About**, **Contact**, and **Careers** (job listings that redirect to Indeed). Content is managed in [Prismic](https://prismic.io).

## Stack

- **Next.js** (App Router), TypeScript, Tailwind CSS
- **Prismic** CMS (Slice Machine for content models)
- **Vercel** (deployment)

## Setup

### 1. Prismic repository

1. Create a repository at [prismic.io](https://prismic.io) and note the **repository name**.
2. In **Settings → API & Security**, copy the repository name. If the API is private, create an access token and note it.

### 2. Environment variables

Copy the example env file and set your Prismic values:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

- `PRISMIC_REPOSITORY` — your Prismic repository name (required).
- `PRISMIC_ACCESS_TOKEN` — only if your repository API is private.

Also set `repositoryName` in `slicemachine.config.json` to match your repository name (used by Slice Machine).

### 3. Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Content types in Prismic

Create these custom types in Slice Machine (`npm run slicemachine`) and push to your repo:

| Type     | Kind     | Purpose                          |
|----------|----------|----------------------------------|
| **Home** | Single   | Hero, tagline, CTA for homepage  |
| **About**| Single   | About us (title, body, image)     |
| **Contact** | Single | Contact (title, body)          |
| **Job**  | Repeatable | One document per role; fields: **title**, **department**, **summary**, **indeed_apply_url** (Link) |

Predefined type JSON lives in `customtypes/` (Home, About, Contact, Job). You can recreate them in the Slice Machine UI or push them via the [Prismic Types API](https://prismic.io/docs/custom-types-api) if you use a script.

For each job, set **Indeed apply URL** to the full Indeed job URL. The site shows an “Apply on Indeed” button that opens this URL in a **new tab** (`target="_blank"`).

### 5. Deploy (Vercel)

1. Connect this repo to Vercel.
2. Set `PRISMIC_REPOSITORY` (and `PRISMIC_ACCESS_TOKEN` if needed) in the project environment variables.
3. Deploy.

### Content updates (revalidation)

Configure a Prismic webhook to your production URL:

- **URL:** `https://your-domain.com/api/revalidate`
- **Triggers:** “A page is published”, “A page is unpublished”

So that new or updated Prismic content revalidates the Next.js cache.

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — run ESLint
- `npm run slicemachine` — open Slice Machine to edit content models
