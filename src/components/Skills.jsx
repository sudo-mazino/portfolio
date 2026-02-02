import { Wrench } from 'lucide-react'
import React from 'react'

export const Skill = ({text}) => {
  return (
    <div className='badge badge-info rounded-lg mt-1 mb-1 mr-2 text-[18px] text-accent-content font-semibold transition-all duration-300 ease-in-out hover:badge-outline hover:scale-102 hover:-translate-y-[2px] '>{text}</div>
  )
}

const Skills = () => {
  return (
    <div className='flex flex-col gap-2 mb-4 backdrop-blur-md rounded-lg border-1 border-base-300 p-2 bg-base-100 shadow-sm'>
      <h2 className='flex items-center gap-2 text-base ml-3 font-bold text-[24px] bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white'><Wrench />Skills</h2>
      <div className='flex flex-wrap ml-1.5'>
        <Skill text="JavaScript" />
        <Skill text="React" />
        <Skill text="Node.js" />
        <Skill text="Express.js" />
        <Skill text="MongoDB" />
        <Skill text="HTML" />
        <Skill text="CSS" />
        <Skill text="Tailwind CSS" />
        <Skill text="Git" />
        <Skill text="Java" />
        <Skill text="C++" />
        <Skill text="Python" />
        <Skill text="Linux" />
        <Skill text="Maven" />
        <Skill text="JUnit" />
        <Skill text="JSON" />
        <Skill text="Docker" />
        <Skill text="CMake" />

      </div>
    </div>
  )
}

export default Skills
