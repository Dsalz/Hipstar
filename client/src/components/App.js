import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import IndexPage from '../components/LandingPageComponents/IndexPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={IndexPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
