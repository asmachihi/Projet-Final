import React,{useEffect}  from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { get_produits } from '../../../Redux/Actions/produitsActions'
import ProtectionPersonel from './ProtectionPersonel'
import '../categorielist.css'

const ProtectionPersonelList = () => {


    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(get_produits())
  }, [])


    const Produits = useSelector(state=>state.produitsReducers.produits)


    return (
        <div className="produitList">
            {
                Produits.map((el,i)=> el.categories === 'ProtectionPersonel'? 
                <ProtectionPersonel Produits={el} key={el._id}/> : null
                )
            }
        </div>
    )
}

export default ProtectionPersonelList
