import React, {Component} from 'react';
import TopBar from './../TopBar/TopBar';
import Grid from '@material-ui/core/Grid';
import Sidebar from './../Sidebar/Sidebar';
import ContentCredits from './../MisCreditos/ContentCredits';




class MisCreditos extends Component{
    render(){
        return(
            <div className="mis-creditos">
               <Grid container>
                   <Grid item xs={12} id="main-sidebar">
                       <Sidebar title="Mis créditos" ContentSidebar={<ContentCredits/>} />
                   </Grid>
               </Grid>
            </div>
        );
    }
}

export default MisCreditos;