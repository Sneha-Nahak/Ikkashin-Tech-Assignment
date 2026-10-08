import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import QuickActions from '@/components/QuickActions'
import Stats from '@/components/Stats'
import About from '@/components/About'
import Academics from '@/components/Academics'
import IITNDASection from '@/components/IITNDASection'
import Sports from '@/components/Sports'
import Achievements from '@/components/Achievements'
import News from '@/components/News'
import Admissions from '@/components/Admissions'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <QuickActions />
        <Stats />
        <About />
        <Academics />
        <IITNDASection />
        <Sports />
        <Achievements />
        <News />
        <Admissions />
      </main>
      <Footer />
    </>
  )
}
