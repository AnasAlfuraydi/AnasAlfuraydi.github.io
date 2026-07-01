# Anas Alfuraydi — Portfolio Website

A premium, single-page portfolio for Data Analyst / BI Analyst roles. Pure HTML, CSS, and
JavaScript — no frameworks or build step required.

## Folder structure

```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/        # project thumbnails + Power BI gallery screenshots (SVG placeholders included)
│   └── icons/          # favicon.svg
└── README.md
```

## Before you publish — replace these placeholders

1. **Project & gallery images** — swap the SVG files in `assets/images/` for real screenshots
   of your dashboards (PNG/JPG work fine — just update the `image` path in `js/script.js`).
2. **Project links** — in `js/script.js`, set each project's `links.github`, `links.demo`,
   and `links.powerbi` to your real URLs.
3. **LinkedIn & GitHub** — in `js/script.js`, update `initSocialLinks()` with your real profile URLs.
4. **CV file** — add `assets/Anas_Alfuraydi_CV.pdf` and update the `downloadCV` button's href in
   `initDownloadCV()` (currently shows a reminder alert).
5. **Contact form** — the form currently just shows a confirmation message client-side. Wire it
   up to a real service (e.g. Formspree, Netlify Forms, or your own backend) before relying on it.

## Adding a new project

Open `js/script.js` and add one object to the `projectsData` array at the top of the file:

```js
{
  title: "Project Name",
  description: "What it does, in one or two sentences.",
  businessValue: "The business outcome it enabled.",
  image: "assets/images/your-thumbnail.svg",
  tech: ["Power BI", "SQL"],
  category: "Power BI",          // used by the filter chips
  links: { github: "#", demo: "#", powerbi: "#" }, // set any to null to hide that button
}
```

The card, filter chip, and search index update automatically — no HTML editing required.

## Adding a new Power BI gallery screenshot

Add one object to `galleryData` in `js/script.js`:

```js
{ image: "assets/images/your-screenshot.png", caption: "What the screenshot shows" }
```

## Deploying to GitHub Pages

1. Create a new GitHub repository (e.g. `anasalfuraydi.github.io` for a root domain, or any
   name for a project site).
2. From inside the `portfolio/` folder, initialize and push:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In the GitHub repo, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, select **Deploy from a branch**.
5. Choose the **main** branch and **/ (root)** folder, then **Save**.
6. Your site will be live within a minute or two at:
   - `https://<your-username>.github.io/` (if the repo is named `<your-username>.github.io`), or
   - `https://<your-username>.github.io/<repo-name>/` (for any other repo name).

## Notes on the build

- **Dark mode** uses `data-theme="dark"` on `<html>` and is persisted via `localStorage` (falls
  back gracefully if storage is unavailable).
- **Animations** (fade-in / slide-up) use `IntersectionObserver` on elements with the `.reveal`
  class, and respect `prefers-reduced-motion`.
- **SEO**: title, meta description, keywords, and Open Graph tags are set in the `<head>` of
  `index.html` — update them if you change your target roles or location.
