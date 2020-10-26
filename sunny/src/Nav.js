import React from 'react';
import App from './App';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white'
    };

    return (
        <nav>
            <h3> Welcome to Sunny's Chicken. </h3>
            <ul className="nav-links">
                <Link to="/Menu" style={navStyle}>
                    <li>Menu</li>
                </Link>
                <Link to="/Contacts" style={navStyle}>
                    <li>Contacts</li>   
                </Link>
            </ul>
        </nav>

    )
}

export default Nav;