import React from 'react';
import { Link } from 'react-router-dom';

//Components
import StarRating from '../RatingsComponents/StarRating';

//CSS
import '../../css/MovieComponents/MidMovieCard.css';

const MidMovieCard = ({ img, title, reviews, rating}) => {
    let reviewCount = reviews.length;
    return(
        <Link to={`/movie/${title}`} className="mid-movie-card-wrapper">
            <article className="mid-movie-card">
                <div className="mid-movie-card-img">
                    <img src={img} alt={title} />
                    <span className="mid-movie-card-rating">
                    {rating}
                    </span>
                </div>
                <div className = "mid-movie-card-info">
                    <StarRating rating={rating} />
                    <h3>{title}</h3>
                    <p>{reviewCount === 1 ? '1 review' : `${reviewCount} reviews`}</p>
                </div>
            </article>
        </Link>
    )
}

export default MidMovieCard;