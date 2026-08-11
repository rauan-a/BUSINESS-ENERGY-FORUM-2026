import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import MobileCta from './components/MobileCta.jsx'

import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Concept from './sections/Concept.jsx'
import Audience from './sections/Audience.jsx'
import Program from './sections/Program.jsx'
import Benefits from './sections/Benefits.jsx'
import Mission from './sections/Mission.jsx'
import FinalCta from './sections/FinalCta.jsx'
import Contacts from './sections/Contacts.jsx'

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Concept />
        <Audience />
        <Program />
        <Benefits />
        <Mission />
        <FinalCta />
        <Contacts />
      </main>

      <Footer />
      <MobileCta />
    </>
  )
}
