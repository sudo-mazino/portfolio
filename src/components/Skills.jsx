import React from 'react'

function Skills() {
  return (
    <div className='flex flex-col gap-2 mb-8 backdrop:blur-sm rounded-lg border-2 border-base-100 p-2 bg-base-200 shadow-sm'>
      <h2 className='text-base ml-3 font-bold'>Skills</h2>
      <div className='flex flex-wrap ml-1.5'>
        <div className='badge badge-info m-1 transition-all duration-300 ease-in-out hover:badge-outline hover:scale-102 hover:-translate-y-[2px] font-semibold '>JavaScript</div>
        <div className='badge badge-info m-1 transition-all duration-300 ease-in-out hover:badge-outline hover:scale-102 hover:-translate-y-[2px] font-semibold '>React</div>
        <div className='badge badge-info m-1 transition-all duration-300 ease-in-out hover:badge-outline hover:scale-102 hover:-translate-y-[2px] font-semibold '>Node.js</div>
        <div className='badge badge-info m-1 transition-all duration-300 ease-in-out hover:badge-outline hover:scale-102 hover:-translate-y-[2px] font-semibold '>Express</div>
        <div className='badge badge-info m-1 transition-all duration-300 ease-in-out hover:badge-outline hover:scale-102 hover:-translate-y-[2px] font-semibold '>MongoDB</div>
        <div className='badge badge-info m-1 transition-all duration-300 ease-in-out hover:badge-outline hover:scale-102 hover:-translate-y-[2px] font-semibold '>CSS</div>
        <div className='badge badge-info m-1 transition-all duration-300 ease-in-out hover:badge-outline hover:scale-102 hover:-translate-y-[2px] font-semibold '>HTML</div>
        <div className='badge badge-info m-1 transition-all duration-300 ease-in-out hover:badge-outline hover:scale-102 hover:-translate-y-[2px] font-semibold '>Git</div>
      </div>
    </div>
  )
}

export default Skills
