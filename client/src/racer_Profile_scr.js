import React from 'react';
import NavBar from './navbar.js';
import Appheader from './appheader.js';
import { connect } from 'react-redux';
import Footer from './footer.js'
import RacerVideoList from './racer_video_list.js';

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
        return    <div>
                <Appheader />
                <NavBar />
                <div>
                    <RacerVideoList videos={this.props.videos} user={this.props.users} />
                </div>
                <Footer />
            </div>
    }
}    
export default connect(state => ({videos: state.recentVideos}))(RacerProfileScreen);