import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';

function mobileNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" className="mobileNavbar">
            <Container>
                <Navbar.Brand href="#home" className='mobileHome'>Upark</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Button className='mobileButtons' href=''>PARK FACILITIES</Button>
                        <Button className='mobileButtons' href=''>CLIENTS</Button>
                        <Button className='mobileButtons' href=''>TICKETS</Button>
                        <Button className='mobileButtons' href=''>SENSORS AND DEVICES</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default mobileNavbar;