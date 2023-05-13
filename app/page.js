import AdoptionGrid from './AdoptionGrid'
import Footer from './Footer'
import HeroSection from './HeroSection'
import Navbar from './Navbar'
import SwiperGames from './SwiperGames'
import SwiperPersone from './SwiperPersone'

export default function Home () {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      <AdoptionGrid />
      <SwiperPersone />
      <SwiperGames />
      <Footer />
    </>
  )
}
