import React, { useEffect, useState } from 'react';
import ClientFeedbackData from '../ClientFeedbackData/ClientFeedbackData';
import * as ReactBootstrap from 'react-bootstrap';

const ClientFeedback = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        fetch('https://young-shore-62919.herokuapp.com/loadFeedback')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setLoading(true);
            });
    }, [])
    return (
        <section className="client-feedback section">
            <div className="container mt-5">
                <h2 className="text-center font-weight-bold pb-5">Clients <span className="brand-text">Feedback</span> </h2>
                <div className="row justify-content-center mb-5">
                    {
                        loading ? reviews.map(feedback => <ClientFeedbackData key={feedback._id} review={feedback}></ClientFeedbackData>) :
                            <div className="text-danger m-5 d-flex align-items-center font-weight-bold">
                                <ReactBootstrap.Spinner animation="border" />
                                <span className="ml-3">Loading clients feedback...........</span>
                            </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default ClientFeedback;