import React from 'react'
import { Route, Routes } from 'react-router'
import "./routes.css"

import Home from "../pages/home/home";
import About from "../pages/about/about";
import Contact from "../pages/contact/contact";
import ServicesScreen from "../pages/services/services";
import ProductApi from '../pages/api/product-api';
import TodoScreen from "../pages/Todo/todo";
import Counter from '../pages/counter/counter';
import Animation from "../pages/animation/animation";
import ColorFlip from '../pages/color-flipper/colorflipper';
import Weather from  '../pages/weather-app/weather';
import Projects from '../pages/projects/projects';
import CssProjects from '../pages/projects/css-projects/css'
import JsProjects from '../pages/projects/js-projects/js.jsx';
// import UsersScreen from "../pages/users/users";
// import User from "../pages/user/user";
// import PerformanceOptimization from "../pages/performance-optimization/po";
import SignUp from '../pages/sign-up/signup'
import Login from '../pages/log-in/login';
import NotFound from "../pages/not-found/not-found";

const RoutesComponent = () => {
    return (
        <div className='everything'>
            <Routes className='everything'>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<ServicesScreen />} />
                <Route path="/todo" element={<TodoScreen />} />
                <Route path='/product' element={<ProductApi />} />
                <Route path='/counter' element={<Counter />} />
                <Route path="/colorflip" element={<ColorFlip />} /> 
                <Route path="/animation" element={<Animation />} />
                <Route path="/projects" element={<Projects />} /> 
                <Route path="/css-projects" element={<CssProjects />} />
                <Route path='/js-projects' element={<JsProjects />} /> 
                <Route path='/weather' element={<Weather /> } />
                {/* <Route path="/users" element={<UsersScreen />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/user/:id" element={<User />} />
                <Route path="/performance-optimization" element={<PerformanceOptimization />} />*/}
                <Route path="/login" element={<Login />} /> 
                <Route path="/signup" element={<SignUp />} /> 
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default RoutesComponent
