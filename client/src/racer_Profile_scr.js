import React from 'react';
import UserBar from './userBar.js';
import Appheader from './appheader.js';
import { connect } from 'react-redux';
import Footer from './footer.js'
import RacerVideoList from './racer_video_list.js';
import './stylesheets/recentracerscr.css'

class RacerProfileScreen extends React.Component {

    componentDidMount() {
        fetch(`${process.env.REACT_APP_FETCHREQ}/videos`)
            .then(res => res.json())
            .then(recentVideos => {
                this.props.dispatch({
                    type:'LOAD_RECENT_VIDEOS',
                    recentVideos: recentVideos
                })
            })
        }   

    render() {   
        return    <div className="div1">
                <Appheader />
                <UserBar />
                <h1 className="recent-header">View the Latest Runs posted by other Racers</h1>
                <div>
                    <RacerVideoList videos={this.props.videos} user={this.props.users} />
                </div>
                <Footer />
            </div>
    }
}    
export default connect(state => ({videos: state.recentVideos}))(RacerProfileScreen);