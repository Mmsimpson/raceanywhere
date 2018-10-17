import React from 'react';
import AppHeader from './appheader';
import UserBar from './userBar.js';
import Footer from './footer.js';
import LoginForm from './login-form';
import './stylesheets/login-screen.css';

let LoginScreen = (props) =>
    <div className="login-main">
        <AppHeader />
        <UserBar />
        <div className="login-main">
            <div className="login-container">
                <div className="login-container-header">
                    <h1 className="login-header">Please Login</h1>
                </div>
                <LoginForm history={props.history}/>
            </div>
        </div>
        <Footer />
    </div>

export default LoginScreen



