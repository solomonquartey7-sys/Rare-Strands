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
- **`SHOP_URL`** — reserved for when Shopify is wired in at checkout (no
  standalone "shop" landing section anymore — by design, per the client:
  Shopify hooks in only at the checkout step, likely as buy buttons on the
  texture pages/rows once that's ready).
- **`contact`** — real email, phone, and Instagram link for the footer.
- **`services`** — placeholder salon service list on `/services`; replace
  with the real menu, durations, and pricing.
- **`faqs`** — the quick-reply Q&A shown in the bottom-right chat widget.
  It's a keyword-matched helper, not live AI or a real person — keep
  answers short and accurate to what's actually true.
- **Images** — `public/images/collection/*.jpg` and `public/images/textures/*.jpg`
  are temporary free-license stock photos, texture-matched but not real
  inventory or models. Swap in real photography under the same filenames
  whenever it's ready.
- **`public/images/hero.jpg`** — client-supplied homepage background. This
  file still had a "5/20" gallery-counter overlay baked in when supplied,
  which usually means it was screenshotted from another seller's product
  listing rather than owned outright. Confirm rights to it (or replace it)
  before this site goes fully public — same filename, no code change needed.

## Pages

This is a multi-page app (React Router), not just a single scrolling home:

- **`/`** — home: near-full-screen photo hero (no headline text at all —
  just the CTAs and stats, bottom-anchored over the photo; an `<h1>` is
  kept screen-reader-only for SEO; on desktop the image switches to
  `background-size: contain` so almost the whole photo shows instead of
  a tight crop), a scrolling trust marquee, a horizontally-scrolling
  "Best Sellers" photo strip (straight/wavy/curly/blonde, pictures only),
  then a full-width "shop by texture" showcase (one image + write-up +
  "Shop This Look" per texture, Prada-style), about, and a small booking
  banner. There's no standalone "online shop" section — Shopify will hook
  in directly at checkout later, not as a separate landing area.
- **`/shop/:texture`** — one page per texture (`straight`, `wavy`, `curly`,
  `body-wave`, `blonde`, `bundles-closures`, or `all`), each listing every
  collection category that carries that texture.
- **`/services`** — salon services + the StyleSeat booking CTA.

Navigation is a hamburger menu (top-left) that opens a full-screen overlay
listing every texture page and the services page, a centered brand
wordmark, and a search icon + cart icon (top-right). The navbar itself is
transparent with light text over each page's dark hero/page-hero section
(via an IntersectionObserver watching `.hero`/`.page-hero`) and turns into
a solid cream bar once that section scrolls past. Search does a real
client-side match against `searchIndex` in `config.js` (textures,
categories, services) — no fake results. The cart has no live checkout
yet, so it shows an honest "coming soon" empty state. A chat bubble in the
bottom-right corner answers common questions from `faqs` in `config.js`.

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
    Hero.jsx           photo hero (public/images/hero.jpg)
    BestSellers.jsx    horizontal photo-only scroll strip
    Marquee.jsx
    About.jsx
    Collection.jsx     full-width "shop by texture" rows (Prada-style)
    Booking.jsx        compact secondary banner, not a competing section
    Footer.jsx
    ChatWidget.jsx      bottom-right FAQ helper, keyword-matched (not AI)
```

## Deploying

- **Vercel** — connected to this GitHub repo; pushes to `main` auto-deploy.
  `vercel.json` includes the SPA rewrite needed for routes like
  `/shop/curly` to work on a hard refresh.
- **Shopify** — planned to hook in only at checkout (per the client), not
  as a separate shop page; `SHOP_URL` in `config.js` is reserved for that.
