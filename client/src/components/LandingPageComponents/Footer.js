import React from 'react';

import '../../css/LandingPageComponents/Footer.css';

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer-demo">
            </div>
            <section className="footer-info">
                <div className="footer-info-deets">
                    <h2>Hipstar</h2>
                    <p>Created by <a href="https://damola.cf" target="_blank">Damola Salisu</a></p>
                    <p>2018</p>
                </div>
                <img src="https://placehold.it/100" alt="hipstar logo"/>
            </section>
        </footer>
    )
}

export default Footer;