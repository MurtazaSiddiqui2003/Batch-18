import { React, useState } from 'react'
import './colorflipper.css'

const ColorFlip = () => {

    const [bgColor, setBgColor] = useState('#222')
    const handleColorChange = (color) => {
        if (color === 'random') {
            const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            setBgColor(randomColor);
        } else {
            setBgColor(color);
        }
    }

    return (
        <div className='colorflip-div' style={{ backgroundColor: bgColor, minHeight: '100vh', transition: 'background-color 0.3s ease' }}>
            <div id="colorflip-container">
                <h1>Color Flip</h1>
                <button id="red" onClick={() => handleColorChange('red')}>Red</button>
                <button id="green" onClick={() => handleColorChange('green')}>Green</button>
                <button id="blue" onClick={() => handleColorChange('blue')}>Blue</button>
                <button id="random" onClick={() => handleColorChange('random')}>Random</button>
            </div>
        </div>
    )
}

export default ColorFlip