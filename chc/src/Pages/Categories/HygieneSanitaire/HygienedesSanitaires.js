import React from 'react'
import {useDispatch} from 'react-redux'
import {Card,Button} from 'react-bootstrap'
import { addToCart } from '../../../Redux/Actions/produitsActions'
import image from '../../../Components/assets/ban4.jpg'
import '../cardcategories.css'

const HygienedesSanitaires=({Produits}) =>{
  const dispatch = useDispatch()
  const addToCartHandler = () =>{
    dispatch(addToCart(Produits._id))
   }
    return (
      
      <div className="Card">
              {/* <Link to={`/${product._id}`}> */}
            <Card style=  {{width: '28rem',color:'rgb(245 246 247)', height: '22rem;'}} >
            <Card.Img variant="top" src={image} className="img" />
              <Card.Body>
                <Card.Title className="titleprod">{Produits.nom}</Card.Title>
                <Card.Text> {Produits.prix}<span>DT</span></Card.Text>
                {/* <Card.Text>{"🌟".repeat(Produits.rate)}</Card.Text> */}
                <Button className="button" variant="primary" onClick={addToCartHandler}>Ajouter au panier</Button>
              </Card.Body>
            </Card>
            {/* </Link> */}
            </div>
            
    )
}


export default HygienedesSanitaires