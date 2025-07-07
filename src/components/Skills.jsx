import React from 'react'

export const Skill = ({text}) => {
  return (
    <div className='badge badge-info rounded-lg mt-1 mb-1 mr-2 text-accent-content font-semibold transition-all duration-300 ease-in-out hover:badge-outline hover:scale-102 hover:-translate-y-[2px] '>{text}</div>
  )
}

const Skills = () => {
  return (
    <div className='flex flex-col gap-2 mb-2 backdrop:blur-sm rounded-lg border-1 border-base-300 p-2 bg-base-100 shadow-sm'>
      <h2 className='text-base ml-3 font-bold'>Skills</h2>
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
        <Skill text="REST APIs" />
      </div>
    </div>
  )
}

export default Skills
