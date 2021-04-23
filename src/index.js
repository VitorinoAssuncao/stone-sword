import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './index.css';

import App from './pages/App';
import User from './pages/User';
import MarvelCharacther from './pages/Marvel-Characthers';
import store from './redux/store';

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/user" exact={true} component={User} />
        <Route path="/characthers/search" exat={true} component={MarvelCharacther} />
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);