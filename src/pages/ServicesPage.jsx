import { STYLESEAT_URL, booking, services } from '../config'

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="rule rule--light" />
          <span className="eyebrow">Salon Services</span>
          <h1>Book your install</h1>
          <p className="lede">
            Already have your hair? Our salon installs, maintains, and
            customizes it — booked and managed through StyleSeat.
          </p>
        </div>
      </section>

      <section className="section services">
        <div className="container">
          <div className="services-grid">
            {services.map((service, i) => (
              <div className="service-card" key={service.name}>
                <span className="service-index">{String(i + 1).padStart(2, '0')}</span>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>

          <div className="deposit-note services-deposit">
            <span className="amount">${booking.depositAmount}</span>
            <p>{booking.note}</p>
          </div>

          <div className="services-cta">
            <a
              className="btn btn-primary"
              href={STYLESEAT_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book on StyleSeat
            </a>
            <p className="booking-powered">Booking securely powered by StyleSeat</p>
          </div>
        </div>
      </section>
    </>
  )
}
