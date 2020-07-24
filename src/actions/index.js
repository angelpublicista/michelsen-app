import http from './http';

//getUsers

const startGetUsers = () =>{ return {type: 'START_GET_USERS', ready: false}}
const completeGetUsers = (data) => { return {type: 'COMPLETE_GET_USERS', data}}
const errorGetUsers = (err) => { return {type: 'ERROR_GET_USERS', err}}

export const getUsers = () =>{
    return (dispatch, getState) => {
        dispatch(startGetUsers());
        //TODO request con axios
        http.get('clientes/')
        .then((response) => {
            if(response.data)
              dispatch(completeGetUsers(response.data));
        })
        .catch((err) => {
            dispatch(errorGetUsers(err));
        })
    }
}


//Get user by id

const startGetUserById = () =>{ return {type: 'START_GET_USER_BY_ID', ready: false}}
const completeGetUserById = (data) => { return {type: 'COMPLETE_GET_USER_BY_ID', data}}
const errorGetUserById = (err) => { return {type: 'ERROR_GET_USER_BY_ID', err}}

export const getUserById = (userId) =>{
    return (dispatch, getState) => {
        dispatch(startGetUserById());
        //TODO request con axios
        http.get('clientes/'+userId+'/')
        .then((response) => {
            if(response.data)
              dispatch(completeGetUserById(response.data));
        })
        .catch((err) => {
            dispatch(errorGetUserById(err));
        })
    }
}

//Get credits by id user
const startGetCreditUserById = () =>{ return {type: 'START_GET_CREDIT_USER_BY_ID', ready: false}}
const completeGetCreditUserById = (data) => { return {type: 'COMPLETE_GET_CREDIT_USER_BY_ID', data}}
const errorGetCreditUserById = (err) => { return {type: 'ERROR_GET_CREDIT_USER_BY_ID', err}}

export const getCreditUserById = (userId) =>{
    return (dispatch, getState) => {
        dispatch(startGetCreditUserById());
        //TODO request con axios
        http.get('creditos/'+userId+'/')
        .then((response) => {
            if(response.data)
              dispatch(completeGetCreditUserById(response.data));
        })
        .catch((err) => {
            dispatch(errorGetCreditUserById(err));
        })
    }
}


