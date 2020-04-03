import React, {Component} from 'react';
import TopBar from './../TopBar/TopBar';
import Grid from '@material-ui/core/Grid';
import Sidebar from './../Sidebar/Sidebar';
import ContentProfile from './../MiPerfil/ContentProfile';



class MisCreditos extends Component{
    constructor(){
        super();
        this.state={
            nameUser: '',
            lastNameUser: '',
            emailUser: '',
            addressUser: '',
            idUser: '',
            mobilePhone: '',
            fixedPhone: '',
            docUser: '',
            city: ''
        }
    }

    componentWillMount(){
        let fbData = JSON.parse(localStorage.getItem('fbData'));
        let googleData = JSON.parse(localStorage.getItem('googleData'));
        let loginData = JSON.parse(localStorage.getItem('loginData'));
        
        if(!loginData && !fbData && !googleData){
            this.setState({isLogout: true})
        }
        
    
        if(fbData){
            this.setState({
                nameUser: fbData.NomCln,
                lastNameUser: fbData.PrApellidoCln + " " + fbData.SgApellidoCln,
                emailUser: fbData.emailCln,
                addressUser: '',
                idUser: fbData.IdCln,
                mobilePhone: fbData.CelularCln,
                fixedPhone: fbData.TelResidenciaCln,
                docUser: fbData.DocuCln,
                city: ""
            })
        } else if(googleData){
            this.setState({
                nameUser: googleData.NomCln,
                lastNameUser: googleData.PrApellidoCln + " " + googleData.SgApellidoCln,
                emailUser: googleData.emailCln,
                addressUser: '',
                idUser: googleData.IdCln,
                mobilePhone: googleData.CelularCln,
                fixedPhone: googleData.TelResidenciaCln,
                docUser: googleData.DocuCln,
                city: ""
            })
        } else if(loginData){
            this.setState({
                nameUser: loginData.NomCln,
                lastNameUser: loginData.PrApellidoCln + " " + loginData.SgApellidoCln,
                emailUser: loginData.emailCln,
                addressUser: '',
                idUser: loginData.IdCln,
                mobilePhone: loginData.CelularCln,
                fixedPhone: loginData.TelResidenciaCln,
                docUser: loginData.DocuCln,
                city: ""   
            })
        }
    }

    render(){
        return(
            <div className="mi-perfil">
               <Grid container>
                   <Grid item xs={12} sm={2}>
                       <Sidebar />
                   </Grid>
                   <Grid item xs={12} sm={10}>
                       <div className="content" style={{height:"100vh"}}>
                          <TopBar title="Mi Perfil" />
                          <ContentProfile
                              nameUser={this.state.nameUser}
                              lastNameUser={this.state.lastNameUser}
                              emailUser={this.state.emailUser}
                              addressUser={this.state.addressUser}
                              idUser={this.state.idUser}
                              mobilePhone={this.state.mobilePhone}
                              fixedPhone={this.state.fixedPhone}
                              docUser={this.state.docUser}
                              city={this.state.city}
                          />
                       </div>
                   </Grid>
               </Grid>
            </div>
        );
    }
}

export default MisCreditos;