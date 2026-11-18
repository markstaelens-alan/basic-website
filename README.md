# basic-website

Website for a free AI automation trial service for new businesses.
Built with React + Vite and hosted free on GitHub Pages.

**Live site:** https://markstaelens-alan.github.io/basic-website/

## Pages
- Home (`src/pages/Home.jsx`)
- About us (`src/pages/About.jsx`)
- Contact us (`src/pages/Contact.jsx`)

## Run locally
Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

## Deploy
Every push to `main` builds and deploys automatically via
`.github/workflows/deploy.yml`. In the repo's **Settings → Pages**,
"Source" must be set to **GitHub Actions**.

## Contact form
The form uses [Formspree](https://formspree.io) (free tier). Create a form
there, then paste its ID into `FORMSPREE_FORM_ID` in `src/config.js`.
Submissions will be emailed to you.
