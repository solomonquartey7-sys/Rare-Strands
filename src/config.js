// ---------------------------------------------------------------------------
// Rare Strands — site configuration
//
// Everything a non-developer is likely to need to change lives here:
// links, prices, and copy that will change before/after launch.
// Look for "TODO" — those are the values still waiting on real info.
// ---------------------------------------------------------------------------

export const business = {
  name: 'Rare Strands',
  tagline: 'Premium Raw & Virgin Hair Extensions',
  description:
    'We specialize in premium raw and virgin hair extensions that are full, ' +
    'long-lasting, and reusable with proper care.',
}

// TODO: Replace with the real StyleSeat booking link.
// Find it in the StyleSeat app: More tab → My Profile → Promote → copy link.
// It looks like: https://www.styleseat.com/v/yourbusinessname
export const STYLESEAT_URL = 'https://www.styleseat.com/'

// Booking is secondary to the shop: a referral for customers who've already
// bought hair and want it installed at the salon, not a competing homepage
// section.
export const booking = {
  depositAmount: 25,
  note:
    'A $25 deposit is required to secure your salon install appointment. ' +
    'Deposits are applied toward your service total.',
}

// TODO: Once the Shopify store is live, replace this with the real store URL
// (either yourshop.myshopify.com or a connected custom domain).
export const SHOP_URL = null

// TODO: Fill in real contact details and social handles.
export const contact = {
  email: 'hello@rarestrands.com',
  instagram: null, // e.g. 'https://instagram.com/rarestrands'
  phone: null,
}

// The current hair collection, organized the way a client shops: by
// texture/origin first, finishing goods (bundles/closures) second. Update
// freely — this list drives the "Collection" section on the homepage.
// Real product photos, exact pricing, and variants will come from Shopify
// once the store is connected; until then this is an informational catalog,
// not a live cart.
//
// `filters` map each category to the quick-filter chips above the grid —
// keep them in sync with `textureFilters` below if you add a new one.
// `featured: true` renders a larger, more editorial tile.
// `image` files live in public/images/collection/. The current set are
// temporary stock stand-ins (free-license Pexels photos, texture-matched
// but not actual Rare Strands inventory) — swap each for real product
// photography as soon as it's available; same filenames, same slugs.
export const collection = [
  {
    slug: 'raw-indian',
    name: 'Raw Indian Hair',
    kind: 'Origin Collection',
    textures: ['Straight', 'Wavy', 'Curly'],
    filters: ['straight', 'wavy', 'curly'],
    description:
      'Ethically sourced raw Indian hair in straight, wavy, and curly textures — ' +
      'full from root to tip and built to last through repeated styling.',
    image: '/images/collection/raw-indian.jpg',
    featured: true,
  },
  {
    slug: 'burmese-curly',
    name: 'Burmese Curly Hair',
    kind: 'Origin Collection',
    textures: ['Curly'],
    filters: ['curly'],
    description:
      'Naturally bouncy, defined curls with the density and durability raw hair is known for.',
    image: '/images/collection/burmese-curly.jpg',
  },
  {
    slug: 'raw-613-blonde',
    name: 'Raw 613 Blonde Hair',
    kind: 'Origin Collection',
    textures: ['Blonde'],
    filters: ['blonde'],
    description:
      'Rare, naturally light raw hair — a true blonde with no over-processing, ready to be toned to your shade.',
    image: '/images/collection/raw-613-blonde.jpg',
  },
  {
    slug: 'virgin-613-body-wave',
    name: 'Virgin 613 Body Wave',
    kind: 'Origin Collection',
    textures: ['Body Wave'],
    filters: ['body-wave', 'blonde'],
    description:
      'Soft, voluminous body wave in a bright virgin 613 blonde.',
    image: '/images/collection/virgin-613-body-wave.jpg',
  },
  {
    slug: 'bundles-closures',
    name: 'Bundles & HD Lace Closures',
    kind: 'Finishing Pieces',
    textures: ['Bundles', 'Bundle Deals', 'HD Lace Closures'],
    filters: ['bundles-closures'],
    description:
      'Mix-and-match bundles, bundle deals, and seamless HD lace closures to complete any install.',
    image: '/images/collection/bundles-closures.jpg',
    featured: true,
  },
]

// Quick-filter chips above the homepage collection grid, AND the menu/page
// structure for /shop/:texture (each one is its own page, listing every
// collection category that carries that texture tag).
export const textureFilters = [
  { value: 'all', label: 'All' },
  {
    value: 'straight',
    label: 'Straight',
    description: 'Sleek and smooth, built for a glassy finish.',
  },
  {
    value: 'wavy',
    label: 'Wavy',
    description: 'Soft, natural movement with body.',
  },
  {
    value: 'curly',
    label: 'Curly',
    description: 'Defined curls with density that holds.',
  },
  {
    value: 'body-wave',
    label: 'Body Wave',
    description: 'Loose, voluminous waves from root to tip.',
  },
  {
    value: 'blonde',
    label: '613 Blonde',
    description: 'Naturally light raw hair, ready to tone.',
  },
  {
    value: 'bundles-closures',
    label: 'Bundles & Closures',
    description: 'Bundles, bundle deals, and HD lace closures.',
  },
]

export const lengthsAvailable = '16" – 30"'

// TODO: This is a placeholder list of typical salon services — replace with
// the real service menu, durations, and pricing. It's shown on /services
// alongside the StyleSeat booking CTA.
export const services = [
  {
    name: 'Install — Sew-In',
    description: 'Full sew-in install using your own bundles or ours.',
  },
  {
    name: 'Install — Frontal / Closure',
    description: 'HD lace frontal or closure install, customized and melted.',
  },
  {
    name: 'Take-Down & Maintenance',
    description: 'Safe removal, wash, and re-install or upkeep of existing extensions.',
  },
  {
    name: 'Color Match & Toning',
    description: 'Toning raw 613 blonde or color-matching bundles to your desired shade.',
  },
]
