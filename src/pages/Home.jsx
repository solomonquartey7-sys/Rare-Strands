import Hero from '../components/Hero'
import BestSellers from '../components/BestSellers'
import Marquee from '../components/Marquee'
import Collection from '../components/Collection'
import Shop from '../components/Shop'
import About from '../components/About'
import Booking from '../components/Booking'

export default function Home() {
  return (
    <>
      <Hero />
      <BestSellers />
      <Marquee />
      <Collection />
      <Shop />
      <About />
      <Booking />
    </>
  )
}
