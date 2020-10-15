import React from 'react';
import './ClientFeedbackData.css'
import clientPhoto from '../../../images/customer-2.png'
const ClientFeedbackData = ({ review }) => {
    return (
        <div className="col-md-4 card-hover text-center service-card">
            <div className="m-2 service-card shadow p-4 mb-5 sm-white rounded">
                <div className="card mb-3 border-none text-center" style={{ maxWidth: '' }}>
                    <div className="d-flex justify-content-between">
                        {
                            review.photo ? <img className="img-thumbnail w-25 rounded-circle" src={review.photo} alt="" /> :
                                <img className="img-thumbnail w-25 rounded-circle" src={clientPhoto} alt="" />
                        }
                        <div className="text">
                            <h5 className="card-title">{review.data.name}</h5>
                            <small className="card-text">{review.data.companyName}</small>
                        </div>
                    </div>
                    <div className="card-body">
                        <small className="card-text">{review.data.description}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientFeedbackData;