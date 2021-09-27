import { Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Contact from "./Pages/Contact/Contact";
import ListeProduits from "./Pages/Produits-Listes/ListeProduits";
import Login from "./Pages/Login/Login";
import Inscri from "./Pages/Inscri/Inscri";
import Partenaires from "./Components/Partenaires/Partenaires";
import Profil from "./Pages/Profil/ProfilAdmin/Profil";
import Categories from "./Pages/Categories/Categories";
import Carousel from "./Components/Carousel/Carousel";
import {useDispatch} from 'react-redux'
import { current } from "./Redux/Actions/clientActions";
import Errors from './Pages/Errors'
import {useEffect} from 'react'
import PrivateRoute from "./Router/PrivateRoute";
import EssuageList from "./Pages/Categories/Essuage/EssuageList"
import HygieneBebeList from "./Pages/Categories/HygieneBebe/HygieneBebeList"
import HygieneFemenineList from "./Pages/Categories/HygieneFemenine/HygieneFeminineList";
import ProtectionPersonelList from "./Pages/Categories/ProtectionPersonel/ProtectionPersoneList";
import HygieneSolList from "./Pages/Categories/HygieneSols/HygieneSolList";
import HygieneSanitaireList from "./Pages/Categories/HygieneSanitaire/HygieneSanitaireList";
import HygieneLingeList from "./Pages/Categories/HygieneLinges/HygieneLingeList";
import { Panier } from "./Pages/Panier/Panier";
import { Presentation } from "./Components/Présentation/Presentation";




function App() {
  const dispatch = useDispatch()
  useEffect(() => {
 dispatch(current)
  }, [])

   return (
    <div className="App">
      {/* <NavBar /> */}
      <Home/>
      <Carousel/>
          <Switch>
        {/* <Route exact path="/" component={Home}/> */}
        <Route exact path='/' component={Presentation}/>
        <Route path="/Categories" component={Categories}/>
        <Route path="/essuyageetjetable" component={EssuageList} />
        <Route path="/hygienedessanitaires" component={HygieneSanitaireList} />
        <Route path="/hygienedessols" component={HygieneSolList} />
        <Route path="/hygienedubebe" component={HygieneBebeList} />
        <Route path="/hygienedulinges" component={HygieneLingeList} />
        <Route path="/hygienefemenine" component={HygieneFemenineList} />
        <Route path="/protectionpersonel" component={ProtectionPersonelList} />
        <Route path="/listeproduits" component={ListeProduits}/>
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login}/>
        <Route path="/inscri" component={Inscri}/>
        <PrivateRoute path="/profil" component={Profil} />
        <Route path='/panier' component={Panier}/>
        <Route path='/*' component={Errors} />
      </Switch>
      <Partenaires/>
      <Footer />
    </div>
  );
}

export default App;
