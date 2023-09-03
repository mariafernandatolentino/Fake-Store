import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar () {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Fake Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavDropdown title="Categorias" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Eletrônicos</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Vestuário
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Jóias
                </NavDropdown.Item>
              </NavDropdown>
            
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Pesquisar produto"
                className="me-2"
                aria-label="Pesquisar produto"
              />
              <Button variant="outline-success">Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}