import Header from './components/Header'
import Hero from './components/Hero'
import EditorialNote from './components/EditorialNote'
import Stats from './components/Stats'
import FormatSection from './components/FormatSection'
import StartingPoints from './components/StartingPoints'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-ink-900">
      <Header />
      <Hero />
      <EditorialNote />
      <Stats />
      <FormatSection />
      <StartingPoints />
      <Footer />
    </main>
  )
}
