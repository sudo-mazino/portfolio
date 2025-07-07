import React from 'react'
import { User } from 'lucide-react';  

function About() {
  return (
    <div className="flex flex-col gap-2 mb-4 backdrop:blur-sm rounded-lg border-1 border-base-300 p-2 bg-base-100 shadow-sm">
      <h2 className='flex flex-row gap-2 text-base ml-3 font-bold'><User/>About Me</h2>
      <p className='ml-3 text-[14px] text-justify mr-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nobis distinctio dolores ducimus vitae pariatur quam adipisci quisquam animi temporibus,laborum natus fuga culpa dignissimos.</p>
    </div>
  )
}

export default About
