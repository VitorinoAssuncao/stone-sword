import React, { Fragment } from 'react';
import Sidebar from '../components/Sidebar';
import SidebarItem from '../components/SidebarItem';
import Main from '../components/Main';
import FavoriteButton,{sendFavorite} from '../components/FavoriteButton'

import '../index.css';

class MyComics extends React.Component {
  constructor(props){
    super(props);
    this.state = {'comics_list':{}};
  }

  toggle = () => this.handleChangeModal()

  componentDidMount(){
    const requestOptions = {
      method : 'GET',
      headers: {'Content-Type': 'application/json'}
    }

    fetch(`https://stone-shield.herokuapp.com/users/1/comics`, requestOptions)
    .then(res => res.json())
    .then(res  => this.setState({comics_list: res}));
  }

  renderComics = (data) => {
    if (data) {
      var mapRows = data.map((item,index) => (
        <Fragment key={item.index}>
              <li>
                <b>Título:</b> {item.name}, <a className="text-danger" href={item.resourceURI}>Link</a>
              </li>
        </Fragment>
      ));
      return mapRows;
    };
  }

  renderCharacther = (data) =>{
    if (data){
    var mapRows = data.map((item,index) => (
      <Fragment  key={item.id}>
      <div className="card bg-light p-2 m-1">
          <img className="border border-secondary rounded w-25 float-left" alt={item.name} src={`${item.thumbnail.path }/portrait_medium.jpg`} />
          <p><b>Nome Personagem:</b> {item.name}</p>
          <p><b>Descrição: </b> 
          {item.description ?
          (item.description):("Sem descrição informada")
          }</p>
          <FavoriteButton color="danger fas fa-heart w-25" type="submit" value=" Favoritar"  click={() =>sendFavorite(1,item.id,'character')} />
          <hr />
          <h3>Listagem de Quadrinhos</h3>
          {item.comics.available > 0 ?(this.renderComics(item.comics.items)):("Sem quadrinhos informados.")}
          
      </div>
      </Fragment>
    ));
    return mapRows;
  }
  };

  render () {
    return (
    <div>
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
        <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="cddmonitor.herokuapp.com"><img src='https://i.imgur.com/n8skBsp.png' alt='logo stone' /></a>
      </nav>

      <div className="container-fluid">
      <div className="row">
      <Sidebar>
          <SidebarItem value="Área do Usuário" />
          <div className="dropdown-divider"/>
          <SidebarItem icon="users" value="Usuário" link="/user"/>
          <SidebarItem icon="book" value="Meus Quadrinhos" link="/user/comics" />
          <SidebarItem icon="mask" value="Meus Personagens" link="/user/characters"/>
          <hr />
          <SidebarItem value="Mundo Marvel" />
          <div className="dropdown-divider"/>
          <SidebarItem icon="mask" value="Personagens" link="/characters/search" />
          <SidebarItem icon="book-open" value="Quadrinhos" link="/comics/search"/>
        </Sidebar>

        <Main>
            {console.log(this.state.comics_list)}
        </Main>
      </div>
    </div>
    </div>
  );
}
}

export default MyComics;
