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

//Login users

const startLoginUser = () =>{ return {type: 'START_LOGIN_USER', ready: false}}
const completeLoginUser = (data) => { return {type: 'COMPLETE_LOGIN_USER', data}}
const errorLoginUser = (err) => { return {type: 'ERROR_LOGIN_USER', err}}

export const getLoginUser = (userMail, userPass) =>{
    return (dispatch, getState) => {
        dispatch(startLoginUser());
        //TODO request con axios
        http.get('clientes/login/"'+userMail+'"/'+userPass+'/')
        .then((response) => {
            if(response.data){
                dispatch(completeLoginUser(response.data));
            } else {
                return null;
            }
        })
        .catch((err) => {
            dispatch(errorLoginUser(err));
        })
    }
}



