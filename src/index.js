import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './index.css';

import App from './pages/App';
import User from './pages/User';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/user" exact={true} component={User} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);