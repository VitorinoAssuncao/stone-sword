import React, { Fragment } from 'react';
import Sidebar from '../components/Sidebar';
import SidebarItem from '../components/SidebarItem';
import Main from '../components/Main';
import FavoriteButton,{sendFavorite} from '../components/FavoriteButton'

import '../index.css';
import marvel_key from '../tools/config';

class MyCharacter extends React.Component {
  constructor(props){
    super(props);
    this.state = {'character_list':{}};
    this.state = {'marvel_data':[]};
  }

  user_id = sessionStorage.getItem('@stone-sword/id');
  get_marvel_data = sessionStorage.getItem('@stone-sword/marvel_data');

  componentDidMount(){
    const requestOptions = {
      method : 'GET',
      headers: {'Content-Type': 'application/json'}
    }

    fetch(`https://stone-shield.herokuapp.com/users/${this.user_id}/characthers`, requestOptions)
    .then(res => res.json())
    .then(res  => this.setState({character_list: res}));
  };

  renderList(item_list){
    if(item_list !== undefined){
      item_list.forEach((item,index) =>
      this.takeDataFromMarvel(item.marvel_id)             
        );
    }
  }

  takeDataFromMarvel(marvel_id){
    var temp_data = {}
    const requestOptions = {
      method : 'GET'
    }
    fetch(`https://gateway.marvel.com/v1/public/characters/${marvel_id}?${marvel_key}`, requestOptions)
    .then(res => res.json())
    .then(res => temp_data = res.data.results);
  }

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
          {/* {this.renderList(this.state.character_list)} */}
          {console.log(this.takeDataFromMarvel(1017297))}
        </Main>
      </div>
    </div>
    </div>
  );
}
}

export default MyCharacter;
