import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

// Components
import IndexPage from '../components/LandingPageComponents/IndexPage';
import AboutPage from '../components/AboutPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={IndexPage} />
          <Route path='/about' component={AboutPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
