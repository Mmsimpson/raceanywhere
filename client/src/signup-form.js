import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            email: ''
        }
    }

    render() {
        return <div>
                    <form className="signup-form" onSubmit={(event) => {
                        event.preventDefault();
                        userSignUp()}}>

                        <input 
                            type="text" 
                            className="signup-input" 
                            placeholder="username"
                            value={this.state.username}
                            onChange={ (event)  => {
                                this.setState({ username: event.target.value })
                                }}
                        />
                        <input
                            type='password'
                            className='signup-form-input'
                            placeholder='password'
                            value={this.state.password}
                            onChange={ (event)  => {
                                this.setState({ password: event.target.value })
                                }}
                        />
                        <input
                            type='email'
                            className='signup-form-input'
                            placeholder='email'
                            value={this.state.email}
                            onChange={ (event)  => {
                                this.setState({ email: event.target.value })
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

export default SignupForm;