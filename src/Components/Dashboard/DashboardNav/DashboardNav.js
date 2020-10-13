import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'
const DashboardNav = () => {
    return (
        <Navbar bg="white" variant="light">
            <Navbar.Brand className="ml-2" href="#home"> <Link to="/home"><img style={{ height: '50px' }} src={logo} alt="" /></Link> </Navbar.Brand>
            <Nav className="ml-auto">
                <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="mr-5">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>
    );
};

export default DashboardNav;