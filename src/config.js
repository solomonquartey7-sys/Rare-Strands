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

// Homepage hero background. NOTE: this file was supplied by the client from
// what looks like another seller's product-gallery screenshot (it still had
// a "5/20" image-counter overlay baked in). Using it as directed, but if
// there isn't clear ownership/rights to it, swap it for a licensed photo —
// same filename (public/images/hero.jpg) so no code change is needed.
export const heroImage = '/images/hero.jpg'

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
    textures: ['Curly'],
    filters: ['curly'],
    description:
      'Naturally bouncy, defined curls with the density and durability raw hair is known for.',
    image: '/images/collection/burmese-curly.jpg',
  },
  {
    slug: 'raw-613-blonde',
    name: 'Raw 613 Blonde Hair',
    textures: ['Blonde'],
    filters: ['blonde'],
    description:
      'Rare, naturally light raw hair — a true blonde with no over-processing, ready to be toned to your shade.',
    image: '/images/collection/raw-613-blonde.jpg',
  },
  {
    slug: 'virgin-613-body-wave',
    name: 'Virgin 613 Body Wave',
    textures: ['Body Wave'],
    filters: ['body-wave', 'blonde'],
    description:
      'Soft, voluminous body wave in a bright virgin 613 blonde.',
    image: '/images/collection/virgin-613-body-wave.jpg',
  },
  {
    slug: 'bundles-closures',
    name: 'Bundles & HD Lace Closures',
    textures: ['Bundles', 'Bundle Deals', 'HD Lace Closures'],
    filters: ['bundles-closures'],
    description:
      'Mix-and-match bundles, bundle deals, and seamless HD lace closures to complete any install.',
    image: '/images/collection/bundles-closures.jpg',
    featured: true,
  },
]

// Quick-filter chips on /shop/:texture pages, AND the big Prada-style
// full-width rows on the homepage (Home renders one row per entry here,
// skipping "all"). `image` files live in public/images/textures/ — temporary
// free-license stock photos, texture-matched but not real Rare Strands
// models; swap for real photography under the same filenames.
export const textureFilters = [
  { value: 'all', label: 'All' },
  {
    value: 'straight',
    label: 'Straight',
    description: 'Sleek and smooth, built for a glassy finish.',
    copy:
      'Raw Indian straight — full from root to tip, with the kind of ' +
      'natural shine that holds through heat and humidity alike.',
    image: '/images/textures/straight.jpg',
  },
  {
    value: 'wavy',
    label: 'Wavy',
    description: 'Soft, natural movement with body.',
    copy:
      'Effortless, undone waves with real movement — falls naturally ' +
      'without looking overstyled.',
    image: '/images/textures/wavy.jpg',
  },
  {
    value: 'curly',
    label: 'Curly',
    description: 'Defined curls with density that holds.',
    copy:
      'Bouncy, well-defined curls with the density raw hair is known for ' +
      '— holds its shape install after install.',
    image: '/images/textures/curly.jpg',
  },
  {
    value: 'body-wave',
    label: 'Body Wave',
    description: 'Loose, voluminous waves from root to tip.',
    copy:
      'Loose, voluminous waves in a bright virgin 613 blonde — soft ' +
      'enough for everyday, full enough for a night out.',
    image: '/images/textures/body-wave.jpg',
  },
  {
    value: 'blonde',
    label: '613 Blonde',
    description: 'Naturally light raw hair, ready to tone.',
    copy:
      'Rare, naturally light raw hair with no over-processing — a true ' +
      'blank canvas, ready to tone to your exact shade.',
    image: '/images/textures/blonde.jpg',
  },
  {
    value: 'bundles-closures',
    label: 'Bundles & Closures',
    description: 'Bundles, bundle deals, and HD lace closures.',
    copy:
      'Mix-and-match bundles, bundle deals, and seamless HD lace closures ' +
      'to complete any install, start to finish.',
    image: '/images/textures/bundles-closures.jpg',
  },
]

// Bottom-of-hero, horizontally-scrollable "Best Sellers" photo strip —
// pictures only, no product data. Temporary free-license stock photos
// (bundle close-ups), same swap-later note as everything else image-related.
export const bestSellers = [
  { image: '/images/bestsellers/straight-1.jpg', texture: 'straight', label: 'Straight' },
  { image: '/images/bestsellers/wavy-1.jpg', texture: 'wavy', label: 'Wavy' },
  { image: '/images/bestsellers/curly-1.jpg', texture: 'curly', label: 'Curly' },
  { image: '/images/bestsellers/blonde-1.jpg', texture: 'blonde', label: '613 Blonde' },
  { image: '/images/bestsellers/straight-2.jpg', texture: 'straight', label: 'Straight' },
  { image: '/images/bestsellers/wavy-2.jpg', texture: 'wavy', label: 'Wavy' },
  { image: '/images/bestsellers/curly-2.jpg', texture: 'curly', label: 'Curly' },
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

// FAQ data for the bottom-right chat widget. This is a simple keyword-matched
// helper, not a live AI or a real person — keep answers short and accurate
// to what's actually true today. `keywords` drive free-text matching;
// `question` is what shows on the quick-reply buttons.
export const faqs = [
  {
    question: 'What hair textures do you carry?',
    keywords: ['texture', 'type', 'kind', 'straight', 'wavy', 'curly', 'body wave', 'blonde', '613'],
    answer:
      'We carry Raw Indian Hair (straight, wavy, curly), Burmese Curly, ' +
      'Raw 613 Blonde, Virgin 613 Body Wave, and bundles with HD lace ' +
      `closures. Lengths run ${lengthsAvailable}. Tap "Shop by Texture" in the menu to browse.`,
  },
  {
    question: 'How much is the booking deposit?',
    keywords: ['deposit', 'booking fee', 'appointment cost', 'how much to book'],
    answer: `A $${booking.depositAmount} deposit secures a salon appointment, applied toward your service total.`,
  },
  {
    question: 'How do I book an appointment?',
    keywords: ['book', 'appointment', 'salon', 'install', 'schedule', 'styleseat'],
    answer:
      'Appointments are booked through StyleSeat — you can find the link ' +
      'under "Book an Install" in the menu, or on the Services page.',
  },
  {
    question: 'Can I reuse the hair?',
    keywords: ['reuse', 'last', 'durable', 'care', 'maintain', 'wash'],
    answer:
      'Yes — all of our hair is raw or virgin, so with proper care ' +
      '(gentle washing, silk/satin storage, minimal heat) it can be reused ' +
      'across multiple installs.',
  },
  {
    question: 'How do I order hair?',
    keywords: ['order', 'buy', 'purchase', 'price', 'cost', 'shop', 'checkout', 'ship', 'shipping'],
    answer:
      'Our full online checkout is coming soon with Shopify. Until then, ' +
      `reach out directly at ${contact.email} to order.`,
  },
  {
    question: "What's the difference between raw and virgin hair?",
    keywords: ['raw', 'virgin', 'difference', 'what is'],
    answer:
      'Raw hair is unprocessed, cut directly from a single donor with the ' +
      "cuticle intact — it's the highest quality and most durable. Virgin " +
      "hair hasn't been chemically treated (no color, perm, or relaxer) " +
      'but may be collected from multiple donors.',
  },
]

// Real, if simple, site search for the navbar search bar: every texture
// page, collection category, and service, searched by name/description
// client-side. No fake results — just a plain substring match over the
// site's actual content.
export const searchIndex = [
  ...textureFilters
    .filter((f) => f.value !== 'all')
    .map((f) => ({
      label: f.label,
      to: `/shop/${f.value}`,
      group: 'Shop by Texture',
      searchable: `${f.label} ${f.description}`,
    })),
  ...collection.map((item) => ({
    label: item.name,
    to: `/shop/${item.filters[0]}`,
    group: 'Collection',
    searchable: `${item.name} ${item.textures.join(' ')} ${item.description}`,
  })),
  ...services.map((service) => ({
    label: service.name,
    to: '/services',
    group: 'Services',
    searchable: `${service.name} ${service.description}`,
  })),
]
