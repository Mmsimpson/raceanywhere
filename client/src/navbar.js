import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './stylesheets/navbar.css';

let NavBar = (props) =>
    <div className="navbar">
        <div className="navbtn">
            <NavLink to="/login">
                <button className="btn">Login</button>
            </NavLink>
            <NavLink to="/signup">
                <button className="btn">Sign up</button>
            </NavLink>
            
            {props.currentUser ? 
            <NavLink to={`/users/${props.currentUser.id}`}>
                <button className="btn">My Account</button>
            </NavLink>
            : <span> </span>
            } 
        </div>
    </div>

export default connect(state => state)(NavBar);