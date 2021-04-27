import React, { Fragment } from 'react';
import Sidebar from '../components/Sidebar';
import SidebarItem from '../components/SidebarItem';
import Main from '../components/Main';
import FavoriteButton,{removeFavorite,sendFavorite} from '../components/FavoriteButton'

import '../index.css';
import marvel_key from '../tools/config';

class MyComics extends React.Component {
  constructor(props){
    super(props);
    this.state = {'favorite_list':{}};
    this.marvel_data = [];

    this.renderList = this.renderList.bind(this);
    this.renderComics = this.renderComics.bind(this);
  }

  user_id = sessionStorage.getItem('@stone-sword/id');

  componentDidMount(){
    const requestOptions = {
      method : 'GET',
      headers: {'Content-Type': 'application/json'}
    }

    fetch(`https://stone-shield.herokuapp.com/users/${this.user_id}/comics`, requestOptions)
    .then(res => res.json())
    .then(res => this.setState({favorite_list: res}))
    .then(res => this.renderList(this.state.favorite_list))

  };


  renderList(item_list){
    const requestOptions = {
      method : 'GET'
    }

    if(item_list !== undefined){
      item_list.forEach((item,index) =>{
        fetch(`https://gateway.marvel.com/v1/public/comics/${item.marvel_id}?${marvel_key}`, requestOptions)
        .then(res => res.json())
        .then(res => {
          if(res.status === "Ok"){
            this.marvel_data.push(res.data.results[0])
          }
            else{
              console.log('errou')
            };
            }
        );
        }
      )
    }
    }

    renderComics = (data) =>{
      if (data){
      var mapRows = data.map((item,index) => (
        <Fragment  key={item.id}>
        <div className="card bg-light p-2 m-1">
            <img className="border border-secondary rounded w-25 float-left" alt={item.title} src={`${item.thumbnail.path }/portrait_xlarge.jpg`} />
            <p><b>Título:</b> {item.title} (Edição Nº {item.issueNumber})</p> 
            <p><b>Descrição:</b> {item.description}</p>
            {this.createFavoriteButton(this.state.favorite_list,item.id)}
            <h3>Listagem de Personagens Participantes</h3>
            {item.characters.available > 0 ?
            (this.renderCharacters(item.characters.items)):("Não existem personagens informados")
            }
        </div>
        </Fragment>
      ));
      return mapRows;
    }
    };

    renderCharacters = (data) => {
      if (data) {
        var mapRows = data.map((item,index) => (
          <Fragment key={item.index}>
                <li>
                  <b>Nome:</b> {item.name}
                </li>
          </Fragment>
        ));
        return mapRows;
      };
    }
  
    createFavoriteButton(favorite_list,item_id){
      if(favorite_list !== undefined){
        var result =this.evalComicsID(favorite_list,item_id) 
        if (result.follow === 'follow'){
          return <FavoriteButton color="success fas fa-heart w-25" type="submit" value=" Favoritar"  click={() =>sendFavorite(this.user_id,item_id,'comic')} />
          }
        else {
          return <FavoriteButton color="danger fas fa-minus-circle w-25" type="submit" value=" Remover"  click={() =>removeFavorite(result.id,'comic')} />
          };
        }
    }

    evalComicsID(favorite_list,item_id) {
      var result  = {follow:'follow',id:0}
      if (favorite_list !== undefined){
        favorite_list.forEach((item,index) =>
          {item.marvel_id === item_id?(result = {follow: 'unfollow',id:item.id}):(console.log(''))}     
        )
      }
      return result
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
        {this.renderComics(this.marvel_data)}
        </Main>
      </div>
    </div>
    </div>
  );
}
}

export default MyComics;
