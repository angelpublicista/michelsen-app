import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Section from './../Content/Section';
import ContentInfo from './ContentInfo';



class Info extends Component{
    render(){
        return(
            <div className="info">
               <Grid container>
                   <Grid item xs={12} id="main">
                       <Section title="Información" section={<ContentInfo/>} />
                   </Grid>
               </Grid>
            </div>
        );
    }
}

export default Info;