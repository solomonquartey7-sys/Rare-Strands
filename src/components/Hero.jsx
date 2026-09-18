import { heroImage, lengthsAvailable } from '../config'

export default function Hero() {
  return (
    <section className="hero" id="top" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="container">
        <h1 className="sr-only">Rare Strands — Premium Raw &amp; Virgin Hair Extensions</h1>
        <div className="rule" />
        <p className="lede">
          Shop premium raw and virgin hair extensions — full, long-lasting,
          and reusable with proper care. Bundles, closures, and every
          texture, ready to order.
        </p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#collection">
            Shop the Collection
          </a>
          <a className="hero-secondary-link" href="#booking">
            Already have your hair? Book your install →
          </a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <strong>{lengthsAvailable}</strong>
            <span>Lengths Available</span>
          </div>
          <div className="hero-stat">
            <strong>100%</strong>
            <span>Raw &amp; Virgin Hair</span>
          </div>
          <div className="hero-stat">
            <strong>Reusable</strong>
            <span>With Proper Care</span>
          </div>
        </div>
      </div>
    </section>
  )
}
