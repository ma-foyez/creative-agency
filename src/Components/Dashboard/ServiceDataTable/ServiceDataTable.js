import React from 'react';
import { useState } from 'react';
import './ServiceDataTable.css';
const ServiceDataTable = ({ order }) => {
    const [status, setStatus] = useState({});
    const handleStatusChange = (e) => {
        const newStatus = e.target.value;
        fetch(`https://creatives-agency.herokuapp.com/updateStatus?id=` + order._id, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: newStatus })
        })
            .then(res => res.json())
            .then(data => {
                alert('Update status')
            })
    }
    return (
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
        </tr>
    );
};

export default ServiceDataTable;