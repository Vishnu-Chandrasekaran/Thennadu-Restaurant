import React from 'react'
import Navbar from './components/Navigation/Navbar'
import Hero from './components/Hero/Hero'
import Specials from './components/Hero/Specials'
import Contact from './components/Hero/Contact'

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Specials/>
      <Contact />
    </main>
  )
}

export default App