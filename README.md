# NEPA Engineering — Website

A premium website for NEPA Engineering (building-services consultancy, Sydney NSW),
built with **[Astro](https://astro.build/)**. Content is authored dynamically (shared
layouts/components + a Markdown-driven blog) and compiled to **static HTML** — so it
still deploys to any cPanel/Apache host, with no server runtime required.

```
NEPA-Website/
├── astro.config.mjs          ← Astro config (site URL, sitemap)
├── package.json              ← dependencies + scripts
├── src/
│   ├── data/site.ts          ← single source of truth: company info, nav, services
│   ├── styles/global.css      ← design system ("Light Engineering Editorial")
│   ├── layouts/BaseLayout.astro
│   ├── components/            ← SeoHead, Header, Footer, ContactSection, CtaBand
│   ├── content/blog/*.md      ← blog posts (Markdown content collection)
│   └── pages/
│       ├── index.astro
│       ├── about.astro
│       ├── contact.astro
│       ├── privacy.astro / legal.astro / 404.astro
│       ├── services/index.astro        ← services overview
│       ├── services/[slug].astro        ← fire / hydraulic / mechanical / electrical
│       ├── services/cdc.astro           ← Complying Development Certificate
│       └── blog/index.astro + blog/[...slug].astro
├── public/
│   ├── assets/img/            ← logo + photography
│   ├── robots.txt
│   └── .htaccess              ← HTTPS/www redirect, caching, security headers
├── deploy/                    ← build + FTPS deploy tooling for cPanel
└── dist/                      ← build output (git-ignored) — this is what deploys
```

---

## Local development

```bash
npm install        # one-time
npm run dev        # local dev server at http://localhost:4321
npm run build      # production build -> ./dist
npm run preview    # serve the built ./dist locally
```

Requires **Node.js 18+**.

---

## Editing content

- **Pages / design** — edit the `.astro` files in `src/pages`, components in
  `src/components`, and the design system in `src/styles/global.css`.
- **Company details, navigation, services** — edit **`src/data/site.ts`**. This single
  file drives the header, footer, service pages and contact form, so a change there
  updates the whole site consistently.
- **Blog posts** — add a new Markdown file in `src/content/blog/`. Each post needs
  frontmatter (`title`, `description`, `tag`, `pubDate`, `image`, `imageAlt`); set
  `featured: true` to surface it, or `draft: true` to hide it from the build. New posts
  appear automatically on `/blog`, the home page, and in the sitemap.

### Adding a service

Append an entry to the `services` array in `src/data/site.ts`. A new page at
`/services/<slug>` is generated automatically, with matching nav/footer links,
`Service` + `BreadcrumbList` structured data, and a contact CTA.

---

## Deployment to cPanel

Because the build is static, deploy the contents of **`dist/`** to `public_html`.

### Option A — one-command build + deploy (recommended)
```bash
cp deploy/deploy.env.example deploy/deploy.env   # one-time: add your cPanel FTP details
./deploy/deploy.sh                               # builds, then mirrors dist/ over FTPS
```
> Requires `lftp` and `npm`. `deploy.env` is git-ignored so your password is never committed.

### Option B — GitHub push-to-deploy
The workflow in `.github/workflows/deploy.yml` builds the site and uploads `dist/` to
cPanel on every push to `main`. Add repository **Secrets**: `FTP_HOST`, `FTP_USER`,
`FTP_PASS` (Settings → Secrets → Actions).

### Option C — manual
Run `npm run build`, then upload the **contents of `dist/`** into `public_html` via the
cPanel File Manager (make sure `index.html` sits directly in `public_html`).

---

## Hooking up the contact form
The form posts to a placeholder endpoint. To make it live, create a form at
[Formspree](https://formspree.io/) and paste its endpoint into the `action="…"`
attribute of the form in `src/components/ContactSection.astro`.

---

## SEO built in
- Semantic HTML5 landmarks on every page (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`)
- Unique `<title>` (30–60 chars) + meta description (120–160 chars) per page
- Open Graph + Twitter cards, canonical URLs
- Structured data: `ProfessionalService` (site-wide), plus `Service`, `FAQPage`,
  `BlogPosting` and `BreadcrumbList` where relevant
- Auto-generated `sitemap-index.xml` (via `@astrojs/sitemap`), `robots.txt`
- `.htaccess`: HTTPS + www redirect, gzip, long-cache for assets, security headers
- Responsive, mobile-first, `prefers-reduced-motion` respected
