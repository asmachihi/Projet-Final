import React,{useEffect}  from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { get_produits } from '../../../Redux/Actions/produitsActions'
import HygieneFemenine from './HygieneFemenine'
import '../categorielist.css'

const HygieneFemenineList = () => {


    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(get_produits())
  }, [])


    const Produits = useSelector(state=>state.produitsReducers.produits)


    return (
        <div className="produitList">
            {
                Produits.map((el,i)=> el.categories === 'HygieneFemenine'? 
                <HygieneFemenine Produits={el} key={el._id}/> : null
                )
            }
        </div>
    )
}

export default HygieneFemenineList
