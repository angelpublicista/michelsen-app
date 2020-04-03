import { combineReducers } from 'redux';
import { getUsers, getUserById, getLoginUser } from './UserReducer';


export default combineReducers({ 
    getUsers,
    getUserById,
    getLoginUser
});