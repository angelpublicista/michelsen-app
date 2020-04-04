import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Section from './../../Content/Section';
import ContentCredit from './../../MisCreditos/Credito/ContentCredit';
import {withRouter} from 'react-router-dom';



class Credito extends Component{
    
    render(){
        return(
            <div className="mi-credito">
               <Grid container>
                   <Grid item xs={12} id="main">
                       <Section title="Crédito" section={<ContentCredit/>} />
                   </Grid>
               </Grid>
            </div>
        );
    }
}

export default withRouter(Credito);