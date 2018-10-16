import React from 'react';
import './stylesheets/videorow.css';

let VideoRow = (props) => 
    <div className="video-main">
        <div className="vid-info">
            <video className="vid"
                controls
                preload="auto"
                src={`${process.env.REACT_APP_FETCHREQ}/uploads/${props.video.video}`} >
            </video>
            <div className="info-container">
                <p> {props.video.river} </p>
                <p> {props.video.riverlevel} </p>
                <p> {props.video.racetime} </p>
                <p> {props.video.classvalue} </p>   
            </div>
        </div>
    </div>

export default VideoRow;