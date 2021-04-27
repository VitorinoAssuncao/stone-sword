import React, { Fragment } from 'react';
import Sidebar from '../components/Sidebar';
import SidebarItem from '../components/SidebarItem';
import Main from '../components/Main';
import Form from '../components/Form';
import Label from '../components/Label';
import Input from '../components/Input';
import Button from '../components/Button';
import FavoriteButton,{removeFavorite,sendFavorite} from '../components/FavoriteButton'

import marvel_key from '../tools/config';
import '../index.css';

class MarvelComic extends React.Component {
  constructor(props){
    super(props);
    this.state = {'response':{}};
    this.state = {'search': ''};
    this.state = {'favorite_list':{}};

    this.handleChangeValue = this.handleChangeValue.bind(this);
  }

  user_id = sessionStorage.getItem('@stone-sword/id');

  evalComicsID(favorite_list,item_id) {
    var result  = {follow:'follow',id:0}
    if (favorite_list !== undefined){
      favorite_list.forEach((item,index) =>
        {item.marvel_id === item_id?(result = {follow: 'unfollow',id:item.id}):(console.log(''))}     
      )
    }
    return result
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

  handleChangeValue(event) {
    this.setState({search: event.target.value});
  }

  handleSubmitComic(event) {
    event.preventDefault();
    const requestOptions = {
      method : 'GET'
    }
    fetch(`https://gateway.marvel.com/v1/public/comics?${marvel_key}&titleStartsWith=${this.state.search}`, requestOptions)
    .then(res => res.json())
    .then(res => this.setState({response:res.data.results}));
  }    

  componentDidMount(){
    const requestOptions = {
      method : 'GET',
      headers: {'Content-Type': 'application/json'}
    }

    fetch(`https://stone-shield.herokuapp.com/users/${this.user_id}/comics`, requestOptions)
    .then(res => res.json())
    .then(res  => this.setState({favorite_list: res}));
  }

  renderCharacters = (data) => {
    if (data) {
      var mapRows = data.map((item,index) => (
        <Fragment key={item.index}>
              <li>
                <b>Nome:</b> {item.name}, <a className="text-danger" href={item.resourceURI}>Link</a>
              </li>
        </Fragment>
      ));
      return mapRows;
    };
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
          <Form>
            <h1>Pesquise abaixo o quadrinho que deseja:</h1>
            <div className="form-group">
                <Label input="searchValue" value="Pesquisa" />  
                <Input type="text" name="searchValue" handler={this.handleChangeValue} />
                <Button color="info" type="submit" value="Pesquisar"  click={(e) => this.handleSubmitComic(e)}/>
            </div>
            <small>Importante: a barra de pesquisa funciona por similaridade, com a inicial do título do quadrinho, não funcionando com partes do meio ou similares.</small>
          </Form>
          {this.renderComics(this.state.response)}
        </Main>
      </div>
    </div>
    </div>
  );
}
}

export default MarvelComic;
