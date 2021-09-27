import React from "react";
import {Navbar, Container,NavDropdown,Nav} from 'react-bootstrap'
import { Link } from "react-router-dom";
import inscri from '../assets/inscri.jpg'
import logo from '../assets/chc.jpg'
import connect from '../assets/connect.png'
import './navbar.css'

const NavBar =()=> {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Link to='/' ><img className="imglogo" src={logo} /></Link>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Link to='/'><Nav.Link href="#features">Acceuil</Nav.Link></Link>
       <Link to='/service'> <Nav.Link href="#pricing">Services</Nav.Link></Link>
        <Link to='/Categories'><NavDropdown title="Produits" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Catégories</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown></Link>
        <Link to='/contact'> <Nav.Link href="#pricing">Contact</Nav.Link></Link>
      </Nav>
      
      <Nav>
        
        <Link to='/profileAdmin'><Nav.Link href="#features">Profile</Nav.Link></Link>
        <Link to='/login'><Nav.Link href="#deets">Se connecter</Nav.Link></Link>
        <Link to='/inscri'><Nav.Link eventKey={2} href="#memes">
          S'inscrire
        </Nav.Link></Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavBar