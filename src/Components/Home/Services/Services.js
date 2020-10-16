import React, { useEffect, useState } from 'react';
import ServiceData from '../ServiceData/ServiceData';
import * as ReactBootstrap from 'react-bootstrap';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        fetch('https://young-shore-62919.herokuapp.com/loadService')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(true);
            })
    }, [])
    return (
        <section className="Services section">
            <div className="container mt-5">
                <h2 className="text-center font-weight-bold pb-5">Provide awesome <span className="brand-text">services</span> </h2>
                <div className="row justify-content-center mb-5">
                    {
                        loading ? services.map(data => <ServiceData key={data._id} service={data}></ServiceData>) :
                            <div className="text-danger m-5 d-flex align-items-center font-weight-bold">
                                <ReactBootstrap.Spinner animation="border" />
                                <span className="ml-3">Loading service...........</span>
                            </div>
                    }

                </div>
            </div>
        </section>
    );
};

export default Services;