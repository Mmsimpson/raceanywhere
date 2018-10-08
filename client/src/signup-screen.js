import React from 'react';
import SignupForm from './signup-form';
import AppHeader from './appheader';

let SignupScreen = (props) =>
   <div>
       <AppHeader />
       <h2>Welcome to RaceAnywhere! Please Create an Account to get started!</h2>
       <SignupForm history={props.history} />
    </div>

export default SignupScreen;