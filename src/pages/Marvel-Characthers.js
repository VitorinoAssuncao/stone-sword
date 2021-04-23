import React from 'react';
import Sidebar from '../components/Sidebar';
import SidebarItem from '../components/SidebarItem';
import Main from '../components/Main';
import Form from '../components/Form';
import Label from '../components/Label';
import Input from '../components/Input';
import Button from '../components/Button';
import marvel_key from '../tools/config';

import '../index.css';

class MarvelCharacther extends React.Component {
  constructor(props){
    super(props);
    this.state = {'search': ''};

    this.handleChangeValue = this.handleChangeValue.bind(this);
  }

  handleChangeValue(event) {
    this.setState({search: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const requestOptions = {
      method : 'GET'
    }
    console.log(`http://gateway.marvel.com/v1/public/characters?${marvel_key}&nameStartsWith=${this.state.search}`)
    fetch(`https://gateway.marvel.com/v1/public/characters?${marvel_key}&nameStartsWith=${this.state.search}`, requestOptions)
    .then(res => console.log(res.json()));
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
          <SidebarItem icon="users" value="Usuário" />
          <SidebarItem icon="book" value="Meus Quadrinhos" />
          <SidebarItem icon="mask" value="Meus Personagens" />
          <hr />
          <SidebarItem value="Mundo Marvel" />
          <div className="dropdown-divider"/>
          <SidebarItem icon="mask" value="Personagens" />
          <SidebarItem icon="book-open" value="Quadrinhos" />
        </Sidebar>

        <Main>
          <Form>
            <h1>Pesquise abaixo o personagem desejado:</h1>
            <div className="form-group">
                <Label input="searchValue" value="Pesquisa" />  
                <Input type="text" name="searchValue" handler={this.handleChangeValue} />
                <Button color="info" type="submit" value="Pesquisar"  click={(e) => this.handleSubmit(e)}/>
            </div>
            <small>Importante: a barra de pesquisa funciona por similaridade, com a inicial do nome do personagem, não funcionando com partes do meio ou similares.</small>
          </Form>
        </Main>
      </div>
    </div>
    </div>
  );
}
}

export default MarvelCharacther;
