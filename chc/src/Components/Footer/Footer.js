import React from "react";
import {Link} from 'react-router-dom'
import logo from '../assets/logotest.ico'
import {AiFillPhone} from 'react-icons/ai'
import "./footer.css";

export default function Footer() {
  return (
    <div>
    <footer className="container-fluid bg-grey py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6 ">
                <div className="logo-part">
                <Link to='/'> <img src={logo} className="w-50 logo-footer" /></Link>
                  <p>16 Rue Sidi Ahmed Jlidi</p>
                  <p>Cité Ettahrir Supérieure Tunis</p>
                  <p><AiFillPhone/>Tél: +216 55 25 19 49</p>
                </div>
              </div>
              <div className="col-md-6 px-4">
                <h6> Notre Mission</h6>
                <p>Notre but est de vous satisfaire.</p>
               <Link to='/services'> <a href="#" className="btn-footer"> Plus de détails </a> </Link><br />
               <Link to='/contact'>  <a href="#" className="btn-footer"> Nous contacter</a></Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6 px-4">
                <h6> Découvrez notre société</h6>
                {/* <div className="row ">
                  <div className="col-md-6"> */}
                    <ul>
                      <li><Link to='/'> <a href="#">Acceuil</a></Link> </li>
                      <li><Link to='/services'> <a href="#"> Services</a></Link> </li>
                      <li> <Link to='/Categories'><a href="#"> Produits</a></Link> </li>
                      <li><Link to='/contact'> <a href="#"> Contact</a> </Link></li>
                      <li><Link to='/login'> <a href="#"> Se connecter</a></Link> </li>
                      <li> <Link to='/inscri'><a href="#"> S'inscrire</a></Link> </li>
                    </ul>
                  </div>
               
                {/* </div>
              </div> */}
              </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}
