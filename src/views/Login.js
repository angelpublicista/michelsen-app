import React, {Component} from 'react';
import SignIn from './../components/Login/SignIn';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLoginUser, getUsers } from '../actions';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

class Login extends Component{
    constructor(){
        super();
        this.state ={
            isLogged : false,
            social:"Facebook",
            correo: '',
            clave: '',
            idUser: '',
            validation: true
        }

        this.responseFacebook = this.responseFacebook.bind(this)
        this.responseGoogle = this.responseGoogle.bind(this)
        this.onFailure = this.onFailure.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    componentWillMount(){
        this.props.getUsers();

        if (localStorage.getItem("fbData") || localStorage.getItem("googleData") || localStorage.getItem("loginData")) {
            this.setState({
                isLogged: true
            })
        }
    }

    handleInput(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm(e){
        e.preventDefault();
       const correo = this.state.correo;
       const clave = this.state.clave;

       if(this.props.users.data){
           this.props.users.data.map((currentValue, index, array) => {
               if(currentValue.emailCln === correo && currentValue.DocuCln === clave){
                    localStorage.setItem("loginData", JSON.stringify(currentValue))
                    this.setState({
                        isLogged: true,
                        validation: true
                    })
               } else {
                   this.setState({
                       validation: false
                   })
               }
            })
       }
    }

    responseFacebook(response){
        let correo = response.email;

        if(this.props.users.data){
           this.props.users.data.map((currentValue, index, array) => {
               if(currentValue.emailCln === correo){
                    localStorage.setItem("fbData", JSON.stringify({
                        token: response.token,
                        emailCln: currentValue.emailCln,
                        NomCln: currentValue.NomCln,
                        PrApellidoCln: currentValue.PrApellidoCln,
                        SgApellidoCln: currentValue.SgApellidoCln,
                        CelularCln: currentValue.CelularCln,
                        TelResidenciaCln: currentValue.TelResidenciaCln,
                        DocuCln: currentValue.DocuCln,
                        idUser: currentValue.IdCln,
                        picture: response.picture.data.url,
                        social: 'Facebook'
                    }));
            
                    this.setState({
                        isLogged: true,
                        validation: true
                    })
               } else {
                   this.setState({
                        validation: false
                   })
               }
            })
        }   
    }

    responseGoogle(response){
        let correo = response.profileObj.email;

        if(this.props.users.data){
           this.props.users.data.map((currentValue, index, array) => {
               if(currentValue.emailCln === correo){
                    localStorage.setItem("googleData", JSON.stringify({
                        token: response.token,
                        emailCln: currentValue.emailCln,
                        NomCln: currentValue.NomCln,
                        PrApellidoCln: currentValue.PrApellidoCln,
                        SgApellidoCln: currentValue.SgApellidoCln,
                        CelularCln: currentValue.CelularCln,
                        TelResidenciaCln: currentValue.TelResidenciaCln,
                        DocuCln: currentValue.DocuCln,
                        idUser: currentValue.IdCln,
                        picture: response.profileObj.imageUrl,
                        social: 'google'
                    }));
                    
                    this.setState({
                        isLogged: true,
                        validation: true
                    })
               } else {
                    this.setState({
                        validation: false
                    })
               }
            })
        }

        
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
                handleInput={this.handleInput}
                submitForm = {this.submitForm}
                onFailure={this.onFailure} 
                responseGoogle={this.responseGoogle}
                validation={this.state.validation}
            />
        );
    }
}

//Esta función convierte el valor de la store en props para el componente
function mapStateToProps(state){
    return{
        users: state.getUsers
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getUsers
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);