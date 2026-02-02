import React from 'react'
import { Mail,Github,Linkedin,Phone, FileUser } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-3 mb-4 backdrop-blur-md rounded-lg navbar border border-base-300 p-3 bg-base-100 shadow-sm" >
        <div className='flex flex-col gap-1 ml-1 md:ml-3 w-full md:w-auto'>
            <p className='text-[24px] md:text-[25px] text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white '>Full Stack Developer | Systems Engineer | Machine Learning Enthusiast</p>
        </div>
        <ul className="flex gap-4 mr-3">
            <li className='scale-120 hover:scale-115 transition-transform duration-300 ease-in-out btn btn-link btn-circle'><a href="https://www.linkedin.com/in/anshsharma-ln/"  target="_blank" rel="noopener noreferrer" ><Linkedin className='text-info'/></a></li>
            <li className='scale-120 hover:scale-115 transition-transform duration-300 ease-in-out btn btn-link btn-circle'><a href="https://github.com/Ultimecia1463"  target="_blank" rel="noopener noreferrer" ><Github className='text-info'/></a></li>
            <li className='scale-120 hover:scale-115 transition-transform duration-300 ease-in-out btn btn-link btn-circle'><a href="mailto:anshsharma5565@gmail.com"><Mail className='text-info'/></a></li>
            <li className='scale-120 hover:scale-115 transition-transform duration-300 ease-in-out btn btn-link btn-circle'><a href="tel:+917987376083"><Phone className='text-info'/></a></li>
            <li className='scale-120 hover:scale-115 transition-transform duration-300 ease-in-out btn btn-link btn-circle'><a href="https://drive.google.com/file/d/1rLW79oWxCsAhbJvfOK3xz7iSvbqCG0ly/view"><FileUser className='text-info'/></a></li>
        </ul>
        
    </div>
  )
}

export default Navbar