import React from 'react';
import {Link, NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/">Home</NavLink>
        </div>
    );
};

export default NavBar;
