import {GET_CLIENTS, LOAD_CLIENT, REGISTER_CLIENT, FAIL_CLIENT ,LOGIN_CLIENT, CURRENT_CLIENT, LOGOUT, VIDE_ERRORS, UPDATE_CLIENT}from '../Constants/clientTypes'
import axios from 'axios'

//afficher la liste des clients
export const get_clients=()=>async(dispatch) =>{
    try {
        const res = await axios.get('/api/client')
        dispatch({
            type:GET_CLIENTS,
            payload:res.data.clients
        })
    } catch (error) {
        console.log(error)
    }
 
 }


//ajouter un client
export const ajout_client=(newClient)=>async(dispatch)=>{
    try{
        await axios.post('/api/client',newClient)
        dispatch(get_clients())
    } catch(error){
        console.log(error)
    }
}


//modifier un  client
export const update_client=(ID,newClient)=>async(dispatch)=>{
    try {
        await axios.put(`/api/client/${ID}`,newClient)
        dispatch(get_clients())
    } catch (error) {
        console.log(error)
    }
}




//identification
export const register=(client,history)=>async(dispatch)=>{

    dispatch({type:LOAD_CLIENT})
     try {
         const res = await axios.post('/api/client/signUp',client)
         dispatch({
             type: REGISTER_CLIENT,
             payload : res.data
         })
         history.push('/profil')
 
     } catch (error) {
         dispatch({
             type: FAIL_CLIENT,
             payload:error.response.data
         })
     }
 }
 
 
 //s'identifier
 export const login=(client,history)=>async(dispatch)=>{
   dispatch({
       type:LOAD_CLIENT
   })
     try {
         const res = await axios.post('/api/client/signIn',client)
         dispatch({
             type:LOGIN_CLIENT,
             payload:res.data
         })
         history.push('/profil')
     } catch (error) {
         dispatch({
             type: FAIL_CLIENT,
             payload:error.response.data
         })
     }
 }
 
 //autorisation
 export const current=()=>async(dispatch)=>{
    const config = {
        headers:{
            authorization:localStorage.getItem('token')
        }
    }
     try {
         const res = await axios.get('/api/client/current',config)
         dispatch({
             type:CURRENT_CLIENT,
             payload:res.data
         })
     } catch (error) {
         dispatch({
             type: FAIL_CLIENT,
             payload:error.response.data
         })
     }
 }
 
 //déconnexion
 export const logout=()=>{
     return{
         type:LOGOUT
     }
 }
 
 export const videErrors=()=>{
     return{
         type:VIDE_ERRORS
     }
 }