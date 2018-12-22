import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components
import SignedOutLinks from './SignedOutLinks';
// import SignedInLinks from './SignedInLinks';

//CSS
import '../../css/LayoutComponents/Navbar.css';

//Images
import RedLogo from '../../images/hipstar-rd.svg';
import WhiteLogo from '../../images/hipstar-wh.svg';


class Navbar extends Component {

    componentWillMount(){
        if (this.props.type === 'trans'){
            this.setState({
                type: 'trans'
            })
            window.addEventListener('scroll', () => {
                if(window.scrollY > 30){
                    this.setState({
                        type: 'dark'
                    })
                } else{
                    this.setState({
                        type: 'trans'
                    })
                }
            })
        } else {
            this.setState({
                type: 'dark'
            })
        }
    }

    render(){
        const { type } = this.state;
        return(
            <nav className={`nav ${type}`}>
                <section className="nav-logo">
                    <Link to ='/'>
                    <img src={type ==='trans' ? WhiteLogo : RedLogo} alt="hipstar-logo" />
                    </Link>
                </section>
                <SignedOutLinks />
            </nav>
        )
    }
}

export default Navbar;