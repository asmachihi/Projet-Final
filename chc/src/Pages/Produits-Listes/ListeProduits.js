import React,{useEffect, useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import CardProduits from '../Produits-Card/CardProduits'
import Panier from '../Panier/Panier' 
import { addToCart, get_produits } from '../../Redux/Actions/produitsActions'
import './listeProduits.css'

export default function ListeProduits() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(get_produits())
}, [])

    const produit = useSelector(state=>state.produitsReducers.produits)


    return (
        <div className="produitList">
           
            {
                produit.map(product=><CardProduits product={product} key={product._id}/>)
            }
        </div>
    )
}

