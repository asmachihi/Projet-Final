import React,{useEffect}  from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { get_produits } from '../../../Redux/Actions/produitsActions'
import HygieneduBebe from './HygieneduBebe'
import '../categorielist.css'

const HygieneBebeList = () => {


    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(get_produits())
  }, [])


    const Produits = useSelector(state=>state.produitsReducers.produits)


    return (
        <div className="produitList">
            {
                Produits.map((el,i)=> el.categories === 'HygieneduBebe'? 
                <HygieneduBebe Produits={el} key={el._id}/> : null
                )
            }
        </div>
    )
}

export default HygieneBebeList
