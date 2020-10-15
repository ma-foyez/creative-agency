import React, { useContext, useEffect, useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faCoffee, faPlus, faShoppingCart, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import { userContext } from '../../../App';
import './SideMenu.css'
const SideMenu = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        fetch('https://afternoon-journey-45337.herokuapp.com/checkAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data);
            })
    }, []);
    return (
        <Navbar bg="white" expand="lg" className="ml-2">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto flex-column">
                    {
                        !isAdmin && <div>
                            <Link className="text-decoration-none text-secondary font-weight-bold" to="/order"><Nav.Link href="#order"> <FontAwesomeIcon icon={faShoppingCart} /> Order</Nav.Link></Link>
                            <Link className="text-decoration-none text-secondary font-weight-bold" to="/orderSummary"><Nav.Link href="#orderSummary"><FontAwesomeIcon icon={faBriefcase} /> Service List</Nav.Link></Link>
                            <Link className="text-decoration-none text-secondary font-weight-bold" to="/review"><Nav.Link href="#review"> <FontAwesomeIcon icon={faCommentAlt} /> Review</Nav.Link></Link>
                            <Link className="text-decoration-none text-secondary font-weight-bold signout-btn" onClick={()=> setLoggedInUser({})} ><Nav.Link href=""><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Nav.Link></Link>
                        </div>
                    }
                    {
                        isAdmin && <div>
                            <Link className="text-decoration-none text-secondary font-weight-bold" to="/admin/servicelist"><Nav.Link href="#service"><FontAwesomeIcon icon={faBriefcase} /> Service List</Nav.Link></Link>
                            <Link className="text-decoration-none text-secondary font-weight-bold" to="/addService"><Nav.Link href="#addService"> <FontAwesomeIcon icon={faPlus} /> Add Service</Nav.Link></Link>
                            <Link className="text-decoration-none text-secondary font-weight-bold" to="/makeAdmin"><Nav.Link href="#makeAdmin"><FontAwesomeIcon icon={faUserPlus} /> Make Admin</Nav.Link></Link>
                            <Link className="text-decoration-none text-secondary font-weight-bold signout-btn" onClick={()=> setLoggedInUser({})} ><Nav.Link href=""><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Nav.Link></Link>
                        </div>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default SideMenu;