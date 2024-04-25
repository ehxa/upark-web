import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';


function mainNavbar() {
  return (
    <div className='mainNavbar'>
      <div className='home'>
        <Button className='navHome' href=''>Upark</Button>
      </div>
      <div className='pages'>
        <Button className='navButtons' href=''>PARK FACILITIES</Button>
        <Button className='navButtons' href=''>CLIENTS</Button>
        <Button className='navButtons' href=''>TICKETS</Button>
        <Button className='navButtons' href=''>SENSORS AND DEVICES</Button>
      </div>
    </div>
  );
}

export default mainNavbar;