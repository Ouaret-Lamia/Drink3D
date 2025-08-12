import React from 'react'
import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from 'gsap'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Coffees from './components/Coffees'

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
        <Navbar />
        <Hero />
        <Coffees />
    </main>
  )
}

export default App