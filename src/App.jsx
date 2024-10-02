import React, { useEffect } from 'react'
import Navbar from './components/Navigation/Navbar'
import Hero from './components/Hero/Hero'
import Specials from './components/Hero/Specials'
import Contact from './components/Hero/Contact'

import AOS from 'aos'
import "aos/dist/aos.css"

const App = () => {

  useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100
    });
    AOS.refresh();
    

  })
  return (
    <main className='overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Specials/>
      <Contact />
    </main>
  )
}

export default App