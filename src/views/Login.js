import React, {Component} from 'react';
import SignIn from './../components/Login/SignIn';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLoginUser } from '../actions';
import {Redirect} from 'react-router-dom';

class Login extends Component{
    constructor(){
        super();
        this.state ={
            isLogged : false,
            social:"Facebook",
            correo: '',
            clave: '',
            idUser: ''
        }

        this.responseFacebook = this.responseFacebook.bind(this)
        this.responseGoogle = this.responseGoogle.bind(this)
        this.onFailure = this.onFailure.bind(this)
        this.handleInputMail = this.handleInputMail.bind(this)
        this.handleInputPass = this.handleInputPass.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

   

    componentWillMount(){
        if (localStorage.getItem("fbData") || localStorage.getItem("googleData")) {
            this.setState({
                isLogged: true
            })
        }
    }

    handleInputMail(e){
        let valor = e.target.value
        this.setState({
            correo: valor
        })
    }

    handleInputPass(e){
        let valor = e.target.value
        this.setState({
            clave: valor
        })
    }


    handleSubmit(e){
        e.preventDefault()
        let email = this.state.correo
        let pass = this.state.clave
    }

    responseFacebook(response){
        localStorage.setItem("fbData", JSON.stringify({
            token: response.token,
            email: response.email,
            name: response.name,
            picture: response.picture.data.url
        }));

        this.setState({isLogged: true})
        
    }

    responseGoogle(response){
        localStorage.setItem("googleData", JSON.stringify({
            token: response.token,
            email: response.profileObj.email,
            name: response.profileObj.name,
            picture: response.profileObj.imageUrl,
            social: 'google'
        }));

        this.setState({isLogged: true})
    }


    onFailure(error){

    }

    
    render(){
        
        
        if (this.state.isLogged) {
            return(<Redirect to="/panel-admin" />); 
        }
        
        return(
            <SignIn 
                responseFacebook={this.responseFacebook} 
                handleInputMail={this.handleInputMail}
                handleInputPass={this.handleInputPass}
                handleSubmit={this.handleSubmit}
                onFailure={this.onFailure} 
                responseGoogle={this.responseGoogle} 
            />
        );
    }
}

//Esta función convierte el valor de la store en props para el componente
function mapStateToProps(state){
    return{
        users: state.getLoginUser
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getLoginUser
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);