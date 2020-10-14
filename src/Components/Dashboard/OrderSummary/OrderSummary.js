import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import DashboardNav from '../DashboardNav/DashboardNav';
import OrderSummaryCard from '../OrderSummaryCard/OrderSummaryCard';
import SideMenu from '../SideMenu/SideMenu';
const OrderSummary = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [orderSummary, setOrderSummary] = useState([]);
    useEffect(() => {
        // fetch('http://localhost:5000/userOrderSummary?email=' + loggedInUser.email)
        fetch('http://localhost:5000/userOrderSummary')
        .then(res => res.json())
        .then(data=> setOrderSummary(data))
    }, [])
    console.log(orderSummary)
    return (
        <section>
            <DashboardNav></DashboardNav>
            <div className="row">
                <div className="col-md-2">
                    <SideMenu></SideMenu>
                </div>
                <div className="col-md-10" style={{ backgroundColor: '#F4F7FC', paddingBottom: '13%' }}>
                    <h2>Services List</h2>
                    <div className="row m-3">
                       {
                           orderSummary.map(data=> <OrderSummaryCard order={data}></OrderSummaryCard>)
                       }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderSummary;