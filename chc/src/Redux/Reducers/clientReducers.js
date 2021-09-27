import {CURRENT_CLIENT, FAIL_CLIENT, GET_CLIENTS, LOAD_CLIENT, LOGIN_CLIENT, LOGOUT, REGISTER_CLIENT,  VIDE_ERRORS} from '../Constants/clientTypes'


const initState={
    clients:{},
    errors:null,
    isAuth:false,
    load:false
}

const clientReducers = (state=initState,{type,payload})=>{
    switch (type) {
        case GET_CLIENTS:
            return {
                ...state,clients:payload
            }    
            case LOAD_CLIENT:
                return {
                    ...state,load:true
                }
            case REGISTER_CLIENT:
                case LOGIN_CLIENT:
                localStorage.setItem("token",payload.token)
                return { 
                    //clients déclaré au début
                    ...state,clients:payload.client,load:false,isAuth:true
                }
            case FAIL_CLIENT:
                return{
                    ...state,errors:payload.errors,load:false
                }
            case CURRENT_CLIENT:
                return{
                    ...state,client:payload.client,isAuth:true
                }
            case LOGOUT:
                localStorage.removeItem('token')
                return{
                    ...state,client:null,isAuth:false
                }
            case VIDE_ERRORS:
                return{
                    ...state,errors:null
                } 
        default:
            return state
    }
}

export default clientReducers