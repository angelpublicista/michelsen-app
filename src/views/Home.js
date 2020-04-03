import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUsers } from '../actions';
import { BeatLoader } from 'react-spinners';
import Dashboard from './../components/Dashboard/Dashboard';


class Home extends Component{ 
    constructor(){
        super();
    }
    /*
    componentWillMount(){
       this.props.getUsers();
    }
    */
    render(){
        /*
        let users = [];
        if (this.props.users.data) {
            users = this.props.users.data.map((currentValue, index, array) => {
                return(
                    <UserItem 
                        key={index}
                        name={currentValue.NomCln}
                        lastNameOne = {currentValue.PrApellidoCln}
                        lastNameTwo = {currentValue.SgApellidoCln}
                        email = {currentValue.emailCln}
                        id = {currentValue.IdCln}
                    />
                )
            })
        }
        if (this.props.users.type === "START_GET_USERS") {
            return(
                <div className="home-preloader">
                    <BeatLoader 
                        color="#2c3f5e"
                        loading={true}
                    />
                </div>
            );
        }
        */
        return(
            <div className="home">
                <Dashboard />
            </div>
        );
    }
}

//Esta función convierte el valor de la store en props para el componente
function mapStateToProps(state){
    return{
        users: state.getUsers
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getUsers
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);