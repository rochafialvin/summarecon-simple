import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'

export default combineReducers(
    {
        auth : AuthReducer
    }
) 



// {
//     cust : Costumer,
//     comp : Complain,
//     mon :Money
// }