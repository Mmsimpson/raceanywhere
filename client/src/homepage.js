import React from 'react';
import NavBar from './navbar.js';
import Appheader from './appheader';
import './stylesheets/homepage.css';


let Homepage = () => 
    <div>
        <Appheader />
        <NavBar />
        <div className="homeimg"> 
            {/* <img className="mainimg" src="/images/P7190100(2).jpg"></img> */}
        </div>
        <div className="info"> 
            <h2>Information</h2>
            <div className="why-us">

            </div>
            <div className="venues">

            </div>
            <div className="racer-profiles">
                
            </div>
        </div>
    </div>

export default Homepage;