import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NaviBar.css"
import { FaBell } from 'react-icons/fa'; 

const NaviBar = () => {
  return (
    
      <Navbar className='navbar'  expand="lg">
      <Container fluid>
    
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search filter"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          
          </Form>
          < FaBell  className="bell"/>
      </Container>
    </Navbar>
  
  )
}

export default NaviBar
