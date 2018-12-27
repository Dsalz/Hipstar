import React from 'react';

const StarRating = ({ rating }) => {
    const width = rating * 10.2 > 100 ? 100 : rating * 10.2;
    return (
        <div className="hipstar-rating">
            <div className="hipstar-rating-empty"></div>
            <div className="hipstar-rating-full" style={{width: `${width}%`}}></div>
        </div>
    );
}

export default StarRating;