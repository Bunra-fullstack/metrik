import Navbar from './components/landing/Navbar'
import Hero from './components/landing/Hero'
import Features from './components/landing/Features'
import Pricing from './components/landing/Pricing'
import Footer from './components/landing/Footer'


function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Footer />

    </div>
  )
}

export default App