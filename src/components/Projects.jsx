import React from 'react'
import { Skill } from './Skills';
import zenith from '../assets/zenith.png';
import islreact from '../assets/islreact.jpg';
import jhttp from '../assets/jhttp.png';
import jcnn from '../assets/jcnn.png';
import esp from '../assets/esp.png';
import { CodeXml } from 'lucide-react';
const Project = ({title,description, text= [],github,projectl,img }) => {
  return (
    <div className="card group relative bg-base-100 p-2 rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:bg-neutral">
        <div className='aspect-video relative overflow-hidden rounded-lg' >
          <figure className='transition-all duration-300 group-hover:scale-103' >
            <img src={img} alt="project"/>
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
              <a className="group/link" href={github} target="_blank" rel="noopener noreferrer" >
                <div className='bg-base-100 rounded-full p-0.5 pl-2 pr-2 transition-all duration-300 group-hover/link:scale-104 group-hover/link:bg-secondary group-hover/link:text-secondary-content '>Github</div>
              </a>
              <a className="group/pro" href={projectl} target="_blank" rel="noopener noreferrer" >
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
              title="Java Convolutional Neural Network" 
              description="A CNN built from scratch in Java without any external machine learning libraries. Implements convolution, pooling, and fully connected layers, trained and evaluated on MNIST data." 
              text={["Java", "Custom CNN", "Matrix Math", "MNIST", "OOP"]}
              github="https://github.com/Ultimecia1463/Java-cnn"
              projectl="https://github.com/Ultimecia1463/Java-cnn/releases"
              img={jcnn}
            />
            <Project 
              title="ISL to Text Converter"
              description="A real-time Indian Sign Language (ISL) recognition system using MediaPipe and TensorFlow.js integrated into a React frontend. It captures hand and pose gestures from webcam or video, translating them into text output dynamically."
              text={["React", "TensorFlow.js", "MediaPipe", "Node.js", "Express"]}
              github="https://github.com/Ultimecia1463/islreact"
              projectl="https://ultimecia1463.github.io/islreact/"
              img={islreact}
            />
            <Project 
              title="Java HTTP Server"
              description="A fully functional HTTP/1.1 server built from scratch in Java. Features include multi-threaded request handling, JSON-based configuration, custom request parsing, and structured exception handling."
              text={["Java", "HTTP/1.1", "Multi-threading", "Maven", "JUnit"]}
              github="https://github.com/Ultimecia1463/Simple-httpserver"
              projectl="https://github.com/Ultimecia1463/Simple-httpserver/releases/"
              img={jhttp}
            />
            <Project 
              title="Zenith OS"
              description="A custom x86 operating system built from scratch using NASM and C. Bootable from a floppy image with FAT filesystem support, debugged and run via QEMU."
              text={["x86", "NASM", "C", "QEMU", "FAT"]}
              github="https://github.com/Ultimecia1463/Zenith"
              projectl="https://github.com/Ultimecia1463/zenith/releases"
              img={zenith}
            />
            <Project 
              title="ESP Email Alert Security System"
              description="An IoT-based motion detection system using ESP8266/ESP32 that sends instant email alerts when intrusion or movement is detected. Built with Arduino IDE and integrated over Wi-Fi using SMTP/IFTTT for real-time notifications."
              text={["ESP8266", "IoT", "Arduino", "SMTP", "Security", "C++"]}
              github="https://github.com/Ultimecia1463/ESP-email-alert-Security-System"
              projectl="https://wokwi.com/projects/394723338612709377"
              img={esp}
            />
        </div>
    </div>
  )
}

export default Projects