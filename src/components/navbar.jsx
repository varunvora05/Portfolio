import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';
import logo from "../../logo.png"

const Navbar = () =>{
    return(
        <>
            <nav className="navbar">

                <ul className="navbar-links">
                <li>
                        <Link to="../pages/home"><img src={logo} alt='logo' className='logo' /></Link>
                    </li>
                
                    <li>
                        <Link to="../pages/home">Home</Link>
                    </li>
                    <li>
                        <Link to="../pages/About">About</Link>
                    </li>
                    <li>
                        <Link to="../pages/Project">Projects</Link>
                    </li>
                    <li>
                        <Link to="../pages/Service">Service</Link>
                    </li>
                    <li>
                        <Link to="../pages/Contact">Contact</Link>
                    </li>
                </ul>
            </nav>

        </>
    );
};

export default Navbar;

