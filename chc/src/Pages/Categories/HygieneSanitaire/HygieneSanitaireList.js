import React,{useEffect}  from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { get_produits } from '../../../Redux/Actions/produitsActions'
import HygienedesSanitaires from './HygienedesSanitaires'
import '../categorielist.css'

const HygieneSanitaireList = () => {


    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(get_produits())
  }, [])


    const Produits = useSelector(state=>state.produitsReducers.produits)


    return (
        <div className="produitList">
            {
                Produits.map((el,i)=> el.categories === 'HygienedesSanitaires'? 
                <HygienedesSanitaires Produits={el} key={el._id}/> : null
                )
            }
        </div>
    )
}

export default HygieneSanitaireList
