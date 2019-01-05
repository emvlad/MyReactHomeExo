//that will take all reducers like users 
//and combine them in one object
// imports 
//import MoviesReducer from './reducer-movies'
import{combineReducers} from 'redux';
import UserReducer from './reducer-users';

//main object to save in the store constant- argument.
//always add all reducers created into the main object allReducers.
//it takes each reducer like an object
const allReducers = combineReducers({
    users: UserReducer
    //this object users in here represents
    // the array with all users in the file reducer-users.js
    //,movies:MoviesReducer,

});


export default allReducers;