# pwa (React + TypeScript) — Minimal PWA template

Quickstart:

1. Install dependencies
   ```
   npm install
   ```
2. Start dev server
   ```
   npm run dev
   ```
3. Open the app in the browser (Vite will print the URL, default http://localhost:5173).

Notes:
- package.json has already been added to the repository.
- To enable PWA features in production, replace the placeholder icons in `public/icons/` and consider using a build-time PWA plugin (e.g. Vite PWA plugin) for more advanced caching strategies.
- The `sw.js` is a minimal example placed in `public/` so it is served at the site root. Adjust and expand the service worker as needed.