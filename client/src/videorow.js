import React from 'react';
import './stylesheets/videorow.css';

let VideoRow = (props) =>   
    <div className="video-main">
        <div className="video-row">
            <div className="video-column">
                <div className="content">
                    <video className="videos"
                        controls
                        preload="auto"
                        src={`${process.env.REACT_APP_FETCHREQ}/uploads/${props.video.video}`} >
                    </video>
                    <p className="row-p"> {props.video.river} </p>
                    <p className="row-p"> {props.video.riverlevel} </p>
                    <p className="row-p"> {props.video.racetime} </p>
                    <p className="row-p"> {props.video.classvalue} </p>   
                </div>
            </div>
        </div>
    </div>
export default VideoRow;