import { useMemo, useState } from 'react'
import { collection, textureFilters, lengthsAvailable } from '../config'

export default function Collection() {
  const [activeFilter, setActiveFilter] = useState('all')

  const visible = useMemo(() => {
    if (activeFilter === 'all') return collection
    return collection.filter((item) => item.filters.includes(activeFilter))
  }, [activeFilter])

  return (
    <section className="section collection" id="collection">
      <div className="container">
        <div className="section-heading">
          <div className="rule" />
          <span className="eyebrow">Our Collection</span>
          <h2>Raw &amp; virgin hair, every texture</h2>
          <p>
            A snapshot of what we carry, organized by texture. Full pricing,
            live availability, and photos are coming soon with our online
            shop.
          </p>
        </div>

        <div className="filter-bar" role="group" aria-label="Filter by texture">
          {textureFilters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              className={`filter-chip ${activeFilter === filter.value ? 'is-active' : ''}`}
              onClick={() => setActiveFilter(filter.value)}
              aria-pressed={activeFilter === filter.value}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="collection-empty">
            Nothing in this texture yet — check back soon, or ask us directly.
          </p>
        ) : (
          <div className="collection-grid">
            {visible.map((item) => (
              <article
                className={`collection-tile ${item.featured ? 'collection-tile--featured' : ''}`}
                key={item.slug}
              >
                <div className="tile-media">
                  <span className="tile-photo-note">Photo coming soon</span>
                  <span className="tile-kind">{item.kind}</span>
                </div>
                <div className="tile-body">
                  <h3>{item.name}</h3>
                  <div className="textures">
                    {item.textures.map((texture) => (
                      <span className="texture-tag" key={texture}>
                        {texture}
                      </span>
                    ))}
                  </div>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        )}

        <p className="collection-footnote">
          All lengths available from <strong>{lengthsAvailable}</strong>.
          Ask us about bundle deals and HD lace closures.
        </p>
      </div>
    </section>
  )
}
