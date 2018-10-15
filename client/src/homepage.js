import React from 'react';
import NavBar from './navbar.js';
import Appheader from './appheader';
import RaceInformation from './raceInfo.js';
import Footer from './footer.js'
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
        <RaceInformation />
        <Footer />
    </div>

export default Homepage;