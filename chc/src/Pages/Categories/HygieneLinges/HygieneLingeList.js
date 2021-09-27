import React,{useEffect}  from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { get_produits } from '../../../Redux/Actions/produitsActions'
import HygieneduLinges from './HygieneduLinges'
import '../categorielist.css'


const HygieneLingeList = () => {


    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(get_produits())
  }, [])


    const Produits = useSelector(state=>state.produitsReducers.produits)


    return (
        <div className="produitList">
            {
                Produits.map((el,i)=> el.categories === 'HygieneduLinges'? 
                <HygieneduLinges Produits={el} key={el._id}/> : null
                )
            }
        </div>
    )
}

export default HygieneLingeList
