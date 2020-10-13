import React from 'react';
import { useForm } from "react-hook-form";
import './Contact.css'
const Contact = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {

    }
    return (
        <section className="contact mt-5">
            <div className="container mt-2">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-5">
                        <h3>Let us handle your <br /> project, professionally.</h3>
                        <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </div>
                    <div className="col-md-7">
                        <form onSubmit={handleSubmit(onSubmit)} className="m-3 form">

                            <div class="form-group">
                                <input type="email" className="form-control" name="email" ref={register({ required: true })} placeholder="Your Email" />
                                {errors.email && <span className="text-danger font-weight-bold">Please enter your email</span>}
                            </div>
                            <div class="form-group">
                                <input type="text" className="form-control" name="name" ref={register({ required: true })} placeholder="Your Name/ Company Name" />
                                {errors.name && <span className="text-danger font-weight-bold">Please enter your name or your company name</span>}
                            </div>
                            <div class="form-group">
                                <textarea className="form-control" name="message" ref={register({ required: true })} placeholder="Your Message" rows="4"></textarea>
                                {errors.message && <span className="text-danger font-weight-bold">Say something</span>}
                            </div>
                            <button className="btn default-btn float-left mt-3" type="Submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
            <footer className="text-center pt-5">
                <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
            </footer>
        </section>
    );
};

export default Contact;