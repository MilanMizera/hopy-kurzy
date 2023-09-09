import "./privateHeader.css"
import PrivateOffCanvas from "../privateOffCanvas/PrivateAccSettings"
import PrivateAuthDetails from "../privateAuthDetails/PrivateAuthDetails"
//bootstrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function PrivateHeader() {
  return (
    <>
      {['xxl'].map((expand) => (
        <Navbar id="private-header-background"  key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container id="container-private-header" >
            <Navbar.Brand  id="private-header-brand"href="#">HOPY-KURZY</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link id="private-header-nav-link" href="#action1">Seznam kurzů</Nav.Link>
                  <Nav.Link id="private-header-nav-link" href="#action2">Moje kurzy</Nav.Link>
                </Nav>
                <PrivateAuthDetails></PrivateAuthDetails>
                <PrivateOffCanvas></PrivateOffCanvas>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default PrivateHeader;