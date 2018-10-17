import React from 'react';
import VideoRow from './videorow';
import './stylesheets/vidlist.css';

let VideoList = (props) =>
    <div className="video-feed">
        {props.videos.map(video =>
            <VideoRow video={video} key={video.id} />
        )}
    </div>

export default VideoList;