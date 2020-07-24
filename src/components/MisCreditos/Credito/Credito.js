import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Section from './../../Content/Section';
import ContentCredit from './../../MisCreditos/Credito/ContentCredit';
import {withRouter} from 'react-router-dom';



class Credito extends Component{
    constructor(props){
        super(props);
        this.state={
            data: [],
            planUser: []
        }

    }

    componentWillMount(){
        this.getData();
    }

    getData = () => {
        let fbData = JSON.parse(localStorage.getItem('fbData'));
        let googleData = JSON.parse(localStorage.getItem('googleData'));
        let loginData = JSON.parse(localStorage.getItem('loginData'));
        
        if(fbData){
            this.setState({data: fbData})
        } else if(googleData){
            this.setState({data: googleData})
        } else if(loginData){
            this.setState({data: loginData})
        }
    }

    render(){
        let plan = []

        return(
            <div className="mi-credito">
               <Grid container>
                   <Grid item xs={12} id="main">
                       <Section 
                          title="Crédito" 
                          section={<ContentCredit 
                                      plan={plan}
                                  />} 
                        />
                   </Grid>
               </Grid>
            </div>
        );
    }
}

export default withRouter(Credito);