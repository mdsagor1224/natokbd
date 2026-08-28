# NATOKBD — Bangla Natok Website

A fast, premium, mobile-first Bangla Natok (drama) website built with **Vue 3 + Vite**.
No database, no admin dashboard, no backend — you publish new Natok by editing one
JavaScript file and pushing to GitHub. Vercel deploys automatically.

---

## ✨ Features

- Sticky glassmorphism header with responsive mobile menu
- Hero section with gradient headline and CTA
- Featured Natok + Trending row
- Latest Natok grid (3 columns desktop / 2 tablet / 1 mobile)
- Natok details page with responsive YouTube player, breadcrumb, share buttons, related Natok
- Client-side search (by title & category)
- Category filtering with dedicated `/category/:category` pages
- Lightweight preloader, back-to-top button, custom favicon
- SEO: meta tags, Open Graph, Twitter cards, `robots.txt`, `sitemap.xml`
- Zero backend, zero database — 100% static

---

## 🧱 Tech Stack

Vue 3 · Vite · Vue Router · plain CSS (no UI kits, no animation libraries).

---

## 🚀 Getting Started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build locally
```

---

## 📁 Project Structure

```
bangla-natok/
├── public/
│   ├── images/           # thumbnails (.webp)
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/main.css   # design tokens + global styles
│   ├── components/       # Header, Hero, NatokCard, Footer, etc.
│   ├── data/natoks.js    # ⭐ THE FILE YOU EDIT TO PUBLISH NEW NATOK
│   ├── views/            # Home, NatokDetails, Search, Category, NotFound
│   ├── router/index.js
│   ├── App.vue
│   └── main.js
├── index.html
├── package.json
└── vite.config.js
```

---

## 📝 How to Publish a New Natok (Daily Workflow)

This is the entire workflow — no dashboard, no login, no database.

**Step 1 — Add the thumbnail**

Drop a `.webp` image into `public/images/`, e.g.:

```
public/images/my-new-natok.webp
```

(16:9 images work best — around 800×450px.)

**Step 2 — Open the data file**

```
src/data/natoks.js
```

**Step 3 — Copy an existing Natok object**

Copy any object from the `natoks` array and paste it at the **top** of the array
(newest first is easiest to manage, though the site sorts by date automatically).

**Step 4 — Edit these fields**

| Field | What to change it to |
|---|---|
| `id` | A new unique number (increase by 1) |
| `title` | The Natok's title |
| `slug` | A unique URL-safe id, e.g. `"my-new-natok"` → page becomes `/natok/my-new-natok` |
| `thumbnail` | `"/images/my-new-natok.webp"` |
| `videoUrl` | A YouTube **embed** URL: `https://www.youtube.com/embed/VIDEO_ID` |
| `category` | One of: `Romantic`, `Comedy`, `Family`, `Drama`, `Short Film`, `Trending` |
| `date` | `"YYYY-MM-DD"` |
| `description` | 1–3 sentences describing the Natok |
| `featured` *(optional)* | `true` to show it in the homepage Featured section |
| `trending` *(optional)* | `true` to show it in the homepage Trending row |

**Step 5 — Save the file**

**Step 6 — Commit and push**

```bash
git add .
git commit -m "Add new natok"
git push
```

**Step 7 — Done**

Vercel automatically detects the push and redeploys. Your new Natok is live in
about a minute — no database, no admin dashboard, no backend required.

> ⚠️ Only publish videos and images you own or have permission to distribute.
> This project does not include, and must not be used to build, any feature
> that bypasses copyright protection, DRM, paywalls, or access controls.

---

## 🌐 GitHub Setup (first time only)

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

---

## ▲ Vercel Deployment

1. Push this project to GitHub (see above)
2. Log in to [vercel.com](https://vercel.com)
3. Click **Add New Project**
4. Import your GitHub repository
5. Framework preset: **Vite**
6. Build command: `npm run build`
7. Output directory: `dist`
8. Click **Deploy**

After the first deploy, every future `git push` triggers an automatic rebuild:

```
git push  →  Vercel auto-builds  →  site updates live
```

---

## 🔎 SEO & Sitemap

- Page titles and meta description update automatically on each Natok details page
  (e.g. `ভালোবাসার নতুন গল্প | Watch Bangla Natok`).
- `public/robots.txt` and `public/sitemap.xml` are included and ready to edit.
- Update the placeholder domain (`your-domain.vercel.app`) in `index.html`,
  `public/robots.txt` and `public/sitemap.xml` once you have your real domain.
- `public/sitemap.xml` is static — add a `<url>` block per Natok slug when you
  publish, following the example comment inside the file.

---

## 🎨 Design Tokens

Defined in `src/assets/main.css`:

```css
--bg: #080812;
--purple: #7c3aed;
--pink: #ec4899;
--blue: #06b6d4;
```

Change these variables to re-theme the whole site instantly.

---

## 🛠️ Customizing

- **Categories** — edit the `categories` array at the top of `src/data/natoks.js`.
- **Brand name** — search for `NATOKBD` across `src/components/Header.vue` and
  `src/components/Footer.vue`.
- **Hero copy** — edit `src/components/Hero.vue`.
