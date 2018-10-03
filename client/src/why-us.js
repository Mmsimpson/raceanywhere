import React from 'react';
import NavBar from './navbar.js';
import Appheader from './appheader.js';

let WhyUs = () => 
  
    <div>
        <Appheader />
        <NavBar />
        <section className="mission"> 
            <h1>Our Mission</h1>
            <div className="mission-para">
                <p>
                    Race Anywhere's mission is to allow for competitive whitewater activities anywhere. No more 
                    qualifying, schedule conflicts, class requirements, or entry fees! Get involved in the race scene 
                    without any hassle, and compete with your friends and the community.
                </p>
            </div>
        </section>
        <section>
            <h3>Submission Guidelines</h3>
            <div className="guideline-para">
                <p>
                    You must submit raw POV footage that starts before the 'start line' and ends after the 'finish line'.
                    For example the Green River race begins in the eddy below Bridal and ends at the river left 
                    rock below Rapid Transit, so a submission video should start before you begin paddling out of 
                    the eddy and end after you make contact with the rock below Rapid Transit. No edited 
                    videos will be accepted.
                </p>
            </div>
        </section>
    </div>


export default WhyUs;