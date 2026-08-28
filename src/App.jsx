import CorporateBenefits from './components/CorporateBenefits'
import ErrorBoundary from './components/ErrorBoundary'
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
  return (
    <div id="top" className="min-h-screen bg-bg text-text">
      <ErrorBoundary>
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
      </ErrorBoundary>

      <IntroSplash />
    </div>
  )
}

export default App
