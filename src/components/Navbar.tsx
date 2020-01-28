import React from 'react';
import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () => (
    <nav>
        <div className="nav-wrapper purple darken-3 p1">
            <NavLink to="/" className="brand-logo">
                React + TypeScript
            </NavLink>
            <ul className="right hide-on-med-and-down">
                <li>
                    <NavLink to="/">Todos</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About us</NavLink>
                </li>
            </ul>
        </div>
    </nav>
);
