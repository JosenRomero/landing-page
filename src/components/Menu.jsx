import { Navbar, Nav, Container } from 'react-bootstrap'

const Menu = () => {
  return (
    <Navbar expand="lg" fixed="top" bg={'light'} variant={'light'} collapseOnSelect>
      <Container fluid>
        <Navbar.Brand href="/">Landing Page</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/#home" eventKey={1}>Home</Nav.Link>
            <Nav.Link href="/#about" eventKey={2}>About</Nav.Link>
            <Nav.Link href="/#features" eventKey={3}>Features</Nav.Link>
            <Nav.Link href="/#services" eventKey={4}>Services</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu
