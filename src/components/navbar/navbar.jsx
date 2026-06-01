import React from 'react';
import { Link, useLocation } from "react-router";
import "./navbar.css"

const Navbar = () => {

    const { pathname } = useLocation();

    return (
        <nav>
            <ul className='navBar'>
                <li> <Link to={'/'}> Home </Link> </li>
                <li> <Link to={'/about'}> About </Link> </li>
                <li> <Link to={'/contact'}> Contact </Link> </li>
                <li> <Link to={'/services'}> Services </Link> </li>
                <li> <Link to={'/projects'}> Projects </Link> </li>                
                <li><Link to={'/product'}>Product</Link></li>
                <li> <Link to={'/counter'}> Counter </Link> </li>
                <li> <Link to={'/todo'}> Todo </Link> </li>
                <li> <Link to={'/weather'}> Weather </Link> </li>
                <li> <Link to={'/users'}> Users </Link> </li>
                <li> <Link to={'/animation'}> Animation </Link> </li>
                <li> <Link to={'/login'}> Login </Link> </li>
                <li> <Link to={'/signup'}> SignUp </Link> </li>
                
            </ul>
        </nav>
    )
}

export default Navbar;