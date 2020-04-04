import React, {Component} from 'react';
import TopBar from './../TopBar/TopBar';
import Grid from '@material-ui/core/Grid';
import Section from '../Content/Section';
import ContentCredits from './../MisCreditos/ContentCredits';




class MisCreditos extends Component{
    render(){
        return(
            <div className="mis-creditos">
                <Section title="Mis créditos" section={<ContentCredits/>} />
            </div>
        );
    }
}

export default MisCreditos;