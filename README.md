# Orbital Log

A modular personal website built with [Astro](https://astro.build/) and designed for GitHub Pages. The prototype uses an aged, screen-printed retro-futurist visual system inspired by mid-century robots, analog control panels, and geometric planetary landscapes.

## What is included

- A responsive home page with latest notes and featured projects
- An about page
- Markdown-powered note and project archives with statically generated detail pages
- Optimized cover images and inline content images
- Accessible navigation, focus behavior, semantic landmarks, and reduced-motion support
- Automatic GitHub Pages deployment

## Local development

Requires Node.js 20 or newer.

```sh
npm install
npm run dev
```

Open `http://localhost:4321`. Before committing, verify the production site:

```sh
npm run build
npm run preview
```

## Personalize the prototype

Site-wide identity settings live in `src/data/site.ts`. Update the name, email, social links, and description there. The biography is in `src/pages/about.astro`; notes and projects are Markdown content collections.

The site is organized as follows:

```text
src/
├── assets/         Source images optimized by Astro
├── components/     Reusable header, footer, artwork, and cards
├── content/        Markdown notes and projects
├── content.config.ts  Frontmatter schemas
├── data/site.ts    Site identity and social settings
├── layouts/        Shared HTML shell and metadata
├── pages/          Astro routes and static dynamic routes
└── styles/         Global design system and responsive rules
```

## Writing notes and projects

Copy the corresponding `_template.md` file in `src/content/notes` or `src/content/projects`, rename it, fill in its frontmatter, and remove `draft: true` (or change it to `false`). The filename becomes the URL:

```text
src/content/notes/my-new-note.md      → /notes/my-new-note/
src/content/projects/my-project.md    → /projects/my-project/
```

Store content images in `src/assets/notes` or `src/assets/projects`. To add an optional cover, reference it in frontmatter:

```yaml
cover: ../../assets/notes/my-cover.jpg
coverAlt: Description of the image
```

Add images inside the Markdown body with normal Markdown syntax:

```md
![Description of the image](../../assets/notes/diagram.png)
```

Local images are processed and optimized by Astro during the build. Always provide meaningful alternative text. Supported fields and example values are documented directly in each `_template.md` file.

## Visual system

Color, typography, and spacing tokens are CSS custom properties at the top of `src/styles/global.css`. Illustrations are lightweight CSS and inline SVG, so there are no large runtime image downloads. The design uses:

- deep ink navy `#102a35`
- aged paper cream `#eeecd2`
- coral signal orange `#d9583f`
- mission red `#b93d35`
- desaturated machine teal `#447f8e`
- faded print salmon `#d99b87`

Google Fonts are loaded in the stylesheet for the prototype. For a privacy-first or fully offline deployment, download the fonts and serve them locally from `public/fonts`.

## Deploy to GitHub Pages

1. Push the repository to GitHub with `main` as the default branch.
2. In **Settings → Pages**, choose **GitHub Actions** as the source.
3. Push to `main`; `.github/workflows/deploy.yml` builds and publishes the site.

`astro.config.mjs` detects project repositories (for example `username.github.io/orbital-log`) and adds the correct base path. For a custom domain, set a repository variable named `SITE_URL` to the full origin and add the appropriate `CNAME` file under `public/`.

## Useful commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run check` | Run Astro and TypeScript diagnostics |
| `npm run build` | Validate and create the static production build |
| `npm run preview` | Preview the production build locally |
