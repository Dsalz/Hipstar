import React from 'react';
import { Link } from 'react-router-dom';

//Components
import MidMovieCard from '../MovieComponents/MidMovieCard';

//CSS
import '../../css/LandingPageComponents/RecentlyReviewedMovies.css';

//Images
import CA from '../../images/CA.jpg';

const RecentlyReviewedMovies = ({ movies }) => {
    return(
        <section className="recently-rev-movies-section-wrapper">
            <div className="recently-rev-movies-section">
                <h2> Recently Reviewed Movies</h2>
                <hr/>
                <section className="recently-rev-movies-section-movies">
                    <article className="mid-movie-card">
                        <div className="mid-movie-card-img">
                            <img src={CA} alt='CA' />
                            <span className="mid-movie-card-rating">
                            9.1
                            </span>
                        </div>
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