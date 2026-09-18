import { Link } from 'react-router-dom'

export default function CategoryTile({ item, to }) {
  const content = (
    <>
      <div className="tile-media" style={{ backgroundImage: `url(${item.image})` }}>
        <span className="tile-photo-note">Stock photo &middot; real photos coming soon</span>
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
        {to && <span className="tile-link">Shop this texture &rarr;</span>}
      </div>
    </>
  )

  const className = `collection-tile ${item.featured ? 'collection-tile--featured' : ''}`

  if (to) {
    return (
      <Link className={className} to={to}>
        {content}
      </Link>
    )
  }

  return <article className={className}>{content}</article>
}
