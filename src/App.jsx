import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBand from './components/TrustBand'
import AudienceTabs from './components/AudienceTabs'
import ValueProps from './components/ValueProps'
import ServicesDiagram from './components/ServicesDiagram'
import TaxSituation from './components/TaxSituation'
import Testimonials from './components/Testimonials'
import Guarantees from './components/Guarantees'
import CTABand from './components/CTABand'
import Footer from './components/Footer'

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <TrustBand />
        <AudienceTabs />
        <ValueProps />
        <ServicesDiagram />
        <TaxSituation />
        <Testimonials />
        <Guarantees />
        <CTABand />
      </main>
      <Footer />
    </div>
  )
}
