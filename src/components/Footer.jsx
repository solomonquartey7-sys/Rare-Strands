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
            <li><a href="#about">About</a></li>
            <li><a href="#collection">Collection</a></li>
            <li><a href="#shop">Shop</a></li>
            <li>
              <a href={STYLESEAT_URL} target="_blank" rel="noopener noreferrer">
                Book an Appointment
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
