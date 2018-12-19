import React from 'react';
import StarRating from '../RatingsComponents/StarRating';

const MidMovieCard = ({ img, title, rating, reviewCount}) => {
    return(
        <article className="mid-movie-card">
            <img src={img} alt={title} />
            <div className = "mid-movie-card-info">
                <StarRating rating={rating}/>
                <h3>{title}</h3>
                <p>{reviewCount === 1 ? '1 review' : `${reviewCount} reviews`}</p>
            </div>
        </article>
    )
}

export default MidMovieCard;