import { useState } from "react";
import { NavLink } from "react-router-dom";
import './navbar.css';
import logo from "../../logo.png"

const Navbar = () =>{
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return(
            <nav className="navbar" aria-label="Main navigation">
                <NavLink to="/pages/home" className="brand" onClick={closeMenu}>
                    <img src={logo} alt="Varun Vora home" className="logo" />
                </NavLink>
                <button
                    className="menu-toggle"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls="navbar-links"
                    aria-label="Toggle navigation menu"
                    onClick={() => setIsOpen((open) => !open)}
                >
                    <span />
                    <span />
                    <span />
                </button>
                <ul id="navbar-links" className={`navbar-links ${isOpen ? 'open' : ''}`}>
                    <li><NavLink to="/pages/home" onClick={closeMenu}>Home</NavLink></li>
                    <li><NavLink to="/pages/about" onClick={closeMenu}>About</NavLink></li>
                    <li><NavLink to="/pages/project" onClick={closeMenu}>Projects</NavLink></li>
                    <li><NavLink to="/pages/service" onClick={closeMenu}>Service</NavLink></li>
                    <li><NavLink to="/pages/contact" onClick={closeMenu}>Contact</NavLink></li>
                </ul>
            </nav>
    );
};

export default Navbar;

