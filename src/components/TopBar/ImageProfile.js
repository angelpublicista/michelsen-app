import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import AccountCircle from '@material-ui/icons/AccountCircle';

class ImageProfile extends Component{
    constructor(){
        super();
        this.state = {
            imageProfile: ''
        }
    }

    componentWillMount(){
        let fbData = JSON.parse(localStorage.getItem('fbData'));
        let googleData = JSON.parse(localStorage.getItem('googleData'));
        let loginData = JSON.parse(localStorage.getItem('loginData'));
    
        if(fbData){
            this.setState({
                imageProfile: fbData.picture
            })
        } else if(googleData){
            this.setState({
                imageProfile: googleData.picture
            })
        } else if(loginData){
            this.setState({
                nameUser: loginData.NomCln + " " + loginData.PrApellidoCln
            })
        }
    }

    render(){
        console.log(this.state.imageProfile)
        if (this.state.imageProfile) {
            return(
                <Avatar alt="Remy Sharp" src={this.state.imageProfile} />
            )
        } else {
            return(
                <AccountCircle /> 
            )
        }
        
    }
}

export default ImageProfile;