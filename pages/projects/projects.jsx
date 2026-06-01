import React from 'react'
import { useNavigate } from 'react-router'
import './projects.css'

const Projects = () => {
    const navigate = useNavigate()

    const toCssScreen = () => {
        navigate('/css-projects')
    }

    const toJsScreen = () => {
        navigate('/js-projects')
    }
  return (
    <div className='projects-div'>
        <div className="css" onClick={toCssScreen}>
            <h3>Click Here To See CSS Projects</h3>
        </div>
        <div className="js" onClick={toJsScreen}>
            <h3>Click Here To See CSS Projects</h3>
        </div>
    </div>
  )
}

export default Projects