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
                   <Grid item xs={12} sm={2} className="containerSidebar" id="main-sidebar">
                       <Sidebar />
                   </Grid>
                   <Grid item xs className="containerContent">
                       <div className="content" style={{height:"100vh"}}>
                          <TopBar title="Mis Créditos" />
                          <ContentCredits />
                       </div>
                   </Grid>
               </Grid>
            </div>
        );
    }
}

export default MisCreditos;