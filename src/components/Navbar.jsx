import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import MenuOverlay from './MenuOverlay'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)
  const cartRef = useRef(null)

  // Close the cart popover on an outside click.
  useEffect(() => {
    if (!cartOpen) return
    function onClick(e) {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setCartOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [cartOpen])

  // Hide the bar on scroll-down, reveal it on scroll-up. Never hide while
  // the menu or cart is open, and never hide near the very top of the page.
  useEffect(() => {
    function onScroll() {
      const y = window.scrollY
      if (menuOpen || cartOpen) {
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
  }, [menuOpen, cartOpen])

  // Lock page scroll while the full-screen menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Escape closes whichever overlay is open.
  useEffect(() => {
    if (!menuOpen && !cartOpen) return
    function onKey(e) {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        setCartOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen, cartOpen])

  function toggleMenu() {
    setCartOpen(false)
    setMenuOpen((v) => !v)
  }

  function toggleCart() {
    setMenuOpen(false)
    setCartOpen((v) => !v)
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

          <Link
            to="/"
            className="navbar-brand"
            onClick={() => {
              setMenuOpen(false)
              setCartOpen(false)
            }}
          >
            Rare Strands
          </Link>

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
      </header>

      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
