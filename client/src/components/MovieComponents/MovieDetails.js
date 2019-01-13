import React , { Component } from 'react';
import { graphql } from 'react-apollo';

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
        page: 'details',
        message: '',
        rating: '',
        whereSeen: '',
        whenSeen: '',
    }

    componentDidUpdate(){
        if(this.state.page === 'newReview'){
            window.scrollTo(0, 350);
        }
    }

    showNewReviewPage = () => {
        this.setState({
            page: 'newReview'
        })
    }
    showDetailsPage = () => {
        this.setState({
            page: 'details'
        })
    }

    handleChange = (e) => {
        if(e.target.name === 'rating' && e.target.value > 10){
            return;
        }
        this.setState({
                [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.newReview);
    }
    render(){
        const { page, rating, message, whereSeen, whenSeen } = this.state;
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
                            <button className="red-cta-btn" onClick={this.showNewReviewPage}>Review this Movie</button> 
                            </React.Fragment>)}
                            { page === 'newReview' && (
                            <button className="red-cta-btn" onClick={this.showDetailsPage}>Movie Details</button> 
                            )}
                        </div>
                    </section>
                </section>
                {page === 'details' && (
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
                )}
                {page === 'newReview' && (
                <section className='movie-details-section-mid'>
                <h3 className="movie-details-review-header">New Review</h3>
                <hr className="movie-details-review-line"/>
                <form onSubmit={this.handleSubmit}>
                    <section className="movie-details-new-review-box">
                        <textarea placeholder="Enter Review Here" onChange = {this.handleChange} id="message" name="message" value={message} required></textarea>
                    </section>
                    <section className="movie-details-new-review-split">
                        <div className="movie-details-new-review-rating">
                            { rating !== '' && <StarRating rating={rating} /> }
                            { rating === '' && <StarRating rating={0} /> }
                        <p>Rate Captain Marvel on a scale of 1 - 10</p>
                        <input type="number" onChange = {this.handleChange} name="rating" id="rating" value={rating} min={1} max={10} required/>
                        </div>
                        <div className="movie-details-new-review-whenwhere">
                            <p>Where and when did you see Captain Marvel?</p>
                            <label htmlFor="whereSeen">Where</label><br />
                            <input type="text" className="bar-input" onChange = {this.handleChange} name="whereSeen" id="whereSeen" value={whereSeen} required/><br />
                            <label htmlFor="whenSeen">When</label><br />
                            <input type="date" className="bar-input" onChange = {this.handleChange} name="whenSeen" id="whenSeen" value={whenSeen} required/><br />
                        </div>
                    </section>
                    <button type="submit" className="red-cta-btn">
                        Submit Review
                    </button>
                </form>
                </section>
                )}
           </section>
        )
    }
}

export default MovieDetails;