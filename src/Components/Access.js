import React from 'react'
import {Navbar,Nav,Container,Offcanvas,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Filtred from './Filtred'

function Access() {
  return (
    <div><Navbar bg="light" expand={false}>
    <Container fluid>
      <Navbar.Brand href="#">WELLCOME</Navbar.Brand>
      <Navbar.Toggle aria-controls="offcanvasNavbar" />
      <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel">NAVBAR</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Link to ="/">  Home</Link>
            <Link to ="/Addtask">  Add Task</Link>
            <Link to ="/Editask">  Edit task</Link>
            <NavDropdown title="FITRED" id="offcanvasNavbarDropdown">
              <Link to="/Filtre"><NavDropdown.Item href="#action3" onClick={Filtred('IS DONE')}>IS DONE</NavDropdown.Item></Link> 
              <Link to="/Filtre"><NavDropdown.Item href="#action4" onClick={Filtred('IS NOT DONE')}>IS NOT DONE</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              
            </NavDropdown>
          </Nav>
          
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
    </div>
  )
}

export default Access