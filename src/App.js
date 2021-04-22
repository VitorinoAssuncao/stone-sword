import React from 'react';
import Sidebar from './components/Sidebar';
import SidebarItem from './components/SidebarItem';
import Main from './components/Main';
import Login from './pages/Login';

import './index.css';

function App() {
  return (
    <div>
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
        <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="cddmonitor.herokuapp.com"><img src='https://i.imgur.com/n8skBsp.png' alt='logo stone' /></a>
      </nav>

      <div className="container-fluid">
      <div className="row">
        <Sidebar>
        <SidebarItem value="Área do Usuário" />
          <SidebarItem icon="users" value="Usuário" />
          <SidebarItem icon="book" value="Meus Quadrinhos" />
          <SidebarItem icon="mask" value="Meus Personagens" />
          <hr />
          <SidebarItem value="Mundo Marvel" />
          <SidebarItem icon="mask" value="Personagens" />
          <SidebarItem icon="book-open" value="Quadrinhos" />
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
