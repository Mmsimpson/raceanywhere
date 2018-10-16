import React from 'react';
import VideoSubmit from './videosubmitform.js'
import UserBar from './userBar';
import AppHeader from './appheader.js';
import Footer from './footer.js'
import './stylesheets/video-submit-scr.css';

let SubmitScreen = (props) => 
    <div>
        <AppHeader />
        <UserBar />
        <div className="submission">
            <div className="guide-paragraph">
                <h1 className="guide-header">Submission Guidelines</h1>
                <p>
                    You must submit raw POV footage that starts before the 'start line' and ends after the 'finish line'.
                    For example the Green River race begins in the eddy below Bridal and ends at the river left 
                    rock below Rapid Transit, so a submission video should start before you begin paddling out of 
                    the eddy and end after you make contact with the rock below Rapid Transit. No edited 
                    videos will be accepted.
                </p>
            </div>
        </div>    
        <VideoSubmit history={props.history} />
        <Footer />
    </div>

export default SubmitScreen;