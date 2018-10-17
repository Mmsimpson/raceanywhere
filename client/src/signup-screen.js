import React from 'react';
import SignupForm from './signup-form';
import AppHeader from './appheader';
import Footer from './footer.js';
import UserBar from './userBar.js';
import './stylesheets/signupscreen.css'

let SignupScreen = (props) =>
    <div>
        <AppHeader />
        <UserBar />
        <div className="sign-main">
            <div className="sign-container">
                <div className="header-container">
                    <h2 className="sign-title"> Discover the competition <br /> 
                    Create an Account to get started!</h2>  
                </div>
                <SignupForm history={props.history} />
            </div>
        </div>
        <Footer />
    </div>

export default SignupScreen;