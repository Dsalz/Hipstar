import React , { Component }from 'react';

//Components
import LandingSection from './LandingSection';
import RecentlyReviewedMovies from './RecentlyReviewedMovies';
import Footer from './Footer';

class IndexPage extends Component{
    
    render(){
        const movies = [
            {img: 'https://placehold.it/100', title: 'Aquaman', reviews: []},
            {img: 'https://placehold.it/100', title: 'Aquaman', reviews: []},
            {img: 'https://placehold.it/100', title: 'Aquaman', reviews: []},
            {img: 'https://placehold.it/100', title: 'Aquaman', reviews: []},
            {img: 'https://placehold.it/100', title: 'Aquaman', reviews: []},
            {img: 'https://placehold.it/100', title: 'Aquaman', reviews: []},
            {img: 'https://placehold.it/100', title: 'Aquaman', reviews: []}
        ];
      return(
      <div>
      <LandingSection />
      <RecentlyReviewedMovies movies={movies} />
      <Footer />
      </div>)
    }
}

export default IndexPage;