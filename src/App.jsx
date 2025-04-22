import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Resume from './components/Resume'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import CustomNavbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <CustomNavbar />
      <Hero />
      <About />
      <Resume />
      <Certificates />
      <Contact />
      <Footer />
    </>
  )
}

// ✅ Make sure this line is here!
export default App
