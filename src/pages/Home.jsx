import Hero from '../components/Hero'
import BestSellers from '../components/BestSellers'
import Marquee from '../components/Marquee'
import Collection from '../components/Collection'
import About from '../components/About'
import Booking from '../components/Booking'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <BestSellers />
      <Collection />
      <About />
      <Booking />
    </>
  )
}
