import React from 'react';
import { NavLink } from 'react-router-dom';


let NavBar = () =>
    <div className= "navbar">
        <div>
            <img src= "/images/mainimg.png"></img>
        </div>
        <div className="homepage">
            <NavLink to="/login">
                <button className="loginbtn">Login</button>
            </NavLink>
            <NavLink to="/signup">
                <button className="signupbtn">Sign up</button>
            </NavLink>
        </div>
    </div>

export default NavBar;