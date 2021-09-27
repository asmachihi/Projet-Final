
import { GET_PRODUITS,ADD_TO_CART,PLUS,MOINS,REMOVE_FROM_CART } from "../Constants/produitTypes"


const initState={
    produits:[],
    quantite:0,
    paniers:[]
}

const produitsReducers = (state=initState,{type,payload})=>{
    switch (type) {
        case GET_PRODUITS:
            return {
                ...state,produits:payload
            }  
        case ADD_TO_CART:
            return{
                ...state,paniers:[...state.paniers,payload]
            } 
        case REMOVE_FROM_CART:
            return {
              ...state,paniers:state.paniers.filter((x) => x._id === payload)
                }; 
        case PLUS:
            return {
                ...state,quantite:state.quantite+payload
            }
        case MOINS:
             return {
                ...state,quantite:state.quantite-1
            }    
        default:
            return state
    }
}





export default produitsReducers