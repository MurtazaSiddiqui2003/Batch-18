import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";

import Home from "../pages/home/home";
import About from "../pages/about/about";
import Contact from "../pages/contact/contact";
import ServicesScreen from "../pages/services/services";
import ProductApi from "../pages/api/product-api";
import TodoScreen from "../pages/Todo/todo";
import Counter from "../pages/counter/counter";
import Animation from "../pages/animation/animation";
import ColorFlip from "../pages/color-flipper/colorflipper";
import Weather from "../pages/weather-app/weather";
import Projects from "../pages/projects/projects";
import CssProjects from "../pages/projects/css-projects/css.jsx";
import JsProjects from "../pages/projects/js-projects/js.jsx";
import LoveProposal from "../pages/love/love";
import NotFound from "../pages/not-found/not-found";
import Profile from "../pages/profile/profile";
import EditProfile from "../pages/profile/editProfile";
// import Track from "../pages/tracking/tracking";


const PrivateRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<ServicesScreen />} />
            <Route path="/todo" element={<TodoScreen />} />
            <Route path="/product" element={<ProductApi />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/colorflip" element={<ColorFlip />} />
            <Route path="/animation" element={<Animation />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/css-projects" element={<CssProjects />} />
            <Route path="/js-projects" element={<JsProjects />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/love" element={<LoveProposal />} />
            <Route path="/track" element={<Track />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/editprofile" element={<EditProfile />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default PrivateRoutes;
