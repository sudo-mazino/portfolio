import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Publications from './components/Publications'
import Projects from './components/Projects'
import Achievements from './components/Achievements'

const App = () => {
  return (
    <div className='min-h-screen bg-base-200 w-[100%] text-pretty mx-auto lg:pl-[250px] lg:pr-[250px] relative '>
      <div className='container mx-auto px-4 py-8 relative'>
        <nav><Navbar/></nav>
        <section><About/></section>
        {/* <section>Work Experience</section> */}
        <section><Skills/></section>
        <section> <Achievements /> </section>
        <section> <Publications/> </section>
        <section> <Projects/> </section>
      </div>
    </div>
  )
}

export default App