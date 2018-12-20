import React from 'react';
import { Link } from 'react-router-dom';
import MidMovieCard from '../MovieComponents/MidMovieCard';
import '../../css/LandingPageComponents/RecentlyReviewedMovies.css';
import CA from '../../images/CA.jpg';

const RecentlyReviewedMovies = ({ movies }) => {
    return(
        <section className="recently-rev-movies-section-wrapper">
            <div className="recently-rev-movies-section">
                <h2> Recently Reviewed Movies</h2>
                <hr/>
                <section className="recently-rev-movies-section-movies">
                    <article className="mid-movie-card">
                        <img src={CA} alt="Ca"/>
                        <div className = "mid-movie-card-info">
                            <h3>boom</h3>
                            <p>6 reviews</p>
                        </div>
                    </article>
                    {movies.map(movie => <MidMovieCard {...movie}/>)}
                </section>
                <Link to='/allmovies' className='red-cta-btn recently-rev-btn'>
                    See More
                </Link>
            </div>
        </section>
    )
}

export default RecentlyReviewedMovies;