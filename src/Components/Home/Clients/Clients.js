import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';
import './Clients.css'
const Clients = () => {
    return (
        <section className="client-section">
            <div className="container mt-4">
                <div className="row justify-content-center text-center m-3">
                    <div className="col-md-2 mb-4 partner">
                        <img src={slack} className="img-fluid p-2" style={{height: "50px"}} alt="client img" />
                    </div>
                    <div className="col-md-2 mb-4 partner">
                        <img src={google} className="img-fluid p-2" style={{height: "50px"}} alt="client img" />
                    </div>
                    <div className="col-md-2 mb-4 partner">
                        <img src={uber} className="img-fluid p-2" style={{height: "50px"}} alt="client img" />
                    </div>
                    <div className="col-md-2 mb-4 partner">
                        <img src={netflix} className="img-fluid p-2" style={{height: "50px"}} alt="client img" />
                    </div>
                    <div className="col-md-2 mb-4 partner">
                        <img src={airbnb} className="img-fluid p-2" style={{height: "50px"}} alt="client img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;