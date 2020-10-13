import React from 'react';
import banner from '../../../images/logos/Frame.png'
const HeaderBanner = () => {
    return (
        <section className="header-banner">
            <div className="container mt-5">
                <div className="row align-items-center">
                    <div className="col-md-5">
                        <h2>Let’s Grow Your <br/> Brand To The <br/> Next Level</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, assumenda incidunt! Odio doloribus, nulla mollitia delectus ratione hic corporis voluptates. </p>
                        <button className="btn default-btn">Hire us</button>
                    </div>
                    <div className="col-md-7 text-center">
                        <img className="img-fluid w-75" src={banner} alt="herader banner"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderBanner;