import { heroImage } from '../config'

export default function Hero() {
  return (
    <section className="hero" id="top" style={{ backgroundImage: `url(${heroImage})` }}>
      <h1 className="sr-only">Rare Strands — Premium Raw &amp; Virgin Hair Extensions</h1>
      <div className="container hero-bottom-left">
        <a className="btn btn-primary" href="#collection">
          Shop the Collection
        </a>
      </div>
    </section>
  )
}
