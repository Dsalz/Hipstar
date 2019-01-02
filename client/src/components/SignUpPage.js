import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';

//Components
import Navbar from './LayoutComponents/Navbar';

//Images
import SignUpImage from '../images/SignUpImage.jpg';

//Queries
import { addUserQuery , checkUserNameAvailability} from '../queries';

class SignUpPage extends Component {

    state = {
        userName: '',
        email: '',
        password: '',
        userNameAvailable: null
    }

    handleChange = (e) => {
        if(e.target.name === 'userName'){
            console.log('checking');
            this.props.checkUserNameAvailability({
                variables: {
                    userName: e.target.value
                }
            })
        }
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    signup = (e) => {
        e.preventDefault();
        localStorage.HipstarUserName = this.state.userName;
        this.props.signUp({
            variables:{...this.state}
        });
    }

    render(){
        const { user, loading } = this.props.checkUserNameAvailability;
        let availableUserName = null
        if(loading){
            availableUserName = null;
        }else if (user && user.userName !== 'Dsalz'){
            availableUserName = !!user.userName;
        }
        console.log(availableUserName);
        return(
            <div className="black-bg">
              <Navbar type="dark"/>
              <section className="slashed-card">
                <section className="slashed-card-info">
                    <h2>Sign Up</h2>
                    <hr/>
                    <form onSubmit={this.signup}>
                    <label htmlFor='userName'> Username :</label><br />
                    <input type="text" className="bar-input" name='userName' id='userName' onChange={this.handleChange} required/><br />
                    {}
                    <label htmlFor='email'> Email :</label><br />
                    <input type="text" className="bar-input" name='email' id='email' onChange={this.handleChange} required/><br />
                    <label htmlFor='password'>Password :</label><br />
                    <input type="password" className="bar-input" name='password' id='password' onChange={this.handleChange} required/><br />
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

export default compose(
    graphql(addUserQuery, {name: 'signUp'}),
    graphql(checkUserNameAvailability, {
        name: 'checkUserNameAvailability',
    options: (props) => ({
        variables: {
            userName: 'Dsalz'
        }
    })})
)(SignUpPage);