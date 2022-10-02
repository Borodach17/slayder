import React, { Component } from 'react'
import { Container, Navbar, Nav  } from 'react-bootstrap'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import logo from '../img1/logo.png'

import Home from '../Pages/Home'
import Author from '../Pages/Author'
import Prodject from '../Pages/Prodject'
import Price from '../Pages/Price'
import Contacts from '../Pages/Contacts'

export class Header extends Component {
  render() {
    return (
      <>
      <header>
      <Navbar collapseOnSelect expand="md" bg="blue" variant="blue" >
      <Container>
          <Navbar.Brand href="/">
          <img
                      src={logo}
                      height="45"
                      width="80"
                      className="d-inline-block align-top"
                      alt="logo"
                  />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='mr-auto'>
         
          <Nav.Link className="nav"  href="/home">Home</Nav.Link>
          <Nav.Link className="nav"  href="/prodject">ПРОЕКТЫ</Nav.Link>
          <Nav.Link   className="nav" href="/price">УСЛУГИ И ЦЕНЫ</Nav.Link>
          <Nav.Link className="nav" href="/contacts">КОНТАКТЫ</Nav.Link>
          <Nav.Link className="nav" href="/blog">ОБ АВТОРЕ</Nav.Link>
          
      </Nav>

      </Navbar.Collapse>
          </Container>
  </Navbar>     
</header> 
  
  
  <Router >
     <Routes>
     <Route  exact path="/home" element={<Home />}/>
         <Route  exact path="/prodject" element={<Prodject />}/>
         <Route  exact path="/price" element={<Price/>}/>
         <Route exact path="/contacts" element={<Contacts/>}/>
         <Route  exact path="/blog" element={<Author/>}/>
    </Routes>
   </Router>
 </>
     

      
    )
  }
}

export default Header