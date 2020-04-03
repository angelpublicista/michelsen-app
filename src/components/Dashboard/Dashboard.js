import React, {Component} from 'react';
import TopBar from './../TopBar/TopBar';
import Grid from '@material-ui/core/Grid';
import Sidebar from './../Sidebar/Sidebar';
import {Redirect} from 'react-router-dom';

class Dashboard extends Component{

    render(){      
        return(
            <Redirect to="/mis-creditos"/>
        );
    }
}

export default Dashboard;