import { STYLESEAT_URL, booking } from '../config'

export default function Booking() {
  return (
    <section className="section booking" id="booking">
      <div className="container">
        <div className="booking-copy">
          <span className="eyebrow">Salon Services</span>
          <h2>Book your appointment</h2>
          <p>
            From installs to maintenance, book your chair with Rare Strands
            in just a couple of clicks. Bookings and scheduling are managed
            through StyleSeat.
          </p>

          <div className="deposit-note">
            <span className="amount">${booking.depositAmount}</span>
            <p>{booking.note}</p>
          </div>

          <p>
            Services and pricing are listed on our StyleSeat page — select a
            service, pick a time, and pay your deposit to confirm.
          </p>
        </div>

        <div className="booking-card">
          <h3>Ready when you are</h3>
          <p>Real-time availability, secure deposits, and easy rescheduling.</p>
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
  )
}
