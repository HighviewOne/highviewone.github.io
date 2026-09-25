# Michael Altamirano - Personal Website

Portfolio site for Michael Altamirano, Systems/Reliability Engineer with 25+ years of experience in FAA infrastructure, satellite systems, power semiconductors, and cloud/ML engineering.

🌐 **Live site:** [highviewone.github.io](https://highviewone.github.io)

## Tech Stack

- React 18 (vendored UMD builds in `vendor/`, no CDN dependency)
- JSX in `src/`, pre-compiled to plain JS with Babel (no bundler, no runtime transpiling)
- Single hand-written stylesheet (`styles.css`), dark editorial theme
- Hosted on GitHub Pages

## Sections

Hero · About · Work (interactive career timeline) · Projects (filterable) · Skills · Education (degrees, certifications, endorsements) · Contact

## Editing Content

Almost all content lives in `src/data.jsx` (career timeline, projects, skills, education, certificates, documents). Layout and copy for each section are in `src/components.jsx`.

**Edit the files in `src/`, never the compiled `app.js` / `components.js` / `data.js` in the root.** Rebuild after every change:

```bash
npm install     # first time only
npm run build   # src/*.jsx → *.js, stamps the footer "Last updated" date
```

Commit both the `src/` changes and the regenerated `.js` files; GitHub Pages serves the compiled output directly.

## Local Preview

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## Assets

```
assets/
├── certificates/   # Professional certifications (JPG/PNG/PDF)
├── degrees/        # Degree scans (PDF)
├── documents/      # Resume and letters of recommendation
└── projects/       # Project images and reports
```

**Replacing the résumé:** keep the filename `assets/documents/Michael_Altamirano_Resume.pdf` (several links point to it) and remove the phone number before committing. The published copy is redacted, but the Word source isn't.

Everything under `assets/` is publicly downloadable once pushed. Keep private working files (drafts, questionnaires, design exports) out of the repo; root-level `*.pdf` and `*.zip` are git-ignored as a safety net.

## Files Structure

```
.
├── index.html        # Shell page: meta/OG tags, JSON-LD, noscript fallback, script tags
├── styles.css        # All styling
├── src/              # JSX sources (edit these)
├── app.js            # ┐
├── components.js     # ├ compiled output of src/ — do not edit by hand
├── data.js           # ┘
├── build.js          # Babel build script (npm run build)
├── vendor/           # React + ReactDOM production builds
├── robots.txt / sitemap.xml
└── assets/
```

## Deployment

Pushing to `main` on `HighviewOne/highviewone.github.io` deploys automatically via GitHub Pages. Update `<lastmod>` in `sitemap.xml` when content changes meaningfully.

## License

This is a personal portfolio. Feel free to fork and adapt for your own use.
