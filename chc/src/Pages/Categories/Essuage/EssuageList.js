import React,{useEffect}  from 'react'
import {useSelector,useDispatch} from 'react-redux'
import EssuyageetJetable from './EssuyageetJetable'
import { get_produits } from '../../../Redux/Actions/produitsActions'
import '../categorielist.css'

const EssuageList = () => {


    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(get_produits())
  }, [])


    const Produits = useSelector(state=>state.produitsReducers.produits)


    return (
        <div className="produitList">
            {
                Produits.map((el,i)=> el.categories === 'EssuyageetJetable'? 
                <EssuyageetJetable Produits={el} key={el._id}/> : null
                )
            }
        </div>
    )
}

export default EssuageList
