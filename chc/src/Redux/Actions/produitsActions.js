import axios from 'axios'
import { GET_PRODUITS,ADD_TO_CART,PLUS,MOINS,TOTAL, REMOVE_FROM_CART} from '../Constants/produitTypes'



//afficher les produits
export const get_produits=()=>async(dispatch) =>{
   try {
       const res = await axios.get('/api/produit')
       dispatch({
           type:GET_PRODUITS,
           payload:res.data.produits
       })

   } catch (error) {
       console.log(error)
   }

}

export const addToCart =(ID) =>async(dispatch)=>{
    try {
        const res = await axios.get(`/api/produit/${ID}`)
        dispatch({
            type:ADD_TO_CART,
            payload: res.data.produit
        })
    } catch (error) {
        console.log(error)
    }
}

export const removeFromCart = (ID) => async (dispatch) => {
    try {
       
       dispatch({
           type: REMOVE_FROM_CART,
           payload :ID
       })
        
    } catch (error) {
        console.log(error)
    }
}


export const plus=(x)=>{
    return {
        type:PLUS,
        payload:x
    }
}
export const moins=()=>{
    return {
        type:MOINS
    }
}

// export const total=()=>{
//     return {
//         type:TOTAL,
//         payload:
//     }
// }
