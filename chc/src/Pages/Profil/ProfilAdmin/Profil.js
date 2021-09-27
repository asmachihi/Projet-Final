import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { current, update_client } from "../../../Redux/Actions/clientActions";
import {avatar} from '../../../Components/assets/avatar.png'
import "./profil.css";

export default function Profil() {
  const clients = useSelector(state => state.clientReducers.clients);
   const dispatch = useDispatch()
 
   useEffect(() => {
     dispatch(current())
   }, [])

  const [client, setClient] = useState({
    nom: "",
    prénom:"",
    email: "",
    nom_societe: "",
    num_telephone: "",
    
  });

  const handleChange = (e) => {
    setClient({
       ...client, [e.target.name]: e.target.value
       });
  };

  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            />
            <span className="font-weight-bold">{clients && clients.nom}</span>
            <span className="text-black-50">{clients && clients.email}</span>
            <span> </span>
          </div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Modifier vos informations</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <label className="labels">Nom</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="nom"
                  defaultValue={clients.nom}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label className="labels">Prénom</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="prénom"
                  defaultValue={clients.prénom}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label className="labels">Numéro de télèphone</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="numéro de téléèphone"
                  defaultValue={clients.num_telephone}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Adresse E-mail </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="email"
                  defaultValue={clients.email}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Nom de la sociéte</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="nom de la société"
                  defaultValue={clients.nom_societe}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mt-5 text-center">
              <button className="btn btn-primary profile-button" type="submit" onClick={()=>dispatch(update_client(clients._id,client))}>
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
