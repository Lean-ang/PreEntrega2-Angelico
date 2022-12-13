import Container from 'react-bootstrap/Container';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import CardWidget from '../CartWidget/CartWidget';
import './styles.css'
const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container fluid>
    <NavbarBrand className='logo'>Sonar</NavbarBrand>
    <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse>
        <Nav className="me-auto my-2 my-lg-0">
          <NavLink 
               className={ ( {isActive} )=> isActive ? 'btn btn-success' : 'btn btn-outline-success'} 
                to="/node_modules"
                >
                         Inicio
          </NavLink>
          <NavLink 
               className={ ( {isActive} )=> isActive ? 'btn btn-success' : 'btn btn-outline-success'} 
                to="/categoria/gorra"
                >
                         Sonido
          </NavLink>
          <NavLink 
                className={ ( {isActive} )=> isActive ? 'btn btn-success' : 'btn btn-outline-success'} 
                to="/categoria/remera"
                >
                        Iluminación
                </NavLink>
        </Nav>
        <div className="d-flex">
            <Link to='/cart'><CardWidget/>4</Link>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    
  
  )
}

export default NavBar
