import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import DashboardNav from '../DashboardNav/DashboardNav';
import OrderSummaryCard from '../OrderSummaryCard/OrderSummaryCard';
import SideMenu from '../SideMenu/SideMenu';
import * as ReactBootstrap from 'react-bootstrap';
const OrderSummary = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [orderSummary, setOrderSummary] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        fetch('https://young-shore-62919.herokuapp.com/userOrderSummary?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setOrderSummary(data);
                setLoading(true);
            })
    }, [])
    console.log(orderSummary)
    return (
        <section>
            <DashboardNav></DashboardNav>
            <div className="row">
                <div className="col-md-2">
                    <SideMenu></SideMenu>
                </div>
                <div className="col-md-10 dashboard-container">

                    <h2 className="ml-4 pb-2 pt-4 font-weight-bold brand-text">Services List</h2>

                    <h3 className="m-2 text-secondary font-weight-bold">
                        {
                            orderSummary.length > 0 ? <span> your total orders - {orderSummary.length}</span> : <span>You have not yet received any service from us.</span>
                        }
                    </h3>
                    <div className="row justify-content-center">
                        {
                            loading ? orderSummary.map(data => <OrderSummaryCard key={data._id} order={data}></OrderSummaryCard>) :
                                <div className="text-danger m-5 d-flex align-items-center font-weight-bold">
                                    <ReactBootstrap.Spinner animation="border" />
                                    <span className="ml-3"> Loading order summary...........</span>
                                </div>
                        }

                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderSummary;