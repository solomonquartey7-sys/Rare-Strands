import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MenuOverlay from './MenuOverlay'
import { searchIndex } from '../config'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)
  const cartRef = useRef(null)
  const searchRef = useRef(null)
  const navigate = useNavigate()

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return searchIndex.filter((item) => item.searchable.toLowerCase().includes(q)).slice(0, 6)
  }, [query])

  // Close the cart / search popovers on an outside click.
  useEffect(() => {
    function onClick(e) {
      if (cartOpen && cartRef.current && !cartRef.current.contains(e.target)) {
        setCartOpen(false)
      }
      if (searchOpen && searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false)
      }
    }
    if (cartOpen || searchOpen) {
      document.addEventListener('mousedown', onClick)
      return () => document.removeEventListener('mousedown', onClick)
    }
  }, [cartOpen, searchOpen])

  // Hide the bar on scroll-down, reveal it on scroll-up. Never hide while
  // any overlay is open, and never hide near the very top of the page.
  useEffect(() => {
    function onScroll() {
      const y = window.scrollY
      if (menuOpen || cartOpen || searchOpen) {
        setHidden(false)
      } else if (y < 80) {
        setHidden(false)
      } else if (y > lastY.current) {
        setHidden(true)
      } else if (y < lastY.current) {
        setHidden(false)
      }
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [menuOpen, cartOpen, searchOpen])

  // Lock page scroll while the full-screen menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Escape closes whichever overlay is open.
  useEffect(() => {
    if (!menuOpen && !cartOpen && !searchOpen) return
    function onKey(e) {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        setCartOpen(false)
        setSearchOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen, cartOpen, searchOpen])

  function closeAll() {
    setMenuOpen(false)
    setCartOpen(false)
    setSearchOpen(false)
  }

  function toggleMenu() {
    setCartOpen(false)
    setSearchOpen(false)
    setMenuOpen((v) => !v)
  }

  function toggleCart() {
    setMenuOpen(false)
    setSearchOpen(false)
    setCartOpen((v) => !v)
  }

  function toggleSearch() {
    setMenuOpen(false)
    setCartOpen(false)
    setSearchOpen((v) => !v)
  }

  function goToResult(to) {
    setQuery('')
    setSearchOpen(false)
    navigate(to)
  }

  function handleSearchSubmit(e) {
    e.preventDefault()
    if (results[0]) goToResult(results[0].to)
  }

  return (
    <>
      <header className={`navbar ${hidden ? 'navbar--hidden' : ''} ${menuOpen ? 'navbar--overlay' : ''}`}>
        <div className="container navbar-inner">
          <button
            type="button"
            className="navbar-icon-btn"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>

          <Link to="/" className="navbar-brand" onClick={closeAll}>
            Rare Strands
          </Link>

          <div className="navbar-right">
            <div className="navbar-search-wrap" ref={searchRef}>
              <button
                type="button"
                className="navbar-icon-btn"
                aria-label="Search"
                aria-expanded={searchOpen}
                onClick={toggleSearch}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <circle cx="11" cy="11" r="6.5" />
                  <path d="M20 20l-4.5-4.5" />
                </svg>
              </button>

              {searchOpen && (
                <div className="search-popover" role="dialog" aria-label="Search">
                  <form onSubmit={handleSearchSubmit}>
                    <input
                      type="text"
                      autoFocus
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search textures, services…"
                      aria-label="Search"
                    />
                  </form>
                  {query.trim() && (
                    <div className="search-results">
                      {results.length === 0 ? (
                        <p className="search-empty">No matches — try "curly" or "deposit".</p>
                      ) : (
                        results.map((r) => (
                          <button
                            type="button"
                            key={`${r.group}-${r.label}`}
                            className="search-result"
                            onClick={() => goToResult(r.to)}
                          >
                            <span className="search-result-label">{r.label}</span>
                            <span className="search-result-group">{r.group}</span>
                          </button>
                        ))
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="navbar-cart-wrap" ref={cartRef}>
              <button
                type="button"
                className="navbar-icon-btn"
                aria-label="Cart"
                aria-expanded={cartOpen}
                onClick={toggleCart}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M6 8h12l-1.2 11.2a2 2 0 0 1-2 1.8H9.2a2 2 0 0 1-2-1.8L6 8Z" />
                  <path d="M9 8V6a3 3 0 0 1 6 0v2" />
                </svg>
              </button>

              {cartOpen && (
                <div className="cart-popover" role="dialog" aria-label="Shopping cart">
                  <p className="cart-popover-title">Your cart is empty</p>
                  <p className="cart-popover-copy">
                    Full checkout is coming soon with our online store.
                  </p>
                  <Link
                    to="/shop/all"
                    className="btn btn-outline-dark cart-popover-btn"
                    onClick={() => setCartOpen(false)}
                  >
                    Browse the Collection
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
