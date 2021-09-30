import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "./logotest.ico";
import img1 from "../../Components/assets/image1.jpg";
import img2 from "../../Components/assets/image2.jpg";
import img3 from "../../Components/assets/image3.jpg";
import { logout } from "../../Redux/Actions/clientActions";
import {removeFromCart} from "../../Redux/Actions/produitsActions"
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { Button, Dropdown, Badge,Nav ,NavDropdown,Navbar,Container} from "react-bootstrap";
import "./home.css";

export default function Home() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.clientReducers.isAuth);
  const panier = useSelector(state => state.produitsReducers.paniers)
  const produits = useSelector(state => state.produitsReducers.produits)
  
  const [search,setSearch] = useState("")

  return (
   
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="navhome">
    <Container>
    <Navbar.Brand href="#home" aria-controls="responsive-navbar-nav">
    <Link to="/"> <img src={logo} style={{
                width: '106%',
                height: '112%',
                marginTop: '-3px',
                boxShadow: '0 0 30px #032c55',
                borderRadius: '31px',
            
            }}  /></Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#features" > <Link to="/">Acceuil</Link></Nav.Link>
        <Nav.Link href="#features"> <Link to="/services">Services</Link></Nav.Link>
          <NavDropdown title="Produits" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1"> <Link to="/categories">Categories</Link></NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2"><Link to="/listeproduits">Tous les produits</Link></NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#pricing"><Link to="/contact">Contact</Link></Nav.Link>
        <form className="form-inline mr-auto" target="_self">
              <div className="form-group">
                <label htmlFor="search-field">
                  <i className="fa fa-search" />
                </label>
                <input
                  className="form-control search-field"
                  placeholder="Rechercher"
                  type="search"
                  name="search"
                  onChange={e=>setSearch(e.target.value)}
                  id="search-field"
                />
                  </div>
            </form>
      </Nav>
      <Nav>
       {/* panier er carte */ }
    { isAuth ?( 
                <Dropdown alignRight>
                <Dropdown.Toggle variant="success">
                  <FaShoppingCart color="white" fontSize="25px" />
                  <Badge>{panier.length}</Badge>
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ minWidth: '270px', position: 'absolute'}}>
              {panier.length > 0 ? (
                <>
                  {panier.map((prod) => (
                    <span className="cartitem" key={prod._id}>
                      <img
                        src={img1}
                        className="cartItemImg"
                        alt={prod.nom}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.nom}</span>
                        <span>{prod.prix} Dt</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick ={()=>dispatch(removeFromCart(prod._id))}
                        
                      />
                    </span>
                  ))}
                  <Link to="/panier">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Aller au panier
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 30 }}>Votre panier est vide!</span>
              )}
            </Dropdown.Menu>
              </Dropdown> ):
              (
                <Dropdown alignRight>
                <Dropdown.Toggle variant="success">
               <FaShoppingCart color="white" fontSize="25px" />
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ minWidth: 370 }}>
                  Pour passer une commande veuillez vous connectez ou bien Inscrivez-Vous
                <Button style={{ width: "93%", margin: "0 10px",backgroundColor:"ButtonHighlight" }}>
                <Link to="/login">Se connecter</Link>
                        </Button>
                        <Button style={{ width: "93%", margin: "0 10px" ,backgroundColor:"ButtonHighlight" }}>
                        <Link to="/inscri">S'inscrire</Link>
                        </Button>

                </Dropdown.Menu>
              </Dropdown>
              )

                }

                {isAuth ? (
                  <span className="navbar-text">
                    <a href="#" className="login">
                      <Link to="/" onClick={() => dispatch(logout())}>
                        Quitter
                      </Link>
                    </a>

                   <a href="#" className="">
                     <Link to="/profil">
                       Compte
                     </Link>
                   </a>
                 </span>
                ) : (
                  <div className="nav-list">
                    <span className="navbar-text">
                      {" "}
                      <a href="#" className="login">
                        <Link to="/login">Se connecter</Link>
                      </a>
                      <a
                        className="btn btn-light action-button"
                        role="button"
                        href="#"
                      >
                        <Link to="/inscri">S'inscrire</Link>
                      </a>
                    </span>
                  </div>
                )}
      
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>

   
    //<div>
    //  {
    /* <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
        <div className="container">
          <Link to='/'>
          <a className="navbar-brand" href="#">
          <img src={logo} style={{    width: '114%', height: '128%', margin: '-2px'}}  />
          </a>
          </Link>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navcol-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="nav navbar-nav">
              <li className="nav-item" role="presentation">
                <a className="nav-link active" href="#">
                  <Link to="/">Acceuil</Link>
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link active" href="#">
                  <Link to="/services">Services</Link>
                </a>
              </li>
              <li className="dropdown">
                <a
                  className="dropdown-toggle nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  aria-expanded="false"
                  href="#"
                >
                  Produits{" "}
                </a>
                <div className="dropdown-menu" role="menu">
                  <a className="dropdown-item" role="presentation" href="#">
                    <Link to="/categories">Categories</Link>
                  </a>
                  <a className="dropdown-item" role="presentation" href="#">
                    <Link to="/listeproduits">Tous les produits</Link>
                  </a>
                  <a className="dropdown-item" role="presentation" href="#">
                    <Link to="/essuyageetjetable"> EssuyageetJetable</Link>
                  </a>
                  <a className="dropdown-item" role="presentation" href="#">
                    <Link to="/hygienedessanitaires">
                      {" "}
                      HygienedesSanitaires
                    </Link>
                  </a>
                  <a className="dropdown-item" role="presentation" href="#">
                    <Link to="/hygienedessols"> HygienedesSols</Link>
                  </a>
                  <a className="dropdown-item" role="presentation" href="#">
                    <Link to="/hygienedubebe"> HygieneduBebe</Link>
                  </a>
                  <a className="dropdown-item" role="presentation" href="#">
                    <Link to="/hygienedulinges"> HygieneduLinges</Link>
                  </a>
                  <a className="dropdown-item" role="presentation" href="#">
                    <Link to="/hygienefemenine"> HygieneFemenine</Link>
                  </a>
                  <a className="dropdown-item" role="presentation" href="#">
                    <Link to="/protectionpersonel"> ProtectionPersonel</Link>
                  </a>
                </div>
              </li>
              <li className="nav-item" role="presentation">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>

            <form className="form-inline mr-auto" target="_self">
              <div className="form-group">
                <label htmlFor="search-field">
                  <i className="fa fa-search" />
                </label>
                <input
                  className="form-control search-field"
                  type="search"
                  name="search"
                  id="search-field"
                />
              </div>
            </form>
// {/* panier er carte */
    //{/* }
    //{ isAuth ?( */}
    //             <Dropdown alignRight>
    //             <Dropdown.Toggle variant="success">
    //               <FaShoppingCart color="white" fontSize="25px" />
    //               <Badge>0</Badge>
    //             </Dropdown.Toggle>

    //             <Dropdown.Menu style={{ minWidth: 370 }}>

    //                     <span className="cartitem" >
    //                       <img
    //                         src=""
    //                         className="cartItemImg"
    //                         alt=""
    //                       />
    //                       <div className="cartItemDetail">
    //                         <span>nom</span>
    //                         <span>prix DT</span>
    //                       </div>
    //                       <AiFillDelete
    //                         fontSize="20px"
    //                         style={{ cursor: "pointer" }}

    //                       />
    //                     </span>

    //                   <Link to="/panier">
    //                     <Button style={{ width: "95%", margin: "0 10px" }}>
    //                       Panier
    //                     </Button>
    //                   </Link>

    //                 <span style={{ padding: 10 }}>Votre panier est vide !</span>

    //             </Dropdown.Menu>
    //           </Dropdown> ):
    //           (
    //             <Dropdown alignRight>
    //             <Dropdown.Toggle variant="success">
    //            <FaShoppingCart color="white" fontSize="25px" />
    //             </Dropdown.Toggle>

    //             <Dropdown.Menu style={{ minWidth: 370 }}>
    //               Pour passer une commande veuillez vous connectez ou bien Inscrivez-Vous
    //             <Button style={{ width: "93%", margin: "0 10px",backgroundColor:"ButtonHighlight" }}>
    //             <Link to="/login">Se connecter</Link>
    //                     </Button>
    //                     <Button style={{ width: "93%", margin: "0 10px" ,backgroundColor:"ButtonHighlight" }}>
    //                     <Link to="/inscri">S'inscrire</Link>
    //                     </Button>

    //             </Dropdown.Menu>
    //           </Dropdown>
    //           )

    //             }

    //             {isAuth ? (
    //               <span className="navbar-text">
    //                 <a href="#" className="login">
    //                   <Link to="/" onClick={() => dispatch(logout())}>
    //                     Quitter
    //                   </Link>
    //                 </a>
    //               </span>
    //             ) : (
    //               <div className="nav-list">
    //                 <span className="navbar-text">
    //                   {" "}
    //                   <a href="#" className="login">
    //                     <Link to="/login">Se connecter</Link>
    //                   </a>
    //                   <a
    //                     className="btn btn-light action-button"
    //                     role="button"
    //                     href="#"
    //                   >
    //                     <Link to="/inscri">S'inscrire</Link>
    //                   </a>
    //                 </span>
    //               </div>
    //             )}
    //           </div>
    //         </div>
    // </nav>

    //   </div>
  );
}
