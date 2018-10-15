import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './stylesheets/userbar.css';


let UserBar = (props) => 
    <div className= "userbar">
        <div className="navbtn">
            <NavLink to="/">
                <button className="btn">Home</button>
            </NavLink>
            <NavLink to="/whyraceanywhere">
                <button className="btn">Why Race Anywhere</button>
            </NavLink>
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

export default connect(state => state)(UserBar);  