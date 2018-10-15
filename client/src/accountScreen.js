import React from 'react';
import NavBar from './navbar.js';
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
                    <NavBar />
                    <div> 
                        <h2> 
                            Welcome to Your Account! Here you can post your video's and Time's!
                        </h2>
                        <NavLink to={`/users/${this.props.currentUser.id}/videos`}>
                            <button className="videoscrbtn">Post Video</button>
                        </NavLink>
                    </div>
                    <div>
                        <VideoList videos={this.props.videos} />
                    </div>
                    <Footer />
                </div>
    }
}
export default connect(state => state)(AccountScreen);