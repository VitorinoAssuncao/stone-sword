import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './index.css';

import App from './pages/App';
import User from './pages/User';
import UserRegistry from './pages/User-Registry';
import MyCharacter from './pages/My-Characters';
import MyComics from './pages/My-Comics';
import MarvelCharacter from './pages/Marvel-Characters';
import MarvelComic from './pages/Marvel-Comics';

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/user" exact={true} component={User} />
        <Route path="/user/characters" exact={true} component={MyCharacter} />
        <Route path="/user/comics" exact={true} component={MyComics} />
        <Route path="/user/registry" exact={true} component={UserRegistry} />
        <Route path="/characters/search" exat={true} component={MarvelCharacter} />
        <Route path="/comics/search" exat={true} component={MarvelComic} />
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);