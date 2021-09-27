import {combineReducers} from 'redux'
import produitsReducers from './produitsReducers'
import contactReducers from './contactReducers'
import clientReducers from './clientReducers'
import panierReducers from './panierReducers'


const rootReducer=combineReducers({
    produitsReducers,contactReducers,clientReducers,panierReducers
})

export default rootReducer