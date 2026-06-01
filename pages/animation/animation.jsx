import React from 'react'
import ReactLogo from './react.png'
import './animation.css'

const Animation = () => {
  return (
    <div className='animation'>
      <div className="animation-div">
        <div className="circle">
          <img src={ReactLogo} height={"500px"} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Animation;
