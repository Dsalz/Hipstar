import React , { Component }from 'react';

//Components
import LandingSection from './LandingSection';
import RecentlyReviewedMovies from './RecentlyReviewedMovies';
import Footer from './Footer';
import Navbar from '../LayoutComponents/Navbar';

class IndexPage extends Component{
    
    render(){
        const movies = [
            {id: 1, img: 'https://placehold.it/100', title: 'Aquaman', reviews: [], rating: 8.2},
            {id: 2, img: 'https://placehold.it/100', title: 'Aquaman', reviews: [], rating: 4.2},
            {id: 3, img: 'https://placehold.it/100', title: 'Aquaman', reviews: [], rating: 1.2},
            {id: 4, img: 'https://placehold.it/100', title: 'Aquaman', reviews: [], rating: 0.2},
            {id: 5, img: 'https://placehold.it/100', title: 'Aquaman', reviews: [], rating: 2.2},
            {id: 6, img: 'https://placehold.it/100', title: 'Aquaman', reviews: [], rating: 6.2},
            {id: 7, img: 'https://placehold.it/100', title: 'Aquaman', reviews: [], rating: 9.2}
        ];
      return(
      <div>
      <Navbar type='trans'/>
      <LandingSection />
      <RecentlyReviewedMovies movies={movies} />
      <Footer />
      </div>)
    }
}

export default IndexPage;