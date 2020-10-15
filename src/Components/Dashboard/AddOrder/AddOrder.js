import React, { useState } from 'react';
import DashboardNav from '../DashboardNav/DashboardNav';
import SideMenu from '../SideMenu/SideMenu';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import { useHistory, useParams } from 'react-router-dom';

const AddOrder = () => {
    const { register, handleSubmit, errors } = useForm();
    const [order, setOrder] = useState({})
    const [file, setFile] = useState(null);
    const handleBlur = (e) => {
        const newOrder = { ...order };
        newOrder[e.target.name] = e.target.value;
        setOrder(newOrder);
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    console.log(order)
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', order.name);
        formData.append('email', order.email);
        formData.append('service', order.service);
        formData.append('projectDetails', order.projectDetails);
        formData.append('price', order.price);
        formData.append('status', 'Panding');

        fetch('https://afternoon-journey-45337.herokuapp.com/addOrder', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Your Order Successfully Received');
                }
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('service').value = '';
                document.getElementById('projectDetails').value = '';
                document.getElementById('price').value = '';

            })
    }
    return (
        <section>
            <DashboardNav></DashboardNav>
            <div className="row">
                <div className="col-md-2">
                    <SideMenu></SideMenu>
                </div>
                <div className="col-md-10" style={{ backgroundColor: '#F4F7FC', paddingBottom: '13%' }}>
                    <div className="add-order p-3">
                        <h2>Order</h2>
                        <form onSubmit={handleSubmit(onSubmit)} action="" className="m-4 form">
                            <div className="row">
                                <div className="col-md-8 shadow-sm p-5 mb-5 bg-white rounded">
                                    <div class="form-group">
                                        <input type="text" onBlur={handleBlur} className="form-control" id="name" name="name" ref={register({ required: true })} placeholder="Your Name" />
                                        {errors.name && <span className="text-danger font-weight-bold">Enter your name</span>}
                                    </div>
                                    <div class="form-group">
                                        <input type="email" onBlur={handleBlur} className="form-control" name="email" id="email" ref={register({ required: true })} placeholder="Your Email" />
                                        {errors.email && <span className="text-danger font-weight-bold">Enter your email</span>}
                                    </div>
                                    <div class="form-group">
                                        <input type="text" onBlur={handleBlur} className="form-control" name="service" id="service" ref={register({ required: true })} placeholder="Your Service" />
                                        {errors.service && <span className="text-danger font-weight-bold">Enter your service</span>}
                                    </div>
                                    <div class="form-group">
                                        <textarea onBlur={handleBlur} className="form-control" name="projectDetails" id="projectDetails" ref={register({ required: true })} placeholder="Project Details"></textarea>
                                        {errors.projectDetails && <span className="text-danger font-weight-bold">Describe your project details</span>}
                                    </div>
                                    <div className="row">
                                        <div class="form-group col-md-6">
                                            <input type="number" onBlur={handleBlur} className="form-control" id="price" name="price" ref={register({ required: true })} placeholder="Your Service" />
                                            {errors.price && <span className="text-danger font-weight-bold">Enter an amount</span>}
                                        </div>
                                        <div class="custom-file col-md-5">
                                            <input type="file" onChange={handleFileChange} class="custom-file-input" id="customFile" name="image" />
                                            <label class="custom-file-label alert-success" for="customFile"> <FontAwesomeIcon icon={faCloudUploadAlt} />  upload project file</label>
                                        </div>
                                    </div>
                                    <button className="btn default-btn float-left mt-3" type="Submit">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddOrder;