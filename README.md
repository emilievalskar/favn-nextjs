# FAVN Neglesalong — Next.js

This is the FAVN Neglesalong website rebuilt in Next.js (App Router).

---

## Folder structure

```
favn-nextjs/
├── public/
│   └── images/               ← Put ALL your image files here
│       ├── hero.jpg
│       ├── interior.jpg
│       ├── venterom.jpg
│       ├── detalj.jpg
│       ├── galleri-interior.jpg
│       ├── galleri-resepsjon.jpg
│       ├── galleri-fasade.jpg
│       ├── galleri-majorstuen.jpg
│       ├── galleri-velvaererom.jpg
│       ├── galleri-ekstra.jpg
│       ├── galleri-detaljer.jpg
│       ├── cta.jpg
│       ├── behandlinger.jpg
│       ├── gavekort.jpg
│       ├── sikker-salong.jpg
│       ├── sikker-salong-cta.jpg
│       ├── kontakt.jpg
│       ├── majorstuen.jpg
│       ├── aker-brygge.jpg
│       ├── stillinger.jpg
│       └── bestill.jpg
│
├── src/
│   ├── app/                  ← One folder per page (Next.js App Router)
│   │   ├── layout.jsx        ← Root layout (fonts, metadata, Providers)
│   │   ├── page.jsx          ← Homepage route  /
│   │   ├── HomeClient.jsx    ← Homepage content (client component)
│   │   ├── home.module.css   ← Homepage styles
│   │   │
│   │   ├── behandlinger/
│   │   │   ├── page.jsx
│   │   │   ├── BehandlingerClient.jsx
│   │   │   └── behandlinger.module.css
│   │   │
│   │   ├── sikker-salong/
│   │   │   ├── page.jsx
│   │   │   ├── SikkerSalongClient.jsx
│   │   │   └── sikker-salong.module.css
│   │   │
│   │   ├── bestill/
│   │   │   ├── page.jsx
│   │   │   ├── BestillClient.jsx
│   │   │   └── bestill.module.css
│   │   │
│   │   ├── kontakt/
│   │   │   ├── page.jsx
│   │   │   ├── KontaktClient.jsx
│   │   │   └── kontakt.module.css
│   │   │
│   │   └── stillinger/
│   │       ├── page.jsx
│   │       ├── StillingerClient.jsx
│   │       └── stillinger.module.css
│   │
│   ├── components/
│   │   ├── LangContext.jsx       ← Language state (NO/EN) shared across all pages
│   │   ├── Navbar.jsx            ← Fixed top navigation bar
│   │   ├── Footer.jsx            ← Site footer
│   │   ├── Providers.jsx         ← Wraps the app with LangContext + Navbar + Footer
│   │   ├── PhotoPageHeader.jsx   ← Reusable full-bleed photo page header
│   │   ├── PhotoPageHeader.module.css
│   │   └── useReveal.js          ← IntersectionObserver hook for scroll animations
│   │
│   ├── data/
│   │   ├── home.js           ← Homepage content (treatments, testimonials, gallery)
│   │   ├── treatments.js     ← All treatment categories + prices
│   │   └── settings.js       ← Locations, opening hours, booking URL
│   │
│   └── styles/
│       └── globals.css       ← Global CSS (exact copy of shared.css)
│
├── next.config.js
└── package.json
```

---

## Images — what goes in /public/images/

Copy all your existing images from your current project's `images/` folder  
into `public/images/` in this Next.js project.

The images referenced in the code are:

| File                       | Used on               |
|----------------------------|-----------------------|
| hero.jpg                   | Homepage hero         |
| interior.jpg               | Homepage about        |
| venterom.jpg               | Homepage about        |
| detalj.jpg                 | Homepage about        |
| galleri-interior.jpg       | Homepage gallery      |
| galleri-resepsjon.jpg      | Homepage gallery      |
| galleri-fasade.jpg         | Homepage gallery      |
| galleri-majorstuen.jpg     | Homepage gallery      |
| galleri-velvaererom.jpg    | Homepage gallery      |
| galleri-ekstra.jpg         | Homepage gallery      |
| galleri-detaljer.jpg       | Homepage gallery      |
| cta.jpg                    | Homepage CTA          |
| behandlinger.jpg           | Behandlinger header   |
| gavekort.jpg               | Behandlinger gavekort |
| sikker-salong.jpg          | Sikker salong header  |
| sikker-salong-cta.jpg      | Sikker salong CTA     |
| kontakt.jpg                | Kontakt header        |
| majorstuen.jpg             | Kontakt map card      |
| aker-brygge.jpg            | Kontakt map card      |
| stillinger.jpg             | Stillinger header     |
| bestill.jpg                | Bestill right panel   |

---

## Run locally

### 1. Install Node.js
Download from https://nodejs.org (version 18 or higher recommended).

### 2. Install dependencies
```bash
cd favn-nextjs
npm install
```

### 3. Add your images
Copy your image files into `public/images/`.

### 4. Start the development server
```bash
npm run dev
```

Open http://localhost:3000 in your browser.

---

## Build for production

```bash
npm run build
npm run start
```

---

## Deploy to Vercel (recommended — free)

1. Push this folder to a GitHub repository
2. Go to https://vercel.com and sign in with GitHub
3. Click "New Project" and import your repository
4. Vercel detects Next.js automatically — click Deploy
5. Done! Your site is live

---

## Connecting a CMS later

All content is separated into `/src/data/` files:

- `src/data/treatments.js` — all treatment categories and prices
- `src/data/home.js` — homepage treatments, testimonials, gallery
- `src/data/settings.js` — locations, opening hours, booking URL

To connect a headless CMS (e.g. Sanity, Contentful, Storyblok):
1. Replace the exports in these data files with `async` API calls to your CMS
2. Change the page components from `'use client'` to server components  
   (remove the `'use client'` directive and the `useReveal` hook from the page file,  
   keep them only in the interactive parts)
3. Add your CMS API keys to a `.env.local` file

---

## Language switching

The site supports Norwegian (NO) and English (EN).  
Language state is managed in `src/components/LangContext.jsx`.  
The selected language is saved to `localStorage` and persists across page loads.

To add more translations, add keys to the `translations` object in `LangContext.jsx`  
and add `no`/`en` keys to objects in the data files.
