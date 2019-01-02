import React , { Component }from 'react';
import { graphql } from 'react-apollo';

//Components
import LandingSection from './LandingSection';
import RecentlyReviewedMovies from './RecentlyReviewedMovies';
import Footer from './Footer';
import Navbar from '../LayoutComponents/Navbar';

//Queries
import { getMoviesQuery } from '../../queries';

class IndexPage extends Component{
    
    render(){
        // const movies = [
        //     {id: 1, img: 'https://placehold.it/100', title: 'Aquaman', reviews: [], rating: 8.2},
        //     {id: 2, img: 'https://placehold.it/100', title: 'Aquaman', reviews: [], rating: 4.2},
        //     {id: 3, img: 'https://placehold.it/100', title: 'Aquaman', reviews: [], rating: 1.2},
        //     {id: 4, img: 'https://placehold.it/100', title: 'Aquaman', reviews: [], rating: 0.2},
        //     {id: 5, img: 'https://placehold.it/100', title: 'Aquaman', reviews: [], rating: 2.2},
        //     {id: 6, img: 'https://placehold.it/100', title: 'Aquaman', reviews: [], rating: 6.2},
        //     {id: 7, img: 'https://placehold.it/100', title: 'Aquaman', reviews: [], rating: 9.2}
        // ];
        const { loading, movies } = this.props.data;
        console.log(this.props);
      return(
      <div>
      <Navbar type='trans'/>
      <LandingSection />
      {!loading && <RecentlyReviewedMovies movies={movies.reverse().slice(0,6)} />}
      <Footer />
      </div>)
    }
}

export default graphql(getMoviesQuery)(IndexPage);