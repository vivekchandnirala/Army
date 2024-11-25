// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/home">Home</Link></li>

                {/* Dropdown for About Us */}
                <li className="dropdown">
                    <span>About Us</span>
                    <ul className="dropdown-menu">
                        <li><Link to="/home/about/mission-vision">Mission & Vision</Link></li>
                        <li><Link to="/home/about/organization">Organization</Link></li>
                        <li><Link to="/home/about/awards">Awards</Link></li>
                    </ul>
                </li>

                {/* Normal links */}
                <li><Link to="/home/shop">Shop</Link></li>
                <li><Link to="/home/gallery">Gallery</Link></li>

                {/* Dropdown for War */}
                <li className="dropdown">
                    <span>War</span>
                    <ul className="dropdown-menu">
                        <li><Link to="/home/war/1947">1947</Link></li>
                        <li><Link to="/home/war/1962">1962</Link></li>
                        <li><Link to="/home/war/1965">1965</Link></li>
                        <li><Link to="/home/war/1967">1967</Link></li>
                        <li><Link to="/home/war/1971">1971</Link></li>
                        <li><Link to="/home/war/1999">1999</Link></li>
                    </ul>
                </li>

                {/* Normal links for Elite Forces, Regiments, and Entries */}
                <li><Link to="/home/entries">Entries</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
