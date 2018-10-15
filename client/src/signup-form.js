import React from 'react';
import { connect } from 'react-redux';


class SignupForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            email: '',
            first:'', 
            last:''
        }
    }

    render() {

        let userSignUp = () => {
            fetch(`${process.env.REACT_APP_FETCHREQ}/users`, {
            method: 'POST', 
            body: JSON.stringify(this.state),
            headers: {'Content-Type': 'application/JSON'
            }})
            .then(response => {
                return response.json()
            })
            .then(data => {
                this.props.history.push('/login')
            })
        }
        
        return <div>
                    <form className="signup-form" onSubmit={(event) => {
                        event.preventDefault();
                        userSignUp()}}>

                        <input 
                            type="text" 
                            className="signup-input" 
                            placeholder="Username"
                            value={this.state.username}
                            onChange={ (event)  => {
                                this.setState({ username: event.target.value })
                                }}
                        />
                        <input
                            type='password'
                            className='signup-form-input'
                            placeholder='Password'
                            value={this.state.password}
                            onChange={ (event)  => {
                                this.setState({ password: event.target.value })
                                }}
                        />
                        <input
                            type='email'
                            className='signup-form-input'
                            placeholder='Email'
                            value={this.state.email}
                            onChange={ (event)  => {
                                this.setState({ email: event.target.value })
                                }}
                        />
                        <input
                            type='text'
                            className='signup-form-input'
                            placeholder='First Name'
                            value={this.state.first}
                            onChange={ (event)  => {
                                this.setState({ first: event.target.value })
                                }}
                        />
                        <input
                            type='text'
                            className='signup-form-input'
                            placeholder='Last Name'
                            value={this.state.last}
                            onChange={ (event)  => {
                                this.setState({ last: event.target.value })
                                }}
                        />
                        <button 
                            className='signup-form-submit' 
                            type='submit'>Sign up
                        </button>
                    </form>
                </div>
        }
};

export default connect(state => state)(SignupForm);