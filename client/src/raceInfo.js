import React from 'react'; 
import './stylesheets/raceinfo.css';
import { NavLink } from 'react-router-dom';

let RaceInformation = () => 
    <div className="info-main"> 
        <h2 className="info-header">Race Information</h2>
        <div className="pic-div">
            <div className="why-us info">
                <div className="text">
                    <NavLink to="/whyraceanywhere">
                        <h3>Why Race Anywhere</h3>
                        <p>View our mission, more about us, and submission guidelines</p>
                    </NavLink>
                </div>
            </div>
            <div className="venues info">
                <div className="text">
                    <h3>Race Venues</h3>
                    <p>Explore all rivers and sections that have recorded times and checkout the competition</p>
                </div>
            </div>
            <div className="profiles info">
                <div className="text">
                    <h3>Racer Profiles</h3>
                    <p>See top racers. Join the competition by submiting your own race videos</p>  
                </div>
            </div>
        </div>
    </div>

export default RaceInformation;