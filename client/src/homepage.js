import React from 'react';
import NavBar from './navbar.js';
import Appheader from './appheader';
import './stylesheets/homepage.css';


let Homepage = () => 
    <div className="main-container">
        <Appheader />
        <NavBar />
        <div className="pic-welcome"> 
            <div className="homeimg">
                <img className="mainimg" src="/images/P7190100(2).jpg" />
            </div>    
        </div>
    
    </div>

export default Homepage;