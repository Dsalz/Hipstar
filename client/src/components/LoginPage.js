import React from 'react';
import { Link } from 'react-router-dom';

//Components
import Navbar from './LayoutComponents/Navbar';

//Images
import AboutImage from '../images/AboutImage.jpg';

const AboutPage = () => {
    return(
        <div className="black-bg">
          <Navbar type="dark"/>
          <section className="slashed-card">
            <section className="slashed-card-info">
                <h2>About</h2>
                <hr/>
                <p>Hipstar is a platform for movie goers to give honest and raw reviews to movies they’ve seen to help others determine if it is worth seeing or not. </p>
                <p>You can go into as much detail as possible even add special effects if you like (ka-boom, ka-pow allowed).</p>
                <p>Now go forth and give that review!</p>
                <Link to="/allmovies" className="red-cta-btn">
                   Rate a movie
                </Link>
                <div className="slashed-card-demo">
                </div>
            </section>

            <section className="slashed-card-img">
                <img src={AboutImage} alt="hipstar"/>
            </section>
          </section>
        </div>
    )
}

export default AboutPage;