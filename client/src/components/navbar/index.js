import { Navbar, Nav } from "react-bootstrap";

function NavbarElement() {
 return(
  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Google Books</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Search</Nav.Link>
      <Nav.Link href="/saved">Saved</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
 )
}

export default NavbarElement;