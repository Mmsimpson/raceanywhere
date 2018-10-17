import React from 'react';
import UserBar from './userBar.js';
import Appheader from './appheader.js';
import VideoList from './videoList.js';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './stylesheets/account-scr.css';
import Footer from './footer.js';

// smart component
class AccountScreen extends React.Component {

    componentDidMount() {
        fetch(`${process.env.REACT_APP_FETCHREQ}/users/${this.props.currentUser.id}/videos`)
            .then(res => res.json())
            .then(videos => {
                this.props.dispatch({
                    type:'LOAD_VIDEOS',
                    videos: videos
                })
            })
        }   
       
    render() {
        return  <div>
                    <Appheader />
                    <UserBar />
                    <div className="header-main"> 
                        <h1 className="account-header"> Welcome to Your Account </h1>
                        <h2 className="header2">Here you can see and post your video's and time's</h2>
                        <NavLink to={`/users/${this.props.currentUser.id}/videos`}>
                            <button className="post-video">Submit your Latest Run</button>
                        </NavLink>
                    </div>
                    <VideoList videos={this.props.videos} />
                    <Footer />
                </div>
    }
}
export default connect(state => state)(AccountScreen);