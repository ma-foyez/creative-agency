import React from 'react';
import './ClientFeedbackData.css'
const ClientFeedbackData = ({ review }) => {
    return (
        <div className="col-md-4 text-center">
            <div className="feedback shadow-sm p-3 mb-5 bg-white rounded">
                <div className="d-flex justify-content-between">
                    <img className="img-thumbnail w-25 rounded-circle" src={review.photo} alt="" />
                    <div className="card-title">
                        <h4>{review.name}</h4>
                        <p>{review.data.companyName}</p>
                    </div>
                </div>
                <div className="card-text mt-3">
                    <small>{review.data.description}</small>
                </div>
            </div>
        </div>
    );
};

export default ClientFeedbackData;