import React from 'react'
import Logo from '../../public/logo.jpg'
// import "./header.css"

const Header = () => {
    return (
        <div className='header'>
            <img src={Logo} alt="" />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Services</li>
            </ul>
        </div>

    )
}

export default Header
