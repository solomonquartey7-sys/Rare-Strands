import { useState } from 'react'
import { STYLESEAT_URL } from '../config'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#collection', label: 'Collection' },
  { href: '#shop', label: 'Shop' },
  { href: '#booking', label: 'Booking' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">RS</span>
          Rare Strands
        </a>

        <nav className={`nav-links ${open ? 'nav-links--open' : ''}`}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            className="btn btn-outline-dark nav-cta-mobile"
            href={STYLESEAT_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now
          </a>
        </nav>

        <a
          className="btn btn-outline-dark nav-cta"
          href={STYLESEAT_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Now
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
    </header>
  )
}
