import React ,{useState} from 'react'
import {Card,Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import image from '../../Components/assets/ban4.jpg'
import { addToCart } from '../../Redux/Actions/produitsActions'
import './cardProduits.css'



const CardProduits=({product,history}) =>{
  const dispatch = useDispatch()
  const [qty,setQty] = useState(0)
  
  // const [panier,setPanier] = useState([])


  
  const addToCartHandler = () =>{
   dispatch(addToCart(product._id))
  }
 
    return (
      
      <div className="Card">
            <Card style=  {{width: '28rem',color:'rgb(245 246 247)', height: '22rem;'}} >
            <Card.Img variant="top" src={image} className="img" />
              <Card.Body>
                <Card.Title className="titleprod">{product.nom}</Card.Title>
                <Card.Text> {product.prix}<span>DT</span></Card.Text>
                <Card.Text>{"🌟".repeat(product.rate)}</Card.Text>
               
                <Button className="button" variant="primary" onClick={addToCartHandler}>Ajouter au panier</Button>
              </Card.Body>
            </Card>
            {/* </Link> */}
            </div>
            
    )
}


export default CardProduits