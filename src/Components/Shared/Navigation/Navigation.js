import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import logo from './../../../images/logos/logo.png'
const Navigation = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <div className="container">
            <Navbar bg="" expand="lg">
                <Navbar.Brand href="#home"> <Link to="/home"><img style={{ height: '50px' }} src={logo} alt="" /></Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className="text-decoration-none nav-link font-weight-bold mr-3" to="/home">Home</Link>
                        <Link className="text-decoration-none nav-link font-weight-bold mr-3" to="/portfolio">Our Portfolio</Link>
                        <Link className="text-decoration-none nav-link font-weight-bold mr-3" to="/team">Our Team</Link>
                        <Link className="text-decoration-none nav-link font-weight-bold mr-3" to="/contact">Contact us</Link>
                        <Link className="text-decoration-none nav-link font-weight-bold mr-3" to="/dashboard">Dashboard</Link>
                        {
                            loggedInUser.email ?
                                <Link className="text-decoration-none nav-link font-weight-bold mr-3 default-btn" onClick={() => setLoggedInUser({})} to="/login">Logout</Link>
                                :
                                <Link className="text-decoration-none nav-link font-weight-bold mr-3 default-btn" to="/login">Login</Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navigation;