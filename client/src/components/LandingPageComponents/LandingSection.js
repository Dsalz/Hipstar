import React from "react";
import { Link } from 'react-router-dom';
import LandingImg from "../../images/LandingBgImg.png";
import '../../css/LandingPageComponents/LandingSection.css';

const LandingSection = () => {
    return(
        <section className="landing-section">
          <img src={LandingImg} alt="Kids enjoying movie"/>
          <div className="landing-section-text">
             <h2>
                 How was the movie?
             </h2>
             <p>
                 Rate your movie experience on hipstar!
             </p>
             <Link to="/signup" className="red-cta-btn">
             Sign Up
             </Link>
          </div>
          <div className="landing-section-demo">
          </div>
        </section>
    );
}

export default LandingSection;