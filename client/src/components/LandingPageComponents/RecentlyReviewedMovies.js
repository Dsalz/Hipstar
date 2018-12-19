import React from 'react';
import MidMovieCard from '../MovieComponents/MidMovieCard';

const RecentlyReviewedMovies = ({ movies }) => {
    return(
        <section className="recently-rev-movies-section-wrapper">
            <div className="recently-rev-movies-section">
                <h2> Recently Reviewed Movies</h2>
                <hr/>
                <section className="recently-rev-movies-section-movies">
                    {movies.map(movie => <MidMovieCard {...movie}/>)}
                </section>
            </div>
        </section>
    )
}

export default RecentlyReviewedMovies;