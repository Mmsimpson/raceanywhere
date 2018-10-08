import React from 'react';
import VideoSubmit from './videosubmitform.js'
import NavBar from './navbar';
import AppHeader from './appheader.js';


let SubmitScreen = (props) => 
    <div>
        <AppHeader />
        <NavBar />
        <h2>Please fill in form.</h2>
        <VideoSubmit history={props.history} />
    </div>

export default SubmitScreen;