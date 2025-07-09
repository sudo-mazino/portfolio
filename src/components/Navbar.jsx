import React from 'react'
import { Mail,Github,Linkedin,Phone } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mb-4 backdrop:blur-sm rounded-lg navbar border-1 border-base-300 p-2 bg-base-100 shadow-sm">
        <div className='flex flex-col gap-1 ml-3'>
            <h1 className='text-2xl font-bold'>Ansh Sharma</h1>
            <p className='text-[13px] '>Full Stack Developer | Systems Engineer | Machine Learning Enthusiast</p>
        </div>
        <div>
            <ul className="menu menu-horizontal px-1">
                <li className='hover:scale-115 transition-transform duration-300 ease-in-out'><a href="https://www.linkedin.com/in/anshsharma-ln/"><Linkedin className='text-secondary'/></a></li>
                <li className='hover:scale-115 transition-transform duration-300 ease-in-out'><a href="https://github.com/Ultimecia1463"><Github className='text-secondary'/></a></li>
                <li className='hover:scale-115 transition-transform duration-300 ease-in-out'><a href="mailto:anshsharma5565@gmail.com"><Mail className='text-secondary'/></a></li>
                <li className='hover:scale-115 transition-transform duration-300 ease-in-out'><a href="tel:+917987376083"><Phone className='text-secondary'/></a></li>
            </ul>
        </div>     
        <div className='flex items-center gap-2'>
            <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" className="theme-controller" value="bumblebee" />

                {/* sun icon */}
                <svg
                    className="swap-off h-6 w-6 fill-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* moon icon */}
                <svg
                    className="swap-on h-6 w-6 fill-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
            </label>
            <div className="flex-none">
                <button className="btn btn-square btn-ghost" onClick={() => window.open("https://drive.google.com/file/d/1xtvBk04ZARdQ5EvlL-VjybiH2rTw_OCS/view?usp=sharing", "_blank")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text h-5 w-5 text-info"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar