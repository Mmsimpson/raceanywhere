import React from 'react';
import SignupForm from './signup-form';
import AppHeader from './appheader';
import Footer from './footer.js';
import UserBar from './userBar.js';

let SignupScreen = (props) =>
   <div>
       <AppHeader />
       <UserBar />
       <h2>Welcome to RaceAnywhere! Please Create an Account to get started!</h2>
       <SignupForm history={props.history} />
       <Footer />
    </div>

export default SignupScreen;