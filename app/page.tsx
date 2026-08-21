import Header from './components/Header'
import RevealController from './components/RevealController'
import Hero from './components/Hero'
import EditorialNote from './components/EditorialNote'
import RoomToEverything from './components/RoomToEverything'
import FormatSection from './components/FormatSection'
import StartingPoints from './components/StartingPoints'
import OurWay from './components/OurWay'
import Verticals from './components/Verticals'
import Projects from './components/Projects'
import AboutUs from './components/AboutUs'
import NextEvents from './components/NextEvents'
import Halloween from './components/Halloween'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-ink-900">
      <RevealController />
      <Header />
      <Hero />
      <EditorialNote />
      <RoomToEverything />
      <FormatSection />
      <StartingPoints />
      <OurWay />
      <Verticals />
      <Projects />
      <AboutUs />
      <NextEvents />
      <Halloween />
      <Contact />
      <Footer />
    </main>
  )
}
