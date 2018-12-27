import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

// Components
import IndexPage from '../components/LandingPageComponents/IndexPage';
import AboutPage from '../components/AboutPage';
import LoginPage from '../components/LoginPage';
import SignUpPage from '../components/SignUpPage';
import AllMoviesPage from '../components/MovieComponents/AllMoviesPage';
import MovieDetails from '../components/MovieComponents/MovieDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={IndexPage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/signup' component={SignUpPage} />
          <Route path='/allmovies' component={AllMoviesPage} />
          <Route path='/movie/:movieName' component={MovieDetails} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
