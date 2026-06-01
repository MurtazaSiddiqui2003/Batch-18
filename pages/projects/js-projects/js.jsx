import React, { useState } from 'react'
import jsProjects from './myJs'
import './js.css'

const JsProjects = () => {
  // Pass the data directly into useState to avoid the infinite loop
  const [projects] = useState(jsProjects.projects)

  console.log(projects)

  return (
    <div className='jsProjects'>
      <h1>My JS Projects</h1>
      <div className="projects">
        {projects.map((e) => {
          return (
            // Added the 'key' prop here using e.id
            <div className='projectCard' key={e.id}>
              <img src={e.img} alt={e.name} className='projectImage' />
              <h3>{e.name}</h3>
              <a href={`https://${e.link}`} target="_blank" rel="noreferrer">
                View Project
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default JsProjects