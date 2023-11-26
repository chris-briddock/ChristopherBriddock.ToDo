import { Nav, Navbar, Container }  from 'react-bootstrap';

const Header: React.FC = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" data-bs-theme="dark" data-testid="navbar">
      <Container>
        <Navbar.Brand href="#home" data-testid="navbar-brand">To Do Application</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link data-testid="home-link" href="/">Home</Nav.Link>
            <Nav.Link data-testid="about-link" href="/About">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;