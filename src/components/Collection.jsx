import { collection, lengthsAvailable } from '../config'

export default function Collection() {
  return (
    <section className="section collection" id="collection">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Our Collection</span>
          <h2>Raw &amp; virgin hair, every texture</h2>
          <p>
            A snapshot of what we carry. Full pricing, live availability, and
            photos are coming soon with our online shop.
          </p>
        </div>

        <div className="collection-grid">
          {collection.map((item) => (
            <article className="collection-card" key={item.name}>
              <div className="collection-swatch">
                <span>Photo coming soon</span>
              </div>
              <h3>{item.name}</h3>
              <div className="textures">
                {item.textures.map((texture) => (
                  <span className="texture-tag" key={texture}>
                    {texture}
                  </span>
                ))}
              </div>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <p className="collection-footnote">
          All lengths available from <strong>{lengthsAvailable}</strong>.
          Ask us about bundle deals and HD lace closures.
        </p>
      </div>
    </section>
  )
}
