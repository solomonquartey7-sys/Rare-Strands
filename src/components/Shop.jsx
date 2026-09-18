import { SHOP_URL, contact } from '../config'

export default function Shop() {
  return (
    <section className="shop-teaser section--tight" id="shop">
      <div className="container">
        <span className="shop-badge">Online Shop</span>
        <h2>Full shop, coming soon</h2>
        <p>
          We're setting up a Shopify store so you can browse pricing,
          photos, and check out online. In the meantime, reach out directly
          to place an order.
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
  )
}
