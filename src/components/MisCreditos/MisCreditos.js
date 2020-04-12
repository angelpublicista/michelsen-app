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
import {BeatLoader} from 'react-spinners';




class MisCreditos extends Component{
    constructor(props){
        super(props);
        this.state={    
            data: []
        }

        this.convertCurrency = this.convertCurrency.bind(this);
        this.creditState = this.creditState.bind(this);
        this.creditStateSeverity = this.creditStateSeverity.bind(this);
    }

    creditState(number){
        let crState = ''
        let stNumber = parseInt(number)
        switch (stNumber) {
            case 1:
                crState = "Pagado";
                break;
            case 3:
                crState = "En mora";
                break;
            case 6:
                crState = "Activo";
                break;
        }

        return crState;
    }

    creditStateSeverity(number){
        let crState = ''
        let stNumber = parseInt(number)
        switch (stNumber) {
            case 1:
                crState = "info";
                break;
            case 3:
                crState = "error";
                break;
            case 6:
                crState = "success";
                break;
        }

        return crState;
    }

    convertCurrency(value){
        let updateValue = value
        const formatterPeso = new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0
        })
        
        updateValue = parseInt(updateValue)
        updateValue = formatterPeso.format(updateValue)

        return updateValue;
    }
    

    componentWillMount(){

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
        this.props.getCreditUserById(this.state.data.IdCln);
    }

    render(){
        let credits = [];
        let alertUser = ''
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
                     NumCrd :  currentValue.NumCrd,
                     TltDesembolsadoCrd: this.convertCurrency(currentValue.TltDesembolsadoCrd),
                     TltAbonadoCapitalCrd: this.convertCurrency(currentValue.TltAbonadoCapitalCrd),
                     EstadoCrd: this.creditState(currentValue.EstadoCrd),
                     FchCrd: moment(currentValue.FchCrd).format("DD MMMM YYYY"),
                     severity: this.creditStateSeverity(currentValue.EstadoCrd)
                  }
                  
              )
           })
        } else {
            alertUser = "NO TIENES CRÉDITOS ACTUALMENTE";
        }

        let difCredits = sumCredits - payCredits
        difCredits = this.convertCurrency(difCredits)
        
        return(
            <div className="mis-creditos">
                <Section 
                    title="Mis créditos" 
                    section={<ContentCredits 
                                credits={credits} 
                                alertUser={alertUser} 
                                saldo={difCredits}
                                data={this.state.data}
                            />} 
                />
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