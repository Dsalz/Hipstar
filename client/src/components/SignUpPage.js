import React, { Component } from 'react';

//Components
import Navbar from './LayoutComponents/Navbar';

//Images
import SignUpImage from '../images/SignUpImage.jpg';

class SignUpPage extends Component {

    state = {
        userName: '',
        email: '',
        password: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    signup = () => {

    }

    render(){
        return(
            <div className="black-bg">
              <Navbar type="dark"/>
              <section className="slashed-card">
                <section className="slashed-card-info">
                    <h2>Sign Up</h2>
                    <hr/>
                    <form onSubmit={this.signup}>
                    <label htmlFor='userName'> Username :</label><br />
                    <input type="text" class="bar-input" name='userName' id='userName' onChange={this.handleChange}/><br />
                    <label htmlFor='email'> Email :</label><br />
                    <input type="text" class="bar-input" name='email' id='email' onChange={this.handleChange}/><br />
                    <label htmlFor='password'>Password :</label><br />
                    <input type="password" class="bar-input" name='password' id='password' onChange={this.handleChange}/><br />
                    <input className="red-cta-btn login-btn" value="Let's Go" type="submit"/>
                    </form>
                    <div className="slashed-card-demo">
                    </div>
                </section>
    
                <section className="slashed-card-img">
                    <img src={SignUpImage} alt="hipstar login"/>
                </section>
              </section>
            </div>
        )
    }
}

export default SignUpPage;