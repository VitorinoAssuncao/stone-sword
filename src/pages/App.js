import React from 'react';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import Login from './Login';

import '../index.css';

function App() {
  return (
    <div>
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
        <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="cddmonitor.herokuapp.com"><img src='https://i.imgur.com/n8skBsp.png' alt='logo stone' /></a>
      </nav>

      <div className="container-fluid">
      <div className="row">
        <Sidebar>

        </Sidebar>

        <Main>
          <Login />
        </Main>
      </div>
    </div>
    </div>
  );
}

export default App;
