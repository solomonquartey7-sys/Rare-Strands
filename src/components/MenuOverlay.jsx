import { Link } from 'react-router-dom'
import { textureFilters, STYLESEAT_URL } from '../config'

const SHOP_LINKS = textureFilters.filter((f) => f.value !== 'all')

export default function MenuOverlay({ open, onClose }) {
  return (
    <div className={`menu-overlay ${open ? 'menu-overlay--open' : ''}`} aria-hidden={!open}>
      <div className="menu-overlay-inner">
        <nav className="menu-columns">
          <div className="menu-column">
            <span className="menu-column-label">Shop by Texture</span>
            <ul>
              {SHOP_LINKS.map((link) => (
                <li key={link.value}>
                  <Link to={`/shop/${link.value}`} onClick={onClose}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="menu-column">
            <span className="menu-column-label">Salon</span>
            <ul>
              <li>
                <Link to="/services" onClick={onClose}>
                  Services
                </Link>
              </li>
              <li>
                <a href={STYLESEAT_URL} target="_blank" rel="noopener noreferrer" onClick={onClose}>
                  Book an Install
                </a>
              </li>
            </ul>
          </div>

          <div className="menu-column">
            <span className="menu-column-label">Rare Strands</span>
            <ul>
              <li>
                <Link to="/" onClick={onClose}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#about" onClick={onClose}>
                  About
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}
