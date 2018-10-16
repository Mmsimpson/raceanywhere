import React from 'react';
import { connect } from 'react-redux';
import AppHeader from './appheader';
import UserBar from './userBar.js';
import Footer from './footer.js';
import './stylesheets/loginscreen.css';

class LoginScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username:'',
            password:''
        }
    }
    render() {

        let loginFetch = () => {
            fetch(`${process.env.REACT_APP_FETCHREQ}/tokens`,{
            method: 'POST',
            body: JSON.stringify(this.state),
            headers:{"Content-Type": "application/json"
            }})
            .then(responseObject => {
                return responseObject.json()
            })
            .then(data => {
                window.localStorage.setItem('webtoken', data.token);
                this.props.dispatch({
                    type: 'UPDATE_CURRENT_USER',
                    user: data.user
                });
            })
            .then(data => {
                this.props.history.push('/')
            })
        }

        return <div className="loginPage">
            <AppHeader />
            <UserBar />
            
            <form className="loginForm"
            onSubmit={event => {
                event.preventDefault();
                loginFetch()
            }}>
                <h1 className="login-header">Please Login</h1>
                <input className="login-username input" placeholder="Insert Username" 
                type="text"
                value={this.state.username}
                onChange={event => {
                    this.setState({username: event.target.value})
                }} />
                <input className="pass input" placeholder="Insert Password" 
                type="password"
                value={this.state.password}
                onChange={event => {
                    this.setState({password: event.target.value})
                }} />

                <button className="loginbtn" type="submit"> 
                Go to Homepage
                </button>
            </form>
            <Footer />
        </div>
    }
}




export default connect(state => state)(LoginScreen);



