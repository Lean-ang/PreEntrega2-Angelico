import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CardWidget from '../CartWidget/CartWidget';
import '../NavBar/navbar.css'
const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#">Sonar</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">Sonido</Nav.Link>
          <Nav.Link href="#action2">Iluminación</Nav.Link>
        </Nav>
        <div className="d-flex">
            <Nav.Link href="#action2"><CardWidget/></Nav.Link>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    
  
  )
}

export default NavBar
