import React from 'react';
import { Redirect } from 'react-router';
import Form from '../components/Form';
import Label from '../components/Label';
import Input from '../components/Input';
import Button from '../components/Button';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {'login': ''};
        this.state = {'password': ''};
        this.state = {'logged':false};

        this.handleChangeLogin = this.handleChangeLogin.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getStateLoggedd(){
        return this.state.logged;
    }

    handleChangeLogin(event) {
        this.setState({login: event.target.value});
    }

    handleChangePassword(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        const requestOptions = {
            method : 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                {
                login:this.state.login,
                password:this.state.password
                }
                )
        }

        fetch(`https://stone-shield.herokuapp.com/users/login`, requestOptions)
        .then(res => res.json())
        .then(res => console.log(res));
        this.setState({logged:true});
    }

    render() {
        if (this.getStateLoggedd()){
            return <Redirect to='/user' />
        }
        return (
        <Form>
            <h3 className="text-center">Seja bem vindo ao Mundo Marvel!</h3>
            <div className="input-group m-1">
                <Label input="login" value="Digite seu Login:" />
                <Input type="text" name="login" handler={this.handleChangeLogin}/>
            </div>
            <div className="input-group m-1">
                <Label input="password" value="Digite sua Senha:" />
                <Input type="password" name="password" handler={this.handleChangePassword}/>
            </div>
            <div className="btn-group m-1">
                <Button color="success" type="submit" value="Logar"  click={(e) => this.handleSubmit(e)}/>
                <Button color="info" type="submit" value="Cadastre-se" />
            </div>
            <p>{this.state.res}</p>
        </Form>
        );
    }
}

export default Login;
