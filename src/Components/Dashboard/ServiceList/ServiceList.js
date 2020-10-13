import React from 'react';
import DashboardNav from '../DashboardNav/DashboardNav';
import SideMenu from '../SideMenu/SideMenu';

const ServiceList = () => {
    return (
        <section>
            <DashboardNav></DashboardNav>
            <div className="row">
                <div className="col-md-2">
                    <SideMenu></SideMenu>
                </div>
                <div className="col-md-10" style={{ backgroundColor: '#F4F7FC', paddingBottom: '13%' }}>
                    <h2>Service list page</h2>
                </div>
            </div>
        </section>
    );
};

export default ServiceList;