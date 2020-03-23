import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'

combineReducers(
    {
        auth : AuthReducer
    }
)


// {
//     cust : Costumer,
//     comp : Complain,
//     mon :Money
// }