import React, { useEffect, useState } from 'react';
import ClientFeedbackData from '../ClientFeedbackData/ClientFeedbackData';

const ClientFeedback = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/loadFeedback')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    console.log(reviews);
    return (
        <section className="client-feedback">
            <div className="container mt-5">
                <h2 className="text-center font-weight-bold pb-5">Clients <span className="brand-text">Feedback</span> </h2>
                <div className="row justify-content-center">
                    {
                        reviews.map(feedback => <ClientFeedbackData review={feedback}></ClientFeedbackData>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ClientFeedback;