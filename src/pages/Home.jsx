import Hero from '../components/Hero'
import TrustBand from '../components/TrustBand'
import AudienceTabs from '../components/AudienceTabs'
import ValueProps from '../components/ValueProps'
import ServicesDiagram from '../components/ServicesDiagram'
import TaxSituation from '../components/TaxSituation'
import Testimonials from '../components/Testimonials'
import Guarantees from '../components/Guarantees'
import CTABand from '../components/CTABand'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBand />
      <AudienceTabs />
      <ValueProps />
      <ServicesDiagram />
      <TaxSituation />
      <Testimonials />
      <Guarantees />
      <CTABand />
    </>
  )
}
