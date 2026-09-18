import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { bestSellers } from '../config'

export default function BestSellers() {
  const scrollRef = useRef(null)

  function scrollBy(amount) {
    scrollRef.current?.scrollBy({ left: amount, behavior: 'smooth' })
  }

  return (
    <section className="best-sellers">
      <div className="section-heading section-heading--tight">
        <div className="rule" />
        <span className="eyebrow">Best Sellers</span>
        <h2>Straight, wavy, curly &amp; blonde</h2>
      </div>

      <div className="best-sellers-wrap">
        <button
          type="button"
          className="best-sellers-arrow best-sellers-arrow--prev"
          aria-label="Scroll left"
          onClick={() => scrollBy(-320)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>

        <div className="best-sellers-scroll" ref={scrollRef}>
          {bestSellers.map((item, i) => (
            <Link
              to={`/shop/${item.texture}`}
              className="best-seller-card"
              key={`${item.texture}-${i}`}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <span className="best-seller-label">{item.label}</span>
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="best-sellers-arrow best-sellers-arrow--next"
          aria-label="Scroll right"
          onClick={() => scrollBy(320)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  )
}
