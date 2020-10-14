import React from 'react';
import AddService from '../AddService/AddService';
import DashboardNav from '../DashboardNav/DashboardNav';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ServiceList from '../ServiceList/ServiceList';
import SideMenu from '../SideMenu/SideMenu';

const Dashboard = () => {
    document.title = 'Creative-agency | dashboard'
    return (
        <>
        <ServiceList></ServiceList>
        </>
    );
};

export default Dashboard;