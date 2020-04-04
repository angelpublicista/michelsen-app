import React, {Component} from 'react';
import SidebarContent from './SidebarContent';
import {Redirect} from 'react-router-dom';


class Sidebar extends Component{
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
                nameUser: fbData.name
            })
        } else if(googleData){
            this.setState({
                nameUser: googleData.name
            })
        } else if(loginData){
            this.setState({
                nameUser: loginData.name
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
            <SidebarContent title={this.props.title} ContentSidebar={this.props.ContentSidebar} onLogout={this.onLogout}/>
        )
    }
}

export default Sidebar;