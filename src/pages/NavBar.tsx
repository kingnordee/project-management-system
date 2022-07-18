import React from 'react';
import {Link, NavLink} from "react-router-dom";

const NavBar = () => {

    const checkActive = (isActive: boolean) => {
        return (isActive ? 'isActive' : '')
    }
    return (
        <div className="navBar">
            <div className="navInnerWrapper">
                <div className="navLeft">
                    <NavLink className={({ isActive }) => checkActive(isActive)}  to="/">Home</NavLink>
                </div>
                <div className="navRight">
                    <NavLink className={({ isActive }) => checkActive(isActive)} to="/sign-in">Sign In</NavLink>
                    <NavLink className={({ isActive }) => checkActive(isActive)} to="/sign-up">Sign Up</NavLink>
                </div>
            </div>



        </div>
    );
};

export default NavBar;
