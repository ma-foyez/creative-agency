import React, { useContext } from 'react';
import DashboardNav from '../DashboardNav/DashboardNav';
import SideMenu from '../SideMenu/SideMenu';
import { useForm } from "react-hook-form";
import { userContext } from '../../../App';
const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data =>{
        const name = loggedInUser.name;
        const email = loggedInUser.email;
        const photo = loggedInUser.photo;
        const info = {name, email, photo, data};
        console.log(info);

        fetch('http://localhost:5000/addUserFeedback',{
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify(info)
        })
        .then(res => res.json())
        .then(success=>{
            if (success) {
                alert('Review Added Successfully');
            }
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
                    <div className="add-service p-4">
                        <h3 className="font-weight-bold">Feedback</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="m-3 form">
                            <div className="row rounded bg-white p-5 m-1">
                                <div className="col-md-7">
                                    <div class="form-group">
                                        <input type="text" className="form-control" name="name" ref={register({ required: true })} placeholder="Your Name" />
                                        {errors.name && <span className="text-danger font-weight-bold">Please enter your name</span>}
                                    </div>
                                    <div class="form-group">
                                        <input type="text" className="form-control" name="companyName" ref={register({ required: true })} placeholder="Company Name, Destination" />
                                        {errors.companyName && <span className="text-danger font-weight-bold">Enter your comapany name and destination</span>}
                                    </div>
                                    <div class="form-group">
                                        <textarea className="form-control" name="description" ref={register({ required: true })} placeholder="Description" rows="4"></textarea>
                                        {errors.description && <span className="text-danger font-weight-bold">Say something about us</span>}
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

export default Review;