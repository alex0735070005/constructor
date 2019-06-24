import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

function Header() {
    return (
        <div id="header">
            <ul>
                <li><NavLink to="/">Builder</NavLink></li>
                <li><NavLink to="/view">View</NavLink></li>
            </ul>
        </div>
    );
}

export default Header;
