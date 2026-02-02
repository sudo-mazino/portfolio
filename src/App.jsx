import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Publications from './components/Publications'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import LiquidEther from './components/LiquidEther'

const App = () => {
  return (
    <div className="relative min-h-screen bg-black w-full overflow-hidden">
      
      {/* Liquid background */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          colors={[ '#ff5f1f', '#2323ff', '#a800a8' ]}
          mouseForce={40}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce
          autoDemo={true}
          autoSpeed={0.9}
          autoIntensity={2.2}
          takeoverDuration={0.1}
          autoResumeDelay={5}
          autoRampDuration={0.6}
          color0="#2323ff"
          color1="#ff5f1f"
          color2="#a800a8"
        />
      </div>
        {/* Signature background text */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <h1
      className="
        text-white
        text-[120px]
        md:text-[320px]
        tracking-wide
        select-none
        mix-blend-difference
        md:ml-24
        text-center
      "
      style={{ fontFamily: 'AnshSignature' }}
    >
      Ansh Sharma
    </h1>
  </div>

      {/* Actual content */}
      <div className="relative z-10 h-screen overflow-y-auto no-scrollbar lg:pl-[250px] lg:pr-[250px]">
        <div className="container mx-auto px-4 py-8">
          <nav><Navbar /></nav>
          <section><About /></section>
          <section><Skills /></section>
          <section><Achievements /></section>
          <section><Publications /></section>
          <section><Projects /></section>
        </div>
      </div>

    </div>
  )
}


export default App