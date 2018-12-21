import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return(
        <section className="nav-links">
            <NavLink to="/allmovies">
                All Movies
            </NavLink>
            <NavLink to="/about">
                About
            </NavLink>
            <NavLink to="/signup">
                SignUp
            </NavLink>
            <NavLink to="/login">
                Login
            </NavLink>      
        </section>
    )
}

export default SignedOutLinks;