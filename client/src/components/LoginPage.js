import React, { Component } from 'react';

//Components
import Navbar from './LayoutComponents/Navbar';

//Images
import LoginImage from '../images/LoginImage.jpg';

class LoginPage extends Component {

    state = {
        name: '',
        password: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = (e) => {
        e.preventDefault();

    }

    render(){
        return(
            <div className="black-bg">
              <Navbar type="dark"/>
              <section className="slashed-card">
                <section className="slashed-card-info">
                    <h2>Login</h2>
                    <hr/>
                    <form onSubmit={this.login}>
                    <label htmlFor='name'>Email\Username :</label><br />
                    <input type="text" class="bar-input" name='name' id='name' onChange={this.handleChange}/><br />
                    <label htmlFor='password'>Password :</label><br />
                    <input type="password" class="bar-input" name='password' id='password' onChange={this.handleChange}/><br />
                    <input className="red-cta-btn login-btn" value="Let's Go" type="submit"/>
                    </form>
                    <div className="slashed-card-demo">
                    </div>
                </section>
    
                <section className="slashed-card-img">
                    <img src={LoginImage} alt="hipstar login"/>
                </section>
              </section>
            </div>
        )
    }
}

export default LoginPage;