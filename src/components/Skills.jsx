import React from 'react'

function Skills() {
  return (
    <div className='flex flex-col gap-2 mb-8 backdrop:blur-sm rounded-lg border-2 border-base-100 p-2 bg-base-200 shadow-sm'>
      <h2 className='text-base ml-3 font-bold'>Skills</h2>
      <div className='flex flex-wrap ml-1.5'>
        <div className='badge badge-outline badge-info m-1 transition-all duration-300 ease-in-out hover:badge-soft'>JavaScript</div>
        <div className='badge badge-outline badge-info m-1 transition-all duration-300 ease-in-out hover:badge-soft'>React</div>
        <div className='badge badge-outline badge-info m-1 transition-all duration-300 ease-in-out hover:badge-soft'>Node.js</div>
        <div className='badge badge-outline badge-info m-1 transition-all duration-300 ease-in-out hover:badge-soft'>Express</div>
        <div className='badge badge-outline badge-info m-1 transition-all duration-300 ease-in-out hover:badge-soft'>MongoDB</div>
        <div className='badge badge-outline badge-info m-1 transition-all duration-300 ease-in-out hover:badge-soft'>CSS</div>
        <div className='badge badge-outline badge-info m-1 transition-all duration-300 ease-in-out hover:badge-soft'>HTML</div>
        <div className='badge badge-outline badge-info m-1 transition-all duration-300 ease-in-out hover:badge-soft'>Git</div>
      </div>
    </div>
  )
}

export default Skills
