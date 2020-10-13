import React from 'react';
import {Link} from "react-router-dom";
const ServiceData = ({ service }) => {
    return (
        <div className="col-md-4 text-center">
            <Link to="/order" className="text-decoration-none text-dark">
            <div className="card m-3 shadow p-3 mb-5 bg-white rounded">
                <div className="card-img-top text-center">
                    {
                        service.serviceImage && <img className="w-25" src={`data:image/png;base64,${service.serviceImage.img}`} alt="" />
                    }
                </div>
                <div className="card-body">
                    <div className="card-title">
                        <h3>{service.serviceTitle}</h3>
                    </div>
                    <p className="card-text text-center">
                        {service.description}
                    </p>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default ServiceData;