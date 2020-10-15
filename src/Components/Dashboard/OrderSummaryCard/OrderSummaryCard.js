import React from 'react';
import './OrderSummaryCard.css'
const OrderSummaryCard = ({ order }) => {
    return (
        <div className="col-md-4">
            <div className="shadow-sm p-4 mb-3 bg-white rounded m-4">
                <div className="card-title">
                    {
                        order.projectFile && <img style={{height: '100px', width: '100px'}} className="img-thumbnail rounded-circle" src={`data:image/png;base64,${order.projectFile.img}`} alt="" />
                    }
                    <button className={`btn float-right mt-3 status-btn-${order.status}`}>{order.status}</button>
                </div>
                <div className="card-text text-left">
                    <h4>{order.service}</h4>
                    <p>{order.projectDetails}</p>
                </div>
            </div>
        </div>
    );
};

export default OrderSummaryCard;