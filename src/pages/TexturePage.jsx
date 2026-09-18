import { Link, useParams } from 'react-router-dom'
import { collection, textureFilters, SHOP_URL, contact } from '../config'
import CategoryTile from '../components/CategoryTile'

export default function TexturePage() {
  const { texture } = useParams()
  const meta = textureFilters.find((f) => f.value === texture)

  if (!meta) {
    return (
      <section className="section page-hero">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="rule rule--light" />
          <span className="eyebrow">Not Found</span>
          <h1>We couldn't find that texture</h1>
          <p className="lede" style={{ margin: '0 auto 2em' }}>
            It may have moved. Browse the full collection instead.
          </p>
          <Link className="btn btn-primary" to="/shop/all">
            Shop the Collection
          </Link>
        </div>
      </section>
    )
  }

  const items =
    texture === 'all' ? collection : collection.filter((item) => item.filters.includes(texture))

  const otherTextures = textureFilters.filter((f) => f.value !== texture)

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="rule rule--light" />
          <span className="eyebrow">Shop by Texture</span>
          <h1>{meta.label}</h1>
          {meta.description && <p className="lede">{meta.description}</p>}
        </div>
      </section>

      <section className="section collection">
        <div className="container">
          <div className="filter-bar" role="group" aria-label="Other textures">
            {otherTextures.map((f) => (
              <Link key={f.value} to={`/shop/${f.value}`} className="filter-chip">
                {f.label}
              </Link>
            ))}
          </div>

          {items.length === 0 ? (
            <p className="collection-empty">
              Nothing in this texture yet — check back soon, or ask us directly.
            </p>
          ) : (
            <div className="collection-grid">
              {items.map((item) => (
                <CategoryTile key={item.slug} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="shop-teaser section--tight">
        <div className="container">
          <span className="shop-badge">Ready to Order?</span>
          <h2>Full checkout, coming soon</h2>
          <p>
            Our Shopify store is on the way. In the meantime, reach out
            directly to order from this texture.
          </p>
          {SHOP_URL ? (
            <a className="btn btn-primary" href={SHOP_URL}>
              Visit the Shop
            </a>
          ) : (
            <a className="btn btn-primary" href={`mailto:${contact.email}`}>
              Email to Order
            </a>
          )}
        </div>
      </section>
    </>
  )
}
