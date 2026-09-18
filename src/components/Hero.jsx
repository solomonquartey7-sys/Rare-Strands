import { STYLESEAT_URL, lengthsAvailable } from '../config'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <span className="eyebrow">Raw &amp; Virgin Hair Extensions</span>
        <h1>
          Full, flawless, <em>rare</em> strands
        </h1>
        <p className="lede">
          Premium raw and virgin hair extensions that are full, long-lasting,
          and reusable with proper care — plus salon services to install and
          maintain them.
        </p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#collection">
            Shop the Collection
          </a>
          <a
            className="btn btn-outline"
            href={STYLESEAT_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book an Appointment
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
