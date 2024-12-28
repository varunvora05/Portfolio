import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./src/pages/home"
import Service from "./src/pages/service"
import Contact from "./src/pages/contact"
import About from "./src/pages/about"
import Project from "./src/pages/project"
import Navbar from './src/components/navbar'

const MainRouter = () =>{
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="pages/home" element={<Home/>}/>
                <Route path="pages/service" element={<Service/>}/>
                <Route path="pages/contact" element={<Contact/>}/>
                <Route path="pages/about" element={<About/>}/>
                <Route path="pages/project" element={<Project/>}/>
            </Routes>     
        </div>
    );
};

export default MainRouter;