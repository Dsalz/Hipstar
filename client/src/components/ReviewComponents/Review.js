import React from 'react';

//Components
import StarRating from '../RatingsComponents/StarRating';

//CSS
import '../../css/ReviewComponents/Review.css';


const Review = ({withMovieName}) => {
    return(<div className="review">
        <p className="review-text">hfhf hfh fh f h fhfh fhfhf hfhf hfhfh fhfhf hfhf hfhfh fhfhfh fhfh fhf hfh fhf hfhfhfhfhf</p>
        <p className="review-text">- <a href="#">jfjfj</a></p>
        <div className="review-rating">
            <div className="review-rating-info">
                <h4 className="review-rating-movie">Captain America</h4>
                <StarRating rating={9.1} />
            </div>
            <div className="review-rating-val-wrapper">
                <p className="review-rating-val">9.1</p>
            </div>
        </div>
    </div>)
}

export default Review;