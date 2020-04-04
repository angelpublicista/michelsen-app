import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Section from './../Content/Section';
import ContentProfile from './../MiPerfil/ContentProfile';
import { logDOM } from '@testing-library/react';



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

    componentDidMount(){
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
                addressUser: fbData.DirCln,
                idUser: fbData.IdCln,
                mobilePhone: fbData.CelularCln,
                fixedPhone: fbData.TelResidenciaCln,
                docUser: fbData.DocuCln,
                city: fbData.CiuCln
                
            })
        } else if(googleData){
            this.setState({
                nameUser: googleData.NomCln,
                lastNameUser: googleData.PrApellidoCln + " " + googleData.SgApellidoCln,
                emailUser: googleData.emailCln,
                addressUser: googleData.DirCln,
                idUser: googleData.IdCln,
                mobilePhone: googleData.CelularCln,
                fixedPhone: googleData.TelResidenciaCln,
                docUser: googleData.DocuCln,
                city: googleData.CiuCln
            })
        } else if(loginData){
            this.setState({
                nameUser: loginData.NomCln,
                lastNameUser: loginData.PrApellidoCln + " " + loginData.SgApellidoCln,
                emailUser: loginData.emailCln,
                addressUser: loginData.DirCln,
                idUser: loginData.IdCln,
                mobilePhone: loginData.CelularCln,
                fixedPhone: loginData.TelResidenciaCln,
                docUser: loginData.DocuCln,
                city: loginData.CiuCln   
            })
        }
    }

    render(){
        return(
            <div className="mi-perfil">
                <Grid container>
                   <Grid item xs={12} id="main">
                       <Section title="Mi perfil"
                        section={<ContentProfile
                            nameUser={this.state.nameUser}
                            lastNameUser={this.state.lastNameUser}
                            emailUser={this.state.emailUser}
                            addressUser={this.state.addressUser}
                            idUser={this.state.idUser}
                            mobilePhone={this.state.mobilePhone}
                            fixedPhone={this.state.fixedPhone}
                            docUser={this.state.docUser}
                            city={this.state.city}
                        />} 
                        />
                   </Grid>
               </Grid>
            </div>
        );
    }
}

export default MisCreditos;