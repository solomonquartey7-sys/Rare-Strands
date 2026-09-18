import { STYLESEAT_URL, booking } from '../config'

export default function Booking() {
  return (
    <section className="booking-banner" id="booking">
      <div className="container booking-banner-inner">
        <div className="booking-banner-copy">
          <span className="eyebrow">Already Shopping With Us?</span>
          <h3>Book your install at our salon</h3>
          <p>
            Once you've picked out your hair, our salon can install it for
            you. A <strong>${booking.depositAmount} deposit</strong> secures
            your appointment — booked and managed through StyleSeat.
          </p>
        </div>
        <a
          className="btn btn-primary booking-banner-btn"
          href={STYLESEAT_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book on StyleSeat
        </a>
      </div>
    </section>
  )
}
