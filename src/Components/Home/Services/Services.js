import React, { useEffect, useState } from 'react';
import ServiceData from '../ServiceData/ServiceData';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/loadService')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <serction className="Services">
            <div className="container mt-5">
                <h2 className="text-center font-weight-bold pb-5">Provide awesome <span className="brand-text">services</span> </h2>
                <div className="row justify-content-center">
                    {
                        services.map(data => <ServiceData service={data}></ServiceData>)
                    }
                </div>
            </div>
        </serction>
    );
};

export default Services;