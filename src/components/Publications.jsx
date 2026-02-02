import { Newspaper } from 'lucide-react'
import React from 'react'

const List = ({text}) => {
  return (
    <div className='flex items-start' >
        <div className='min-w-[8px] h-[8px] rounded-full bg-base-content/30 m-2 ml-3'></div>
        <p className='text-[18px] text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white' >{text}</p>
    </div>
  )
}


const Publications = () => {
  return (
    <div className="flex flex-col gap-1 mb-2 backdrop:blur-sm rounded-lg border-1 border-base-300 p-2 bg-base-100 shadow-sm">
      <h2 className='flex items-center gap-2 text-base ml-3 font-bold text-[24px]  bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white'><Newspaper />Publications</h2>
      <div className='flex flex-col'>
        <List text='Co-author of the research paper "Attention-Driven Modelling of Pose for Sign Language Recognition" — accepted and in process for publication at IEEE ICOCIT 2024.' />
      </div>
    </div>
  )
}

export default Publications