import React from 'react';
import { Link } from 'react-router-dom';

import '../../css/MovieComponents/MidMovieCard.css';

const MidMovieCard = ({ img, title, reviews}) => {
    let reviewCount = reviews.length;
    return(
        <Link to={`/movie/${title}`} className="mid-movie-card-wrapper">
            <article className="mid-movie-card">
                <img src={img} alt={title} />
                <div className = "mid-movie-card-info">
                    <h3>{title}</h3>
                    <p>{reviewCount === 1 ? '1 review' : `${reviewCount} reviews`}</p>
                </div>
            </article>
        </Link>
    )
}

export default MidMovieCard;