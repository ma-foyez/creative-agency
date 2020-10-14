import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import DashboardNav from '../DashboardNav/DashboardNav';
import ServiceDataTable from '../ServiceDataTable/ServiceDataTable';
import SideMenu from '../SideMenu/SideMenu';

const ServiceList = () => {
    const [loadOrders, setLoadOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/loadAllOrders')
            .then(res => res.json())
            .then(data => setLoadOrders(data))
    }, [loadOrders])
    return (
        <section>
            <DashboardNav></DashboardNav>
            <div className="row">
                <div className="col-md-2">
                    <SideMenu></SideMenu>
                </div>
                <div className="col-md-10" style={{ backgroundColor: '#F4F7FC', paddingBottom: '13%' }}>
                    <h2>Services List </h2>
                    <div className="row">
                        <div className="col-md-11">
                            <Table responsive className="bg-white">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email ID</th>
                                        <th>Service</th>
                                        <th>Project Details</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        loadOrders.map(orders => <ServiceDataTable order={orders}></ServiceDataTable>)
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceList;