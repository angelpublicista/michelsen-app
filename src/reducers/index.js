import { combineReducers } from 'redux';
import { getUsers, getUserById, getCreditUserById } from './UserReducer';


export default combineReducers({ 
    getUsers,
    getUserById,
    getCreditUserById
});