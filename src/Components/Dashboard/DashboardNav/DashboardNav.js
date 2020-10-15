import React, { useContext, useRef, useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import logo from '../../../images/logos/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSignOutAlt, faUserCog } from '@fortawesome/free-solid-svg-icons'
const DashboardNav = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const handleSignOut = () => {
        setLoggedInUser({});
    }
    return (
        <Navbar bg="white" variant="light">
            <Navbar.Brand className="ml-2" href="#home"> <Link to="/home"><img style={{ height: '50px' }} src={logo} alt="" /></Link> </Navbar.Brand>
            <Nav className="ml-auto">
                <NavDropdown title={loggedInUser.name} id="collasible-nav-dropdown" className="mr-5 pr-5">
                    <NavDropdown.Item className="text-center mb-2"><img style={{ height: '60px', width: '60px', borderRadius: '50%' }} src={loggedInUser.photo} alt="" /></NavDropdown.Item>
                    <NavDropdown.Item className="text-center" href="#action/3.1"><Link className="text-decoration-none text-secondary font-weight-bold" to="/home"><FontAwesomeIcon icon={faHome} className="mr-2" /> Home </Link></NavDropdown.Item>
                    <NavDropdown.Item className="text-center" href="#action/3.2"><FontAwesomeIcon icon={faUserCog} className="mr-2" /> Setting</NavDropdown.Item>
                    <NavDropdown.Item className="text-center" href="#action/3.3" onClick={handleSignOut} ><FontAwesomeIcon icon={faSignOutAlt} className="mr-2" /> Logout</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar >
    );
};

export default DashboardNav;