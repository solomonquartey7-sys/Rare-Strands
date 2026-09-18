import { Link } from 'react-router-dom'
import { textureFilters } from '../config'

const ROWS = textureFilters.filter((f) => f.value !== 'all')

export default function Collection() {
  return (
    <section className="texture-showcase" id="collection">
      <div className="section-heading">
        <div className="rule" />
        <span className="eyebrow">Shop by Texture</span>
        <h2>Every texture, made to last</h2>
      </div>

      {ROWS.map((item, i) => (
        <article className="texture-row" key={item.value}>
          <div
            className="texture-row-media"
            style={{ backgroundImage: `url(${item.image})` }}
          />
          <div className="container texture-row-body">
            <span className="texture-row-index">{String(i + 1).padStart(2, '0')}</span>
            <h3>{item.label}</h3>
            <p>{item.copy}</p>
            <Link className="btn btn-outline-dark" to={`/shop/${item.value}`}>
              Shop This Look
            </Link>
          </div>
        </article>
      ))}
    </section>
  )
}
