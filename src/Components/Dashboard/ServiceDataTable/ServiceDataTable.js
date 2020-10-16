import React from 'react';
import { useState } from 'react';
import './ServiceDataTable.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal } from 'react-bootstrap';
import logo from '../../../images/logos/logo.png';

const ServiceDataTable = ({ order, filterOrders }) => {
    const [status, setStatus] = useState({});
    const handleStatusChange = (e) => {
        const newStatus = e.target.value;
        fetch(`https://young-shore-62919.herokuapp.com/updateStatus?id=` + order._id, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: newStatus })
        })
            .then(res => res.json())
            .then(data => {
                alert('Status updated')
            })
    }

    // delete clients order
    const [showDelete, setShowDelete] = useState(false);
    const handleDeleteHide = () => setShowDelete(false);
    const handleDeleteShow = () => setShowDelete(true);

    const handleDeleteOrder = () => {
        fetch('https://young-shore-62919.herokuapp.com/deleteOrder?id=' + order._id, {
            method: 'DELETE',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setShowDelete(false);
                    filterOrders(order._id);
                }
            })
    }
    return (
        <>
            <tr>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.service}</td>
                <td>{order.projectDetails}</td>
                <td>
                    <>
                        <select onChange={handleStatusChange} className={`status color-${order.status}`}>
                            {
                                order.status === "Panding" &&
                                <>
                                    <option selected value={order.status}>{order.status}</option>
                                    <option value="On-going">On going</option>
                                    <option value="Done">Done</option>
                                </>
                            }
                            {
                                order.status === "On-going" &&
                                <>
                                    <option selected value={order.status}>{order.status}</option>
                                    <option value="Panding">Panding</option>
                                    <option value="Done">Done</option>
                                </>
                            }
                            {
                                order.status === "Done" &&
                                <>
                                    <option selected value={order.status}>{order.status}</option>
                                    <option value="Panding">Panding</option>
                                    <option value="On-going">On going</option>
                                </>
                            }

                        </select>
                    </>
                </td>
                <td className="text-center"><button className="btn btn-danger" onClick={handleDeleteShow}><FontAwesomeIcon className="delete" icon={faTrashAlt} /></button></td>
            </tr>

            <Modal show={showDelete} onHide={handleDeleteHide} className="mt-5 p-2">
                <Modal.Header closeButton>
                    <Modal.Title className="modal-logo"> <img style={{ height: '50px' }} src={logo} alt="" /> </Modal.Title>
                </Modal.Header>
                <Modal.Body> <h3 className="text-danger text-center">Are you sure to delete <br /> clients order...???</h3> </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleDeleteOrder}> Confirm Delete </Button>
                    <Button variant="secondary" onClick={handleDeleteHide}> Cancel </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ServiceDataTable;