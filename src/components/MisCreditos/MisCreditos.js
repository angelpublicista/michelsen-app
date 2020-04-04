import React, {Component} from 'react';
import TopBar from './../TopBar/TopBar';
import Grid from '@material-ui/core/Grid';
import Section from '../Content/Section';
import ContentCredits from './../MisCreditos/ContentCredits';




class MisCreditos extends Component{
    render(){
        return(
            <div className="mis-creditos">
               <Grid container>
                   <Grid item xs={12} id="main">
                       <Section title="Mis créditos" section={<ContentCredits/>} />
                   </Grid>
               </Grid>
            </div>
        );
    }
}

export default MisCreditos;