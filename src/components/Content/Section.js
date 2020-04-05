import React, {Component} from 'react';
import Content from './Content';
import {Redirect} from 'react-router-dom';


class Section extends Component{
    constructor(){
        super();
        this.state={
            idUser : '',
            nameUser : '',
            emailUser : '',
            userPicture: '',
            isLogout: false
        }
    
        this.onLogout = this.onLogout.bind(this);
    }
    
    componentDidMount(){
        
        let fbData = JSON.parse(localStorage.getItem('fbData'));
        let googleData = JSON.parse(localStorage.getItem('googleData'));
        let loginData = JSON.parse(localStorage.getItem('loginData'));
        
        if(!loginData && !fbData && !googleData){
            this.setState({isLogout: true})
        }
        
    
        if(fbData){
            this.setState({
                nameUser: fbData.NomCln + " " + fbData.PrApellidoCln,
                userPicture: fbData.picture
            })
        } else if(googleData){
            this.setState({
                nameUser: googleData.NomCln + " " + googleData.PrApellidoCln,
                userPicture: googleData.picture
            })
        } else if(loginData){
            this.setState({
                nameUser: loginData.NomCln + " " + loginData.PrApellidoCln
            })
        }
        
    }
    
    onLogout(e){
        localStorage.clear();
        this.setState({
            isLogout: true
        })
    }

    render(){
        if (this.state.isLogout) {
            return(
                <Redirect to="/"/>
            )
        }  
        return(
            <Content title={this.props.title} section={this.props.section} nameUser={this.state.nameUser} onLogout={this.onLogout}/>
        )
    }
}

export default Section;