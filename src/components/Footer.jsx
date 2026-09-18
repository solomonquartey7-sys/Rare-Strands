import { Link } from 'react-router-dom'
import { STYLESEAT_URL, contact, business } from '../config'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div>
          <div className="brand">
            <span className="brand-mark">RS</span>
            {business.name}
          </div>
          <p>{business.description}</p>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><Link to="/shop/all">Shop the Collection</Link></li>
            <li><Link to="/#about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li>
              <a href={STYLESEAT_URL} target="_blank" rel="noopener noreferrer">
                Book an Install
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            {contact.phone && <li><span>{contact.phone}</span></li>}
            {contact.instagram && (
              <li>
                <a href={contact.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © {year} {business.name}. All rights reserved.
      </div>
    </footer>
  )
}
