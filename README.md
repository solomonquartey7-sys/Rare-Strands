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

## Structure

```
src/
  config.js          all editable business info (prices, links, copy)
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Collection.jsx    hair catalog (raw Indian, Burmese curly, 613, bundles/closures)
    Shop.jsx          "shop coming soon" teaser, swaps to a real link once Shopify is connected
    Booking.jsx       StyleSeat booking CTA + $25 deposit note
    Footer.jsx
```

## Deploying

Not yet configured. Good options once you're ready:

- **GitHub Pages** — free, works well for a static Vite build.
- **Netlify / Vercel** — free tier, connects directly to this GitHub repo,
  auto-deploys on every push to `main`.
- **Shopify** — once the store is live, product pages/checkout will live
  there; this site can link out to it (already wired up via `SHOP_URL`).
