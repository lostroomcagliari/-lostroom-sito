import type { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import RevealController from '../../components/RevealController'
import FormatPageTemplate from '../../components/format-page/FormatPageTemplate'
import content from './content'

export const metadata: Metadata = {
  title: 'Adventure Night — Lost Room',
  description:
    'Di notte, con una torcia, dentro musei, siti archeologici, parchi e luoghi culturali che normalmente non si possono giocare. Il format Adventure Night di Lost Room, dal 2018.',
}

export default function AdventureNightPage() {
  return (
    <main className="min-h-screen bg-ink-900">
      <RevealController />
      <Header />
      <FormatPageTemplate content={content} />
      <Footer />
    </main>
  )
}
