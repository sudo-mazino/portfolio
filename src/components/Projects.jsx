import React from 'react'
import { Skill } from './Skills';
import Stock1 from '../assets/stock1.jpg';
import { CodeXml } from 'lucide-react';

const Project = ({title,description, text= [],github,projectl }) => {
  return (
    <div className="card group relative bg-base-100 p-2 rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:bg-neutral">
        <div className='aspect-video relative overflow-hidden rounded-lg' >
          <figure className='transition-all duration-300 group-hover:scale-103' >
            <img src={Stock1} alt="project"/>
          </figure>
        </div>
        <div className="card-body">
            <h3 className="card-title text-[15px] font-semibold ">{title}</h3>
            <p>{description}</p>
            <div className="flex flex-start">
              {text.map((item,index) => (
                <Skill key={index} text={item} />
              ))}
            </div>
            <div className='card-actions flex justify-start text-[12px] '>
              <a className="group/link" href={github}>
                <div className='bg-base-100 rounded-full p-0.5 pl-2 pr-2 transition-all duration-300 group-hover/link:scale-104 group-hover/link:bg-secondary group-hover/link:text-secondary-content '>Github</div>
              </a>
              <a className="group/pro" href={projectl}>
                <div className='bg-base-100 rounded-full p-0.5 pl-2 pr-2 transition-all duration-300 group-hover/pro:scale-104 group-hover/pro:bg-secondary group-hover/pro:text-secondary-content '>View project</div>
              </a>
            </div> 
        </div> 
    </div>
  )
}

const Projects = () => {
  return (
    <div className="flex flex-col gap-1 mb-4 ">
        <h2 className='flex flex-row gap-2 text-base ml-5 mb-2 mt-2 font-bold'><CodeXml /> Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 justify-center" >
            <Project 
              title="project1" 
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit illum perferendis blanditiis facilis! Harum, veritatis?" 
              text={["html", "css", "git"]}
              github="https://github.com/Kuru-kuru-society"
              projectl=""/>
            <Project 
              title="project2" 
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit illum perferendis blanditiis facilis! Harum, veritatis?" 
              text={["react", "express", "node"]}
              github="https://github.com/Kuru-kuru-society"
              projectl=""/>
            <Project 
              title="project3" 
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit illum perferendis blanditiis facilis! Harum, veritatis?" 
              text={["kk", "dsb", "gisdbt"]}
              github="https://github.com/Kuru-kuru-society"
              projectl=""/>
            <Project 
              title="project4" 
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit illum perferendis blanditiis facilis! Harum, veritatis?" 
              text={["sbd", "spd", "enn"]}
              github="https://github.com/Kuru-kuru-society"
              projectl=""/>
        </div>
    </div>
  )
}

export default Projects