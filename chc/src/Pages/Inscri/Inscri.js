import React,{useState} from 'react'
import './inscri.css'
import { useDispatch , useSelector} from 'react-redux'
import {Button} from 'react-bootstrap'
import { ajout_client, videErrors } from "../../Redux/Actions/clientActions";
import { register } from '../../Redux/Actions/clientActions'
import Error from '../../Components/Error/Error'


export default function Inscri({history}) {

 const errors = useSelector(state => state.clientReducers.errors)

  const dispatch = useDispatch()
  const [client,setClient] = useState({
    nom:"",
    email:"",
    nom_societe:"",
    num_telephone:"",
    modepasse:""
})
const handleRegister=(e)=>{
  e.preventDefault()
dispatch(register(client,history))
}

const handleChange=(e)=>{
  setClient({...client,[e.target.name]:e.target.value})
  dispatch(videErrors())
}
    return (


      <div className="registration-form">
     {
       errors && errors.map(el=><Error error={el} />)
    }
       <p> Inscrivez-Vous</p>
       <form onSubmit={handleRegister} >
      <div className="form-group">
        
        <input type="text" className="form-control item" id="username" placeholder="Nom" name="nom" onChange={handleChange}/>
      </div>
      <div className="form-group">
        <input type="password" className="form-control item" id="password" placeholder="Mot de passe" name="motdepasse" onChange={handleChange}/>
      </div>
      <div className="form-group">
        <input type="text" className="form-control item" id="email" placeholder="E-mail" name="email" onChange={handleChange} />
      </div>
      <div className="form-group">
        <input type="text" className="form-control item" id="phone-number" placeholder="Numéro de téléphone" name="num_telephone" onChange={handleChange}/>
      </div>
      <div className="form-group">
        <input type="text" className="form-control item" id="birth-date" placeholder="Nom de votre société" name="nom_societe" onChange={handleChange}/>
      </div>
      <div className="form-group">
        <Button type="submit" className="btn btn-block create-account" >Créer votre compte</Button>
      </div>
      </form>
    </div>
   
  
    )
}
