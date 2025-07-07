import React from 'react'
import { Skill } from './Skills';
import Stock1 from '../assets/stock1.jpg';

const Project = ({title,description, text= [] }) => {
  return (
    <div className="card group relative bg-base-100 rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:bg-neutral">
        <figure className='aspect-video relative overflow-hidden rounded-lg transition-all duration-300 group-hover:scale-102' >
            <img
            src={Stock1}
            alt="project"/>
        </figure>
        <div className="card-body">
            <h3 className="card-title text-[15px] font-semibold ">{title}</h3>
            <p>{description}</p>
            <div className="flex flex-start">
            {text.map((item,index) => (
              <Skill key={index} text={item} />
            ))}
            </div>
            <div className='card-actions flex justify-start text-[12px] hover:text-info-content ' >
              <a className="link link-hover ml-1">Github</a>
              <a className="link link-hover ">View project</a>
            </div> 
        </div> 
    </div>
  )
}

const Projects = () => {
  return (
    <div className="flex flex-col gap-1 mb-4 ">
        <h2 className='text-base ml-5 mb-2 mt-2 font-bold'>Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 justify-center" >
            <Project 
              title="project1" 
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit illum perferendis blanditiis facilis! Harum, veritatis?" 
              text={["html", "css", "git"]} />
            <Project 
              title="project2" 
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit illum perferendis blanditiis facilis! Harum, veritatis?" 
              text={["react", "express", "node"]}/>
            <Project 
              title="project3" 
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit illum perferendis blanditiis facilis! Harum, veritatis?" 
              text={["kk", "dsb", "gisdbt"]}/>
            <Project 
              title="project4" 
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit illum perferendis blanditiis facilis! Harum, veritatis?" 
              text={["sbd", "spd", "enn"]}/>
        </div>
    </div>
  )
}

export default Projects