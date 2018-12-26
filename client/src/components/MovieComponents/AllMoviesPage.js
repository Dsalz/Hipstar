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
            {img: 'https://placehold.it/100', title: 'Aquaman', reviews: []},
            {img: 'https://placehold.it/100', title: 'Bquaman', reviews: []},
            {img: 'https://placehold.it/100', title: 'Cquaman', reviews: []},
            {img: 'https://placehold.it/100', title: 'Dquaman', reviews: []},
            {img: 'https://placehold.it/100', title: 'Aquaman', reviews: []},
            {img: 'https://placehold.it/100', title: 'Aquawoman', reviews: []},
            {img: 'https://placehold.it/100', title: 'Aquaman', reviews: []}
        ];
        const { queryString } = this.state;
        return(
            <div class="black-bg">
                <Navbar type='dark'/>
                <section className="all-movies-section">
                    <h2>All Movies</h2>
                    <hr />
                    <input type="text" class="bar-input" onChange = {this.queryMovies} name = "movie-query" placeholder="Search" />
                    <section className="all-movies-section-movies">
                    {queryString ? movies.filter(m => m.title.toLowerCase().indexOf(queryString) > -1).map(movie => <MidMovieCard {...movie} /> ) : movies.map(movie => <MidMovieCard {...movie} />)}
                    </section>
                </section>
            </div>
        )
    }
}

export default AllMoviesPage;