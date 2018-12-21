import React from 'react';

//CSS
import '../../css/LandingPageComponents/Footer.css';

//Images
import logo from '../../images/hipstar-rd.svg';

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer-demo">
            </div>
            <section className="footer-info">
                <div className="footer-info-deets">
                    <h2>Hipstar</h2>
                    <p>Created by <a href="https://damola.cf" target="_blank" rel="noopener noreferrer">Damola Salisu</a></p>
                    <p>2018</p>
                </div>
                <img src={logo} alt="hipstar logo"/>
            </section>
        </footer>
    )
}

export default Footer;