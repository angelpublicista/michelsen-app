import React, {Component} from 'react';
import TopBarContent from './TopBarContent';
import {Redirect} from 'react-router-dom';

class TopBar extends Component{
  constructor(){
        super();
        this.state={
            idUser : '',
            nameUser : '',
            emailUser : '',
            userPicture: '',
            imageProfile: '',
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
                imageProfile: fbData.picture
            })
        } else if(googleData){
            this.setState({
                nameUser: googleData.NomCln + " " + googleData.PrApellidoCln,
                imageProfile: googleData.picture
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
          <TopBarContent avatar={this.state.imageProfile} title={this.props.title} nameUser={this.state.nameUser}  onLogout={this.onLogout}/>
      )
    }
}

export default TopBar;