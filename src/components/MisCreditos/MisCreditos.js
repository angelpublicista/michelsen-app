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



class MisCreditos extends Component{
    constructor(){
        super();
        this.state={
            idUser : '',
        }

        this.convertCurrency = this.convertCurrency.bind(this);
    }
    

    componentDidMount(){

        let fbData = JSON.parse(localStorage.getItem('fbData'));
        let googleData = JSON.parse(localStorage.getItem('googleData'));
        let loginData = JSON.parse(localStorage.getItem('loginData'));
    
        if(fbData){
            console.log(fbData.idUser)
            this.setState({
                idUser: fbData.idUser
            })
            this.props.getCreditUserById(fbData.idUser);
        } else if(googleData){
            this.setState({
                idUser: googleData.idUser
            })
            this.props.getCreditUserById(googleData.idUser);
        } else if(loginData){
            this.setState({
                idUser: loginData.idUser
            })
            this.props.getCreditUserById(loginData.idUser);
        }

        
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

    render(){
        

        //console.log(formatterPeso.format(2000))

        let credits = [];
        if(this.props.users.data){
           credits = this.props.users.data.map((currentValue, index, array)=>{
              moment.locale('es');
              return(
                  {
                     NumCrd :  currentValue.NumCrd,
                     TltDesembolsadoCrd: this.convertCurrency(currentValue.TltDesembolsadoCrd),
                     EstadoCrd: currentValue.EstadoCrd,
                     FchCrd: moment(currentValue.FchCrd).format("DD MMMM YYYY"),
                  }
                  
              )
           })
        }

        return(
            <div className="mis-creditos">
                <Section title="Mis créditos" section={<ContentCredits credits={credits} />} />
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