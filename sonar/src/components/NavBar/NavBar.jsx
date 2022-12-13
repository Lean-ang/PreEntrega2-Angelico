import Container from 'react-bootstrap/Container';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import CardWidget from '../CartWidget/CartWidget';
import './styles.css'
const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container fluid>
    <NavbarBrand className='logo'><h3>Sonar</h3></NavbarBrand>
    <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse>
        <Nav className="me-auto my-2 my-lg-0 botones">
          <NavLink 
               className={ ( {isActive} )=> isActive ? 'btn' : 'btn'} 
                to="/node_modules"
                >
                         Inicio
          </NavLink>
          <NavLink 
               className={ ( {isActive} )=> isActive ? 'btn btn' : 'btn btn'} 
                to="/categoria/iluminacion"
                >
                         Iluminacion
          </NavLink>
          <NavLink 
                className={ ( {isActive} )=> isActive ? 'btn btn' : 'btn btn' } 
                to="/categoria/sonido"
                >
                         Sonido 
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
