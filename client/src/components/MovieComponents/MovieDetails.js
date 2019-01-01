import React , { Component } from 'react';

//Components
import Navbar from '../LayoutComponents/Navbar';
import StarRating from '../RatingsComponents/StarRating';
import Review from '../ReviewComponents/Review';

//CSS
import '../../css/MovieComponents/MovieDetails.css';

import CA from '../../images/CA.jpg';
import CAbg from '../../images/CA-bg.jpg';


class MovieDetails extends Component{
    state = {
        page: 'details'
    }
    render(){
        const { page } = this.state;
        return(
            <section className="movie-details-section black-bg">
                <Navbar type='trans'/>
                <section className='movie-details-section-top'>
                    <img src={CAbg} alt="" className='movie-details-section-top-bg'/>
                    <div className='movie-details-section-top-demo'>
                    </div>
                    <section className='movie-details-section-top-info'>
                        <img src={CA} alt="" className='movie-details-section-top-poster'/>
                        <div className="movie-details-section-top-info-deets">
                            <h3>Captain Marvel</h3>
                            <StarRating rating={9.1} />
                            <p>9.1</p>
                        </div>
                        <div className="movie-details-section-top-info-btns">
                            { page === 'details' && (
                            <React.Fragment>
                            <button className="red-cta-btn">Edit this Movie</button><br/>
                            <button className="red-cta-btn">Review this Movie</button> 
                            </React.Fragment>)}
                        </div>
                    </section>
                </section>
                <section className='movie-details-section-mid'>
                    <h4>Release Date</h4>
                    <hr className='movie-details-section-red-line'/>
                    <p className='movie-details-section-mid-text'>
                        12th November 2018
                    </p>
                    <h4>Description</h4>
                    <hr className='movie-details-section-red-line'/>
                    <p className='movie-details-section-mid-text'>
                        Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races
                    </p>
                    <h4>Cast</h4>
                    <hr className='movie-details-section-red-line'/>
                    <div className="movie-details-section-mid-cast">
                        <a href="">
                            <span>Carol Danvers</span>
                            <hr/>
                            <span>Brie Larson</span>
                        </a>
                        <a href="">
                            <span>Carol Danvers</span>
                            <hr/>
                            <span>Brie Larson</span>
                        </a>
                        <a href="">
                            <span>Carol Danvers</span>
                            <hr/>
                            <span>Brie Larson</span>
                        </a>
                        <a href="">
                            <span>Carol Danvers</span>
                            <hr/>
                            <span>Brie Larson</span>
                        </a>
                        <a href="">
                            <span>Carol Danvers</span>
                            <hr/>
                            <span>Brie Larson</span>
                        </a>
                    </div>
                    <h3 className="movie-details-review-header">Reviews</h3>
                    <hr className="movie-details-review-line"/>
                    <Review />
                    <Review />
                    <Review />
                    <button className="red-cta-btn">Review this Movie</button> 
                </section>
            </section>
        )
    }
}

export default MovieDetails;