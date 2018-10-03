import React from 'react';
import { NavLink } from 'react-router-dom';


let NavBar = () =>
    <div className= "navbar">
        <div className="homepage">
            <NavLink to="/">
                <button className="homebtn">Home</button>
            </NavLink>
            <NavLink to="/whyraceanywhere">
                <button className="why-us">Why Race Anywhere</button>
            </NavLink>
            <NavLink to="/login">
                <button className="loginbtn">Login</button>
            </NavLink>
            <NavLink to="/signup">
                <button className="signupbtn">Sign up</button>
            </NavLink>
            
        </div>
    </div>

export default NavBar;