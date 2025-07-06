import React from 'react'

const Project = () => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
            <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">
            Card Title
            <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
            </div>
        </div>
    </div>
  )
}

const Projects = () => {
  return (
    <div className="flex flex-col gap-1 mb-4">
        <h2 className='text-base ml-5 font-bold'>Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4' >
            <Project />
            <Project />
            <Project />
            <Project />
        </div>
    </div>
  )
}

export default Projects