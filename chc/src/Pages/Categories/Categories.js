import React from 'react'
import {Button} from 'react-bootstrap'
import liquide from '../../Components/assets/liquidevaisselle.jpg'
import desinfectant from '../../Components/assets/desinfectant.jpg'
import feminin from '../../Components/assets/vieintime.jpg'
import soletsurface from '../../Components/assets/soletsurface.jpg'
import protection from '../../Components/assets/desinfectant.jpg'
import multiusage from '../../Components/assets/multiusage.jpg'
import linge from '../../Components/assets/linge.jpg'
import sanitaire from '../../Components/assets/sanitaire.jpg'
import bebe from '../../Components/assets/bebe.jpg'
import './categories.css'
import { Link } from 'react-router-dom'

const Categories=({}) =>{
    return (
  
<>
    <ul className="cards">
    <li>
      <a href className="card">
        <img src={feminin} className="card__image" alt="" />
        <div className="card__overlay">
          <div className="card__header">                 
            
            <div className="card__header-text">
              <h3 className="card__title">Hygiene Femenine</h3>            
            </div>
          </div>
          <p className="card__description">Nettoyer la vaisselle, à la main est une tâche quotidienne. Un bon nettoyant vaisselle manuel...</p>
         <Link to ='/hygienefemenine'> <Button className="button" variant="primary">Découvrir</Button></Link>
        </div>
      </a>      
    </li>
  
    <li>
      <a href className="card">
        <img src={soletsurface} className="card__image" alt="" />
        <div className="card__overlay">
          <div className="card__header">
            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
            
            <div className="card__header-text">
              <h3 className="card__title">Essuyage et Jetable</h3>            
            </div>
          </div>
          <p className="card__description">Un simple nettoyage de votre maison élimine la poussière, les taches de graisse et autres saletés.. </p>
          <Link to='/essuyageetjetable'><Button className="button" variant="primary">Découvrir</Button></Link>
        </div>
      </a>      
    </li>
 
    <li>
      <a href className="card">
        <img src={protection}className="card__image" alt="" />
        <div className="card__overlay">
          <div className="card__header">
            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
            
            <div className="card__header-text">
              <h3 className="card__title">Protection Personel</h3>            
            </div>
          </div>
          <p className="card__description">Leader sur le marché tunisien des produits sols et surfaces, Judy vous propose une large gamme...  </p>
          <Link to='/protectionpersonel'><Button className="button" variant="primary">Découvrir</Button></Link>
        </div>
      </a>      
    </li>

    <li>
      <a href className="card">
        <img src={multiusage} className="card__image" alt="" />
        <div className="card__overlay">
          <div className="card__header">
            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
            
            <div className="card__header-text">
              <h3 className="card__title">Hygiene des Sols et Vaiselles</h3>            
            </div>
          </div>
          <p className="card__description"> N°1 en Tunisie, des détergents liquides tout usage, Judy Nettoyant est un produit qui nettoie... </p>
          <Link to='/hygienedessols'><Button className="button" variant="primary">Découvrir</Button></Link>
        </div>
      </a>      
    </li>
 
    <li>
      <a href className="card">
        <img src={linge} className="card__image" alt="" />
        <div className="card__overlay">
          <div className="card__header">
            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
            
            <div className="card__header-text">
              <h3 className="card__title">Hygiene du Linges</h3>            
            </div>
          </div>
          <p className="card__description"> N°1 en Tunisie, des détergents liquides tout usage, Judy Nettoyant est un produit qui nettoie... </p>
         <Link to='/hygienedulinges'> <Button className="button" variant="primary">Découvrir</Button></Link>
        </div>
      </a>      
    </li>
 
    <li>
      <a href className="card">
        <img src={sanitaire} className="card__image" alt="" />
        <div className="card__overlay">
          <div className="card__header">
            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
            
            <div className="card__header-text">
              <h3 className="card__title">Hygiene des Sanitaires</h3>            
            </div>
          </div>
          <p className="card__description">Pour un confort optimal à la maison, l'hygiène des sanitaires est très importante... </p>
         <Link to='/hygienedessanitaires'> <Button className="button" variant="primary">Découvrir</Button></Link>
        </div>
      </a>      
    </li>
    <li>
      <a href className="card">
        <img src={bebe} className="card__image" alt="" />
        <div className="card__overlay">
          <div className="card__header">
            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
            
            <div className="card__header-text">
              <h3 className="card__title">Hygiene du Bébé</h3>            
            </div>
          </div>
          <p className="card__description">Pour un confort optimal à la maison, l'hygiène des sanitaires est très importante... </p>
         <Link to='/hygienedubebe'> <Button className="button" variant="primary">Découvrir</Button></Link>
        </div>
      </a>      
    </li>
  </ul>
  </>
     
    )
}


export default Categories