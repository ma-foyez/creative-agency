import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import OrderSummary from '../OrderSummary/OrderSummary';
import ServiceList from '../ServiceList/ServiceList';

const Dashboard = () => {
    document.title = 'Creative-agency | dashboard'
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        fetch('https://young-shore-62919.herokuapp.com/checkAdmin', {
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
        <>
            {
                isAdmin ? <ServiceList></ServiceList> : <OrderSummary></OrderSummary>
            }
        </>
    );
};

export default Dashboard;