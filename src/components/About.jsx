import React from 'react'
import { User } from 'lucide-react';  

function About() {
  return (
    <div className="flex flex-col gap-2 mb-4 backdrop:blur-sm rounded-lg border-1 border-base-300 p-2 bg-base-100 shadow-sm">
      <h2 className='flex flex-row gap-2 text-base ml-3 font-bold'><User/>About Me</h2>
      <p className='ml-3 text-[14px] text-justify mr-3 '>I'm Ansh Sharma, a third-year B.Tech student in Computer Science (Data Science) at LNCTE, Bhopal, passionate about building systems from the ground up — from a basic x86 operating systems and Java-based neural networks to full-stack web apps. I enjoy low-level programming, machine learning, and solving real-world problems through tech. I'm an open-source contributor, bug hunter, and co-author of a published IEEE paper on sign language recognition presented at ICOCIT 2024. Always eager to explore, I actively participate in hackathons, tech talks, and conferences.</p>
    </div>
  )
}

export default About
