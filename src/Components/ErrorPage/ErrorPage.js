import React from 'react';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="container mt-5 p-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6">
                    <Alert variant="danger" className="text-center">
                        <Alert.Heading>
                            <h1 className="display-2">404</h1>
                        </Alert.Heading>
                        <h2 className="text-uppercase font-weight-bold">sorry page not found</h2>
                        <Link className="text-decoration-none" to="/home"><button className="btn default-btn mt-5">Goo Back Safety</button></Link>
                    </Alert>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;