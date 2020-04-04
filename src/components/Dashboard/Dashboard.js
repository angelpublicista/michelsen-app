import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
class Dashboard extends Component{

    render(){      
        return(
            <Redirect to="mis-creditos"/>
        );
    }
}

export default Dashboard;