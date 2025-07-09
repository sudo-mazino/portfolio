import { Award } from 'lucide-react'
import React from 'react'

const List = ({text}) => {
  return (
    <div className='flex items-start' >
        <div className='min-w-[8px] h-[8px] rounded-full bg-base-content/30 m-2 ml-3'></div>
        <p className='text-[14px]' >{text}</p>
    </div>
  )
}


const Achievements = () => {
  return (
    <div className="flex flex-col gap-1 mb-4 backdrop:blur-sm rounded-lg border-1 border-base-300 p-2 bg-base-100 shadow-sm" >
        <h2 className='flex flex-row gap-2 text-base ml-3 font-bold'><Award />Achievement</h2>
        <div className='flex flex-col ' >
            <List text="HacktoberFest Contributer"/>
            <List text="GsSoc Campus Ambassador 2025"/>
            <List text="Open Source Contributor"/>
            <List text="IEEE ICOCIT 2025 Research Paper Co-Author"/>
        </div>
    </div>
  )
}

export default Achievements