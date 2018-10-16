import React from 'react';
import RacerVideoRow from './racer_vid_row.js';
import './stylesheets/racervidlist.css';


let RacerVideoList = (props) =>
    <ul className="video-feed">
        {props.videos.map(video =>
            <RacerVideoRow video={video} key={video.id}  />
        )}
    </ul>

export default RacerVideoList;