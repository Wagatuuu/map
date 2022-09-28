import React, {Component} from 'react';
import {Link, Navigate} from 'react-router-dom';

// const value = localStorage.getItem('status')

class Login extends Component{
    state = {
        credentials: {
            username: '',
            password: ''
        },
        redirect: false
    };

    submit = (e) => {
        e.preventDefault()
        fetch('https://noisecapture.herokuapp.com/login',{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(this.state.credentials)
        }).then(
            res => {
                console.log(res)
                res.json().then(data => {
                    if(data.token){
                        localStorage.setItem('token', data.token).then(
                            this.setState({redirect: true})
                        )
                    }
                    if(!data.token){
                        alert('Invalid credentials')
                    }
                })
            }
        ).catch(error => console.log(error))
    };

    handleChange = (e) => {
        const cred = this.state.credentials
        cred[e.target.name] = e.target.value
        this.setState({credentials: cred})
    };

    render() {
        const {redirect} = this.state;
        if(redirect){
            return <Navigate replace to="/map" />
        };

        return (
            <div className='login-container'>
                <h2>Sign In</h2>
                <form onSubmit={this.submit}>
                    <div className='input-field'>
                        <input type='text' required
                            value={this.state.credentials.username}
                            name = 'username'
                            onChange={this.handleChange}
                        />
                        <span></span>
                        <label>username</label>
                    </div>
                    <div className='input-field'>
                        <input type='password' required
                            value={this.state.credentials.password}
                            name='password'
                            onChange={this.handleChange}
                        />
                        <span></span>
                        <label>password</label>
                    </div>
                    <div className='pass'>Forgot password ?</div>
                    <input type='submit' value='Login'/>
                    <div className='signup-link'>Not a member? <Link to="/">Signup</Link></div>
                </form>
            </div>
        )
    }
}

export default Login;