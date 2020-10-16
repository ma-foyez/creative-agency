import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import DashboardNav from '../DashboardNav/DashboardNav';
import ServiceDataTable from '../ServiceDataTable/ServiceDataTable';
import SideMenu from '../SideMenu/SideMenu';
import * as ReactBootstrap from 'react-bootstrap';
const ServiceList = () => {
    const [loadOrders, setLoadOrders] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch('https://young-shore-62919.herokuapp.com/loadAllOrders')
            .then(res => res.json())
            .then(data => {
                setLoadOrders(data);
                setLoading(true);
            })
    }, [loadOrders]);

    const filterOrders = (id) => {
        const newOrders = loadOrders.filter(orders => orders._id !== id);
        setLoadOrders(newOrders);
    }
    return (
        <section>
            <DashboardNav></DashboardNav>
            <div className="row">
                <div className="col-md-2">
                    <SideMenu></SideMenu>
                </div>
                <div className="col-md-10 dashboard-container">
                    <h2 className="ml-4 pb-2 pt-4 font-weight-bold">Services List</h2>
                    {
                        loading ?
                            <div className="shadow-sm p-3 ml-4 mr-4 mb-5 bg-white rounded">
                                <Table responsive className="table-bordered table-hover">
                                    <thead class="thead-light">
                                        <tr>
                                            <th>Name</th>
                                            <th>Email ID</th>
                                            <th>Service</th>
                                            <th>Project Details</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            loadOrders.map(orders => <ServiceDataTable key={orders._id} order={orders} filterOrders={filterOrders}></ServiceDataTable>)
                                        }
                                    </tbody>
                                </Table>
                            </div> :
                            <div className="text-danger m-5 d-flex align-items-center font-weight-bold">
                                <ReactBootstrap.Spinner animation="border" />
                                <span className="ml-3"> Loading service list...........</span>
                            </div>
                    }

                </div>
            </div>
        </section>
    );
};

export default ServiceList;