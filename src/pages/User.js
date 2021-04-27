import React from 'react';
import Sidebar from '../components/Sidebar';
import SidebarItem from '../components/SidebarItem';
import Main from '../components/Main';
import Form from '../components/Form';
import Label from '../components/Label';
import Input from '../components/Input';
import Button from '../components/Button';
import {withRouter} from 'react-router-dom';

import '../index.css';

class User extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {'user':{}};
  }
  user_id = sessionStorage.getItem('@stone-sword/id');

  componentDidMount(){
    const requestOptions = {
      method : 'GET',
      headers: {'Content-Type': 'application/json'}
    }

    fetch(`https://stone-shield.herokuapp.com/users/${this.user_id}`, requestOptions)
    .then(res => res.json())
    .then(res  => this.setState({user: res}));
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
          <SidebarItem icon="users" value="Usuário" link="user"/>
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
            <h1>Seja bem vindo {this.state.user.name}</h1>
            <p>Logo abaixo podem ser vistos seus dados, e caso queira editar algum, basta preencher nos campos ao lado e editar as informações no mesmo, e após confirmar logo abaixo para salvar os novos dados.</p>
            <div className="form-group">
                <Label input="name" value="Nome" />: {this.state.user.name}  
                <Input type="text" name="name" />
            </div>
            <div className="form-group">
                <Label input="login" value="Login" />: {this.state.user.login}
                <Input type="text" name="login" />
            </div>
            <div className="form-group">
                <Label input="password" value="Senha" /> 
                <Input type="password" name="password" />
            </div>
            <div className="form-group">
                <Label input="email" value="Email" />: {this.state.user.email}
                <Input type="text" name="email" />
            </div>
            <Button color="success" type="submit" value="Atualizar Dados"  click={(e) => this.handleSubmit(e)}/>
          </Form>
        </Main>
      </div>
    </div>
    </div>
  );
}
}

export default withRouter(User);
