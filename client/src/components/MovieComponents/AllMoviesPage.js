import React , { Component } from 'react';

//Components
import Navbar from '../LayoutComponents/Navbar';
import MidMovieCard from './MidMovieCard';

//CSS
import '../../css/MovieComponents/AllMovies.css';

class AllMoviesPage extends Component{

    state = {
        queryString: '',
    }

    queryMovies = (e) => {
        let searchedString = e.target.value.trim().toLowerCase();
        this.setState({
            queryString : searchedString
        })
    }

    render(){
        // const { movies } = this.props;
        const movies = [
            {id: 1, img: 'https://placehold.it/100', title: 'Aquaman', reviews: [], rating: 8.2},
            {id: 2, img: 'https://placehold.it/100', title: 'Bquaman', reviews: [], rating: 5.0},
            {id: 3, img: 'https://placehold.it/100', title: 'Cquaman', reviews: [], rating: 7.2},
            {id: 4, img: 'https://placehold.it/100', title: 'Dquaman', reviews: [], rating: 4.2},
            {id: 5, img: 'https://placehold.it/100', title: 'Aquaman', reviews: [], rating: 7.0},
            {id: 6, img: 'https://placehold.it/100', title: 'Aquawoman', reviews: [], rating: 8.2},
            {id: 7, img: 'https://placehold.it/100', title: 'Aquaman', reviews: [], rating: 1.2}
        ];
        const { queryString } = this.state;
        return(
            <div className="black-bg">
                <Navbar type='dark'/>
                <section className="all-movies-section">
                    <h2>All Movies</h2>
                    <hr />
                    <input type="text" className="bar-input" onChange = {this.queryMovies} name = "movie-query" placeholder="Search" />
                    <section className="all-movies-section-movies">
                    {queryString ? movies.filter(m => m.title.toLowerCase().indexOf(queryString) > -1).map(movie => <MidMovieCard {...movie} key={movie.id}/> ) : movies.map(movie => <MidMovieCard {...movie} key={movie.id}/>)}
                    </section>
                </section>
            </div>
        )
    }
}

export default AllMoviesPage;