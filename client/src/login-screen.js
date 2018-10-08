import React from 'react';
import { connect } from 'react-redux';
import AppHeader from './appheader';

class LoginScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username:'',
            password:''
        }
    }
    render() {

        

        // let checkLogin = () => {
        //     fetch('http://localhost:5000/checktoken', {
        //         method: 'POST',
        //         body: JSON.stringify(myStorage),
        //         headers: {'Content-Type': 'application/json'}
        //     })
        //     .then(data => {
        //         return data.json()})     
        //     }
            
        // checkLogin();

        let loginFetch = () => {
            fetch('http://localhost:5000/tokens',{
            method: 'POST',
            body: JSON.stringify(this.state),
            headers:{"Content-Type": "application/json"
            }})
            .then(responseObject => {
                return responseObject.json()
            })
            .then(data => {
                console.log(data)
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
            <h1>Please Login</h1>
            <form className="loginForm"
            onSubmit={event => {
                event.preventDefault();
                loginFetch()
            }}>
                <input placeholder="Insert Username" 
                type="text"
                value={this.state.username}
                onChange={event => {
                    this.setState({username: event.target.value})
                }} />
                <input placeholder="Insert Password" 
                type="password"
                value={this.state.password}
                onChange={event => {
                    this.setState({password: event.target.value})
                }} />

                <button type="submit"> 
                Go to Homepage
                </button>
            </form>
        </div>
    }
}




export default connect(state => state)(LoginScreen);



