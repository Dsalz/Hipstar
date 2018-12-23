import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return(
        <React.Fragment>
            <NavLink to="/allmovies">
                All Movies
            </NavLink>
            <NavLink to="/about">
                About
            </NavLink>
            <NavLink to="/signup">
                Sign Up
            </NavLink>
            <NavLink to="/login">
                Login
            </NavLink>      
        </React.Fragment>
    )
}

export default SignedOutLinks;