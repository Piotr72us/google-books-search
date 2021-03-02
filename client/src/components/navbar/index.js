import { Navbar, Nav } from "react-bootstrap";
import "./index.css";

function NavbarElement() {
  return (
    <Navbar expand="lg" className="navBgColor">
      <Navbar.Brand>Google Books</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Search</Nav.Link>
          <Nav.Link href="/saved">Saved</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarElement;