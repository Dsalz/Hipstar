import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = ({ userName }) => {
    return(
        <React.Fragment>
            <NavLink to="/allmovies">
                All Movies
            </NavLink>
            <NavLink to="/about">
                About
            </NavLink>
            <NavLink to="/requestmovies">
                Request Movie
            </NavLink>
            <NavLink to="/signup">
                {`Welcome ${userName}`}
            </NavLink>    
        </React.Fragment>
    )
}

export default SignedInLinks;