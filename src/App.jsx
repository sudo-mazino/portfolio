import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='min-h-screen bg-base-300 w-[100%] text-pretty mx-auto lg:pl-[200px] lg:pr-[200px] relative '>
      <div className='container mx-auto px-4 py-8 relative'>
        <Navbar/>
      </div>
    </div>
  )
}

export default App