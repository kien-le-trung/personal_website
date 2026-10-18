# Personal website

A four-page static personal website built with Astro, TypeScript, Markdown, and plain CSS.

## Local development

Requires Node.js 22 or newer.

```sh
npm install
npm run dev
```

Run `npm run check` for content and TypeScript validation and `npm run build` for a production build. The generated site is written to `dist/`.

## Replace the placeholder content

1. Edit personal details, navigation, social links, résumé state, and the home-page “Now” items in `src/config/site.ts`.
2. Replace or add Markdown records under `src/content/timeline/`. Frontmatter is validated by `src/content.config.ts`.
3. Replace the copy in the four files under `src/pages/`.
4. Replace `public/social-card.svg` and `public/favicon.svg` with branded assets if desired.
5. Update `site` in `astro.config.mjs` or set the `SITE_URL` environment variable to the production origin.
6. Update the sitemap address in `public/robots.txt`.

Timeline types are `work`, `project`, `research`, and `education`. Omit `endDate` for a current entry. Add `featured: true` to make an entry eligible for the home page.

### Add a project

Create a Markdown file with a descriptive name such as `src/content/timeline/project-my-project.md`. Filenames do not control display order: entries are sorted by `startDate`, newest first, with titles breaking ties. You never need to rename or renumber existing projects. Both ongoing and completed projects follow this order.

```yaml
---
title: "My project"
organization: "Independent project"
type: "project"
startDate: "2026-10"
summary: "What I built and what I contributed."
tags: ["TypeScript"]
links:
  - label: "View project"
    href: "https://example.com/"
featured: false
---
```

Use `YYYY-MM-DD` when projects started in the same month and their order matters. Add `endDate` for a completed project. Set `featured: true` to include it among the three newest featured entries on the home page.

### Optional timeline photos

Store experience photos under `src/assets/`, then add `image` and `imageAlt`
to that timeline entry's frontmatter:

```yaml
image: "../../assets/my-project-photo.jpg"
imageAlt: "Presenting the project at demo day"
```

Entries with an image use a text-and-photo layout automatically. Entries
without these fields keep the existing text-only layout.

## Add a résumé

Place the PDF at `public/resume.pdf`, then change `resume.available` to `true` in `src/config/site.ts`. Until both steps are complete, the Work page intentionally shows a disabled “Résumé coming soon” control.

## GitHub Pages

1. Create a GitHub repository and push this project to its `main` branch.
2. In **Settings → Pages**, select **GitHub Actions** as the deployment source.
3. Push to `main`, or manually run the “Deploy to GitHub Pages” workflow.

The workflow obtains the origin and repository subpath from GitHub Pages, so it supports both `username.github.io` and `username.github.io/repository` URLs. To reproduce a project-page build locally:

```sh
BASE_PATH=/repository SITE_URL=https://username.github.io npm run build
```

On PowerShell:

```powershell
$env:BASE_PATH="/repository"
$env:SITE_URL="https://username.github.io"
npm.cmd run build
```

## Custom domain

Configure the domain in **Settings → Pages**, update DNS following GitHub’s instructions, and set the production site URL accordingly. The workflow automatically receives the configured Pages origin. Update `public/robots.txt` to the custom domain; no `CNAME` file is needed when deploying with the Pages workflow.
