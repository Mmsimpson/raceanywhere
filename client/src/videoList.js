import React from 'react';
import VideoRow from './videorow';

let VideoList = (props) =>
    <ul className="video-feed">
        {props.videos.map(video =>
            <VideoRow video={video} key={video.id} />
        )}
    </ul>

export default VideoList;