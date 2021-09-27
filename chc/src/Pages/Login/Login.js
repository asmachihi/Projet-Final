import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {login} from '../../Redux/Actions/clientActions'
import './login.css'

export default function Login({history}) {
  const [client, setClient] = useState({
    email:"",
    motdepasse:""
  })
  const dispatch = useDispatch()
  
  const handleChange=(e)=>{
    setClient({...client,[e.target.name]:e.target.value})
  }
  const handleLogin=(e)=>{
    e.preventDefault()
    dispatch(login(client,history))
  }


    return (
        <div className="container">
        <div className="d-flex justify-content-center h-100">
          <div className="card">
            <div className="card-header">
              <h3>Se connecter</h3>
              {/* <div className="d-flex justify-content-end social_icon">
                <span><i className="fab fa-facebook-square" /></span>
                <span><i className="fab fa-google-plus-square" /></span>
                <span><i className="fab fa-twitter-square" /></span>
              </div> */}
            </div>
            <div className="card-body">
              <form className="box"  onSubmit={handleLogin} >
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-user" /></span>
                  </div>
                  <input type="text" className="form-control" placeholder="nom/e-mail" name="email" onChange={handleChange}/>
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-key" /></span>
                  </div>
                  <input type="password" className="form-control" placeholder="mot de passe" name="motdepasse" onChange={handleChange}/>
                </div>
                <div className="row align-items-center remember">
                  <input type="checkbox" />Se souvenir de moi
                </div>
                <div className="form-group">
                  <input type="submit" defaultValue="Login" className="btn float-right login_btn" onClick={handleLogin} />
                </div>
              </form>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                Vous n'avez pas de compte?<Link to='/inscri'>S'inscrire</Link>
              </div>
              <div className="d-flex justify-content-center">
                <a href="#">Mot de passe oublié?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
