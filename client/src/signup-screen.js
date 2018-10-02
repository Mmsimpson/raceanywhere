import React from 'react';
import SignupForm from './signup-form';
import NavBar from './navbar';

let SignupScreen = (props) =>
   <div>
       <NavBar />
       <h2>Welcome to RaceAnywhere! Please Create an Account to get started!</h2>
       <SignupForm history={props.history} />
    </div>

export default SignupScreen;