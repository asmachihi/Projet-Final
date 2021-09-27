import {AJOUT_PANIER} from '../Constants/panierTypes'


const initState={
   panier:[],
}


const panierReducers = (state=initState,{type,payload})=>{
  switch (type) {
      case AJOUT_PANIER:
          return{
              ...state,panier:payload
          }
          
  
      default:
         return state
  }
}



export default panierReducers



