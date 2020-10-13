import React, { useState } from 'react';
import DashboardNav from '../DashboardNav/DashboardNav';
import SideMenu from '../SideMenu/SideMenu';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
const AddService = () => {
    const { register, handleSubmit, errors } = useForm();
    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null);
    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('serviceTitle', info.serviceTitle);
        formData.append('description', info.description);

        fetch('http://localhost:5000/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if(data){
                    alert('new service added')
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
                <div className="col-md-10" style={{ backgroundColor: '#F4F7FC', paddingBottom: '10%' }}>
                    <div className="add-service p-4">
                        <h3 className="font-weight-bold">Add Service</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="m-3 form">
                            <div className="row rounded bg-white p-5 m-1">
                                <div className="col-md-6">
                                    <div class="form-group">
                                        <label for="service-title">Service Title</label>
                                        <input type="text" onBlur={handleBlur} className="form-control" name="serviceTitle" ref={register({ required: true })} placeholder="Service Title" />
                                        {errors.serviceTitle && <span className="text-danger font-weight-bold">Please enter a service title</span>}
                                    </div>
                                    <div class="form-group">
                                        <label for="description">DesCription</label>
                                        <textarea onBlur={handleBlur} className="form-control" name="description" ref={register({ required: true })} placeholder="DesCription"></textarea>
                                        {errors.description && <span className="text-danger font-weight-bold">Please Enter a description</span>}
                                    </div>
                                </div>
                                <div className="col-md-6 mt-4 pt-1">
                                    <div class="custom-file">
                                        <input type="file" onChange={handleFileChange} class="custom-file-input" id="customFile" name="image" />
                                        <label class="custom-file-label alert-success" for="customFile"> <FontAwesomeIcon icon={faCloudUploadAlt} />  Upload image</label>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-success float-right mt-3" type="Submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddService;