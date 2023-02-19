import React, {Component} from 'react';
import {Link, Navigate} from 'react-router-dom';


const value = localStorage.getItem('status');

class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {
            details: {
                username: '',
                email: '',
                status: value,
                password: '',
                password2: '',
            },
            redirect: false,
            credentials: {
                username: '',
                password: ''
            }
        }
    };

    submit = (e) => {
        e.preventDefault();
        console.log(this.state.details);
        fetch('https://map-q4g5zxi70-wagatu.vercel.app/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.details)
        }).then(
            data => {
                console.log(data);
            }
        ).then(
            async () => {
                await fetch('https://map-q4g5zxi70-wagatu.vercel.app/login', {
                    method: 'POST',
                    headers: {'Content-Type' : 'application/json'},
                    body: JSON.stringify(this.state.credentials)
                }).then(
                    res => {
                        console.log(res)
                        res.json().then(data => {
                            if(data.token){
                                localStorage.setItem('token', data.token)
                            }
                            if(!data.token){
                                localStorage.setItem('token', data.error)
                            }
                        })
                    }
                )
            }
        ).then(
            () => this.setState({redirect: true})
        ).catch(error => console.log(error))
    };
    
    onChange = (e) => {
        const dets = this.state.details;
        dets[e.target.name] = e.target.value;
        this.setState({details : dets})
        this.setState({credentials: dets})
    };

    render() {
        const {redirect} = this.state;
        if(redirect){
            return <Navigate replace to="/map"/>
        };
        return (
            <div className='login-container'>
                <h2>Sign Up</h2>
                <form onSubmit={this.submit}>
                    <div className='input-field'>
                        <input 
                            type='text' required
                            name='username'
                            value={this.state.details.username}
                            onChange={this.onChange}
                        />
                        <span></span>
                        <label>User name</label>
                    </div>
                    <div className='input-field'>
                        <input 
                            type='text' required
                            name='email'
                            value={this.state.details.email}
                            onChange={this.onChange}
                        />
                        <span></span>
                        <label>email</label>
                    </div>
                    <div className='input-field'>
                        <input 
                            type='password' required
                            name='password'
                            value={this.state.details.password}
                            onChange={this.onChange}
                        />
                        <span></span>
                        <label>password</label>
                    </div>
                    <div className='input-field'>
                        <input 
                            type='password' required
                            name='password2'
                            value={this.state.details.password2}
                            onChange={this.onChange}
                        />
                        <span></span>
                        <label>confirm password</label>
                    </div>
                    <input type='submit' value='Signup'/>
                    <div className='signup-link'>Have an account? <Link to="/login">Login</Link></div>
                </form>
            </div>
        )
    }
}

export default Signup;