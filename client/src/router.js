import React from 'react';
import Homepage from './homepage';
import LoginScreen from './login-screen';
import SignupScreen from './signup-screen';
import NotFound from './not-found';
import { HashRouter, Route, Switch } from 'react-router-dom';
import WhyUs from './why-us';
import AccountScreen from './accountScreen'
import SubmitScreen from './videoSubmitScreen';

let Router = () =>
    <HashRouter>
        <div>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/login" component={LoginScreen} />
                <Route exact path="/signup" component={SignupScreen} />
                <Route exact path="/users/:id" component={AccountScreen} /> 
                <Route exact path="/users/:id/videos" component={SubmitScreen} />
                <Route exact path="/whyraceanywhere" component={WhyUs} />
                <Route path="*" component={NotFound} />
            </Switch>
        </div>
    </HashRouter>

export default Router;