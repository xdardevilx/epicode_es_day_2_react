import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown } from "react-bootstrap";
import { CiShop } from "react-icons/ci";
function MyNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary container-fluid">
      <Container>
        <Navbar.Brand href="#home">
          <strong>Gigi</strong> LIBRAIO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex align-items-center ">
            <CiShop size={30} />
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
            <NavDropdown title="Generi" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Tutti</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="#action/3.1"
                onClick={() => console.log("ciao")}>
                Fantasy
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.2"
                onClick={() => console.log("ciao")}>
                Horror
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.3"
                onClick={() => console.log("ciao")}>
                SciFi
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.4"
                onClick={() => console.log("ciao")}>
                History
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.4"
                onClick={() => console.log("ciao")}>
                Romance
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
