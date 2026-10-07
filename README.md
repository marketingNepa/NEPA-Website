# NEPA Engineering — Website

A premium, static website for NEPA Engineering (building-services consultancy, Sydney NSW).
Pure HTML / CSS / JavaScript — no build step, no framework. It runs on any cPanel/Apache
host by simply uploading the files.

```
nepaeng/
├── index.html            ← main page
├── 404.html              ← custom not-found page
├── privacy.html          ← privacy policy
├── legal.html            ← legal notice
├── robots.txt            ← search-engine crawl rules
├── sitemap.xml           ← sitemap for Google
├── .htaccess             ← HTTPS redirect, caching, security headers (cPanel/Apache)
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── img/              ← logo + photography
└── deploy/
    ├── deploy.sh         ← one-command push to cPanel over FTPS
    ├── deploy.env.example← copy to deploy.env and add your login
    └── (deploy.env)      ← YOUR credentials (git-ignored, you create this)
```

---

## Option A — Automated push to your website (recommended)

This lets you (or Kiro) push the whole site to your live hosting with a single command.

### 1. One-time setup
```bash
cp deploy/deploy.env.example deploy/deploy.env
```
Open `deploy/deploy.env` and fill in your **cPanel FTP** details:

| Field       | Where to find it in cPanel                                        |
|-------------|-------------------------------------------------------------------|
| `FTP_HOST`  | cPanel → *FTP Accounts* → "Configure FTP Client" (e.g. `ftp.nepaeng.com`) |
| `FTP_USER`  | Your cPanel username, or a dedicated FTP account you create       |
| `FTP_PASS`  | The matching password                                             |
| `REMOTE_DIR`| Almost always `/public_html`                                      |

### 2. Deploy
```bash
./deploy/deploy.sh
```
It mirrors the local folder to `/public_html` over an encrypted FTPS connection and
removes files on the server that no longer exist locally. Visit
<https://www.nepaeng.com/> to confirm.

> Requires `lftp` (`sudo apt install lftp` or `brew install lftp`).
> `deploy.env` is listed in `.gitignore` so your password is never committed.

---

## Option B — Manual upload via cPanel File Manager

1. Zip the site contents (everything **except** the `deploy/` folder).
2. In cPanel open **File Manager → `public_html`**.
3. **Upload** the zip, then right-click → **Extract**.
4. Make sure `index.html` sits directly inside `public_html` (not in a sub-folder).
5. Delete the zip when done.

---

## Option C — Git push-to-deploy (optional, advanced)

If you keep this repo on GitHub, the included workflow in
`.github/workflows/deploy.yml` can auto-upload to cPanel every time you push to
`main`. Add three repository **Secrets** (Settings → Secrets → Actions):
`FTP_HOST`, `FTP_USER`, `FTP_PASS`. See that file for details.

---

## Making changes

Everything is plain text — edit `index.html` (content), `assets/css/style.css`
(design), or `assets/js/main.js` (behaviour), then run `./deploy/deploy.sh` again.

### Hooking up the contact form
The form currently posts to a placeholder. Pick one:
- **Formspree** (fastest): create a form at formspree.io and paste its endpoint into the
  `action="…"` attribute of `#contactForm` in `index.html`.
- **cPanel email**: ask to swap in a small PHP mailer (`contact.php`) that sends via your
  hosting — works without any third-party service.

---

## SEO built in
- Semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `article`, `footer`)
- Unique `<title>` + meta description, Open Graph + Twitter cards
- `ProfessionalService` JSON-LD structured data (name, address, phone, services)
- `robots.txt`, `sitemap.xml`, canonical URL
- `.htaccess`: HTTPS + www redirect, gzip, long-cache for assets, security headers
- Responsive, mobile-first, `prefers-reduced-motion` respected
