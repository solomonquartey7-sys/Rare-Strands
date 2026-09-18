# Rare Strands

Website for **Rare Strands** — premium raw and virgin hair extensions and
full-service salon. Built with React + Vite.

## Running locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
```

Output goes to `dist/`.

## Things still to fill in

Almost everything editorial lives in [`src/config.js`](src/config.js).
Look for `TODO` comments there:

- **`STYLESEAT_URL`** — the real booking link. In the StyleSeat app:
  More tab → My Profile → Promote → copy link.
- **`SHOP_URL`** — once the Shopify store is live, drop the store URL here
  and the "Shop" section will link straight to it instead of showing the
  "coming soon" message.
- **`contact`** — real email, phone, and Instagram link for the footer.
- **`services`** — placeholder salon service list on `/services`; replace
  with the real menu, durations, and pricing.
- **Collection images** — `public/images/collection/*.jpg` are temporary
  free-license stock photos, texture-matched but not real inventory. Swap
  in real product photography under the same filenames whenever it's ready.

## Pages

This is a multi-page app (React Router), not just a single scrolling home:

- **`/`** — home: hero, texture-filterable collection preview, shop CTA,
  about, and a small booking banner.
- **`/shop/:texture`** — one page per texture (`straight`, `wavy`, `curly`,
  `body-wave`, `blonde`, `bundles-closures`, or `all`), each listing every
  collection category that carries that texture.
- **`/services`** — salon services + the StyleSeat booking CTA.

Navigation is a hamburger menu (top-left) that opens a full-screen overlay
listing every texture page and the services page, plus a centered brand
wordmark and a cart icon (top-right) — the cart has no live checkout yet,
so it shows an honest "coming soon" empty state.

## Structure

```
src/
  config.js          all editable business info (prices, links, copy, services)
  pages/
    Home.jsx
    TexturePage.jsx   /shop/:texture
    ServicesPage.jsx  /services
  components/
    Layout.jsx        Navbar + page content + Footer, shared across routes
    Navbar.jsx         hamburger, centered brand, cart, scroll-hide behavior
    MenuOverlay.jsx    full-screen menu (textures + services)
    CategoryTile.jsx   shared collection tile (used on Home and TexturePage)
    Hero.jsx
    Marquee.jsx
    About.jsx
    Collection.jsx
    Shop.jsx
    Booking.jsx        compact secondary banner, not a competing section
    Footer.jsx
```

## Deploying

- **Vercel** — connected to this GitHub repo; pushes to `main` auto-deploy.
  `vercel.json` includes the SPA rewrite needed for routes like
  `/shop/curly` to work on a hard refresh.
- **Shopify** — once the store is live, product pages/checkout will live
  there; this site can link out to it (already wired up via `SHOP_URL`).
