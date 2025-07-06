import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Achievement from './components/Achievements'

const App = () => {
  return (
    <div className='min-h-screen bg-base-200 w-[100%] text-pretty mx-auto lg:pl-[200px] lg:pr-[200px] relative '>
      <div className='container mx-auto px-4 py-8 relative'>
        <nav><Navbar/></nav>
        <section><About/></section>
        {/* <section>Work Experience</section> */}
        <section><Skills/></section>
        <section> <Achievement/> </section>
      </div>
    </div>
  )
}

export default App