import React, {Component} from 'react';
import TopBar from './../TopBar/TopBar';
import Grid from '@material-ui/core/Grid';
import Sidebar from './../Sidebar/Sidebar';
import ContentProfile from './../MiPerfil/ContentProfile';



class MisCreditos extends Component{
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
                          <ContentProfile />
                       </div>
                   </Grid>
               </Grid>
            </div>
        );
    }
}

export default MisCreditos;