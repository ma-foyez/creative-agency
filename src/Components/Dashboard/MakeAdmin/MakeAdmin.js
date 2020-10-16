import React from 'react';
import DashboardNav from '../DashboardNav/DashboardNav';
import SideMenu from '../SideMenu/SideMenu';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        fetch('https://young-shore-62919.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success =>{
            if (success) {
                alert('New Admin Added Successfully');
                document.getElementById('name').value= '';
            }
        })
    };
    return (
        <section>
            <DashboardNav></DashboardNav>
            <div className="row">
                <div className="col-md-2">
                    <SideMenu></SideMenu>
                </div>
                <div className="col-md-10 dashboard-container">
                    <div className="add-service p-4">
                        <h3 className="font-weight-bold">Add New Admin</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="m-3 form">
                            <div className="row">
                                <div className="col-md-8 shadow-sm p-5 mb-5 bg-white rounded">
                                    <div class="form-group">
                                        <label for="Email">Email</label>
                                        <input type="email" className="form-control" name="email" id="name" ref={register({ required: true })} placeholder="abc@gmail.com" />
                                        {errors.email && <span className="text-danger font-weight-bold">Please enter a valid email</span>}
                                    </div>
                                    <button className="btn btn-success float-right mt-3" type="Submit">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAdmin;