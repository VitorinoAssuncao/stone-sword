import React from 'react';
import { Redirect } from 'react-router';
import Main from '../components/Main';
import Form from '../components/Form';
import Label from '../components/Label';
import Input from '../components/Input';
import Button from '../components/Button';

import '../index.css';

class UserRegistry extends React.Component {
  constructor(props){
    super(props);
    this.state = {'user':{}};
    this.state = {'name':''};
    this.state = {'login':''};
    this.state = {'password':''};
    this.state = {'email':''};

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeLogin = this.handleChangeLogin.bind(this);
    this.handleChangePswd = this.handleChangePswd.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
  }


  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleChangeLogin(event) {
    this.setState({login: event.target.value});
  }

  handleChangePswd(event) {
    this.setState({password: event.target.value});
  }

  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    const requestOptions = {
        method : 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(
            {
            name:this.state.name,
            login:this.state.login,
            password:this.state.password,
            email:this.state.email
            }
            )
    }

    fetch(`https://stone-shield.herokuapp.com/users`, requestOptions)
    .then(res => res.json())
    .then(res => this.setState({user:res}));
    <Redirect to="/user" />;

}

  render () {
    return (
    <div>
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
        <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="cddmonitor.herokuapp.com"><img src='https://i.imgur.com/n8skBsp.png' alt='logo stone' /></a>
      </nav>

      <div className="container-fluid">
      <div className="row">
        <Main>
          <Form>
            <h1>Seja bem vindo</h1>
            <p>Para poder utilizar nosso aplicativo, é necessário primeiro preencher os dados abaixo para criar sua conta. Junte-se a nós agora mesmo!</p>
            <div className="form-group">
                <Label input="name" value="Nome" />
                <Input type="text" name="name" handler={this.handleChangeName}/>
            </div>
            <div className="form-group">
                <Label input="login" value="Login" />
                <Input type="text" name="login" handler={this.handleChangeLogin}/>
            </div>
            <div className="form-group">
                <Label input="password" value="Senha" /> 
                <Input type="password" name="password" handler={this.handleChangePswd}/>
            </div>
            <div className="form-group">
                <Label input="email" value="Email" />
                <Input type="text" name="email" handler={this.handleChangeEmail}/>
            </div>
            <Button color="success" type="submit" value="Confirmar Cadastro" click={(e) => this.handleSubmit(e)}/>
          </Form>
        </Main>
      </div>
    </div>
    </div>
  );
}
}

export default UserRegistry;
