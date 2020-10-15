import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import './ServiceData.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags } from '@fortawesome/free-solid-svg-icons';

const ServiceData = ({ service }) => {
    return (
        <div className="col-md-4 card-hover text-center service-card">
            <Link to="/order" className="text-decoration-none text-center text-dark">
                <div className="m-3 single_service service-card shadow p-3 mb-5 bg-white rounded text-center">
                    <div className="service_hover">
                        <div className="card mb-3 border-none text-center">
                            <div className="text-center">
                                {
                                    service.serviceImage && <img className="w-25" src={`data:image/png;base64,${service.serviceImage.img}`} alt="" />
                                }
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{service.serviceTitle}</h5>
                                <p className="card-text">{service.description}</p>
                            </div>
                        </div>

                        <div className="hover_content">
                            <div className="hover_content_inner">
                                <h4>{service.serviceTitle}</h4>
                                <button className="btn default-btn mt-5"> <FontAwesomeIcon icon={faTags} />  Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ServiceData;
