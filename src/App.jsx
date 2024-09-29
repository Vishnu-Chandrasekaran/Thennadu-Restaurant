import React from 'react'
import Navbar from './components/Navigation/Navbar'
import Hero from './components/Hero/Hero'
import Specials from './components/Hero/Specials'

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Specials/>
    </main>
  )
}

export default App