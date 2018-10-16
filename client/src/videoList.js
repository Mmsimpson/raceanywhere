import React from 'react';
import VideoRow from './videorow';
import './stylesheets/vidlist.css';

let VideoList = (props) =>
    <ul className="video-feed">
        {props.videos.map(video =>
            <VideoRow video={video} key={video.id} />
        )}
    </ul>

export default VideoList;