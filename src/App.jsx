import { useState } from 'react'
import CorporateBenefits from './components/CorporateBenefits'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import IntroSplash from './components/IntroSplash'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import TrustBar from './components/TrustBar'
import WhatsAppFloat from './components/WhatsAppFloat'
import WhyChoose from './components/WhyChoose'

function App() {
  const [introDone, setIntroDone] = useState(false)

  return (
    <div id="top" className="min-h-screen bg-bg text-text">
      {!introDone && <IntroSplash onFinish={() => setIntroDone(true)} />}

      {introDone && (
        <>
          <Header />

          <main>
            <Hero />
            <TrustBar />
            <WhyChoose />
            <Testimonials />
            <HowItWorks />
            <Services />
            <CorporateBenefits />
            <FAQ />
            <FinalCTA />
          </main>

          <Footer />
          <WhatsAppFloat />
        </>
      )}
    </div>
  )
}

export default App
