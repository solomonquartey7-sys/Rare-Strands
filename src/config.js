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

export const booking = {
  depositAmount: 25,
  note:
    'A $25 deposit is required to secure your salon appointment. ' +
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

// The current hair collection. Update freely — this list drives the
// "Our Collection" section on the homepage. Real product photos, exact
// pricing, and variants will come from Shopify once the store is connected;
// until then this section is an informational catalog, not a live cart.
export const collection = [
  {
    name: 'Raw Indian Hair',
    textures: ['Straight', 'Wavy', 'Curly'],
    description:
      'Ethically sourced raw Indian hair in straight, wavy, and curly textures — ' +
      'full from root to tip and built to last through repeated styling.',
  },
  {
    name: 'Burmese Curly Hair',
    textures: ['Curly'],
    description:
      'Naturally bouncy, defined curls with the density and durability raw hair is known for.',
  },
  {
    name: 'Raw 613 Blonde Hair',
    textures: ['Blonde'],
    description:
      'Rare, naturally light raw hair — a true blonde with no over-processing, ready to be toned to your shade.',
  },
  {
    name: 'Virgin 613 Body Wave',
    textures: ['Body Wave'],
    description:
      'Soft, voluminous body wave in a bright virgin 613 blonde.',
  },
  {
    name: 'Bundles & HD Lace Closures',
    textures: ['Bundles', 'Bundle Deals', 'HD Lace Closures'],
    description:
      'Mix-and-match bundles, bundle deals, and seamless HD lace closures to complete any install.',
  },
]

export const lengthsAvailable = '16" – 30"'
