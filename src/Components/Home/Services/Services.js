import React, { useEffect, useState } from 'react';
import ServiceData from '../ServiceData/ServiceData';
import * as ReactBootstrap from 'react-bootstrap';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        fetch('https://afternoon-journey-45337.herokuapp.com/loadService')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(true);
            })
    }, [])
    return (
        <serction className="Services section">
            <div className="container mt-5">
                <h2 className="text-center font-weight-bold pb-5">Provide awesome <span className="brand-text">services</span> </h2>
                <div className="row justify-content-center mb-5">
                    {
                        loading ? services.map(data => <ServiceData service={data}></ServiceData>) :
                            <div className="text-danger m-5 d-flex align-items-center font-weight-bold">
                                <ReactBootstrap.Spinner animation="border" />
                                <span className="ml-3">Loading service...........</span>
                            </div>
                    }

                </div>
            </div>
        </serction>
    );
};

export default Services;