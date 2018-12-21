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

    render(){
        const { type } = this.props;
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