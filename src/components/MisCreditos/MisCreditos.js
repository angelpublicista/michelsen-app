import React, {Component} from 'react';
import TopBar from './../TopBar/TopBar';
import Grid from '@material-ui/core/Grid';
import Section from '../Content/Section';
import ContentCredits from './../MisCreditos/ContentCredits';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCreditUserById } from './../../actions';
import moment from 'moment';
import 'moment/locale/es';
import {creditState, creditStateSeverity, convertCurrency} from './../../assets/js/helpers';
import ButtonNewCr from './../ButtonNewCr';


class MisCreditos extends Component{
    constructor(props){
        super(props);
        this.state={    
            data: [],
            creditsUser: []
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

    componentDidMount(){
        this.getCredits();
    }

    getCredits = () => {
        try{
            let infoData = this.state.data;
            this.props.getCreditUserById(infoData.IdCln);
            this.setState({active: true})
        }

        catch(err){
            console.log(`No se pueden mostrar créditos ${err}`)
            this.setState({active: false})
        }
        
     };
     
    render(){
        let credits = [];
        let sumCredits = 0
        let payCredits = 0

        if(this.props.users.data){
            this.props.users.data.map((currentValue, index, array)=>{
                    sumCredits =  sumCredits + parseInt(currentValue.TltDesembolsadoCrd)
                    payCredits = payCredits + parseInt(currentValue.TltAbonadoCapitalCrd)
            })
            
            credits = this.props.users.data.map((currentValue, index, array)=>{
                moment.locale('es');
                return(
                    {
                        NumCrd : currentValue.NumCrd,
                        TltDesembolsadoCrd: convertCurrency(currentValue.TltDesembolsadoCrd),
                        TltAbonadoCapitalCrd: convertCurrency(currentValue.TltAbonadoCapitalCrd),
                        EstadoCrd: creditState(currentValue.EstadoCrd),
                        FchCrd: moment(currentValue.FchCrd).format("DD MMMM YYYY"),
                        severity: creditStateSeverity(currentValue.EstadoCrd)
                    }
                    
                )
            }) 
        }  

        let difCredits = sumCredits - payCredits
        difCredits = convertCurrency(difCredits)
        
        return(
            <div className="mis-creditos">
                <Section 
                    title="Mis créditos" 
                    section={<ContentCredits 
                                credits={credits} 
                                saldo={difCredits}
                                data={this.state.data}
                                creditState = {this.props.users.type}
                            />} 
                />

                <ButtonNewCr />
            </div>
        );  
    }
}

//Esta función convierte el valor de la store en props para el componente
function mapStateToProps(state){
    return{
        users: state.getCreditUserById
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getCreditUserById
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MisCreditos);