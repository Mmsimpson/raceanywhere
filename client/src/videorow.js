import React from 'react';

let VideoRow = (props) => 
    <li>
        {/* // onClick= {() => { */}
        {/* //     // or history.push (video.id "probably")
        //     console.log("to video page")
        // }} */}
        
        <p> {props.video.river} </p>
        <p> {props.video.riverlevel} </p>
        <p> {props.video.racetime} </p>
        <p> {props.video.classvalue} </p>   
    </li>

export default VideoRow;