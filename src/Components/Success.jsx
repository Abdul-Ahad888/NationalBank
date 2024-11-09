import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Success() {

    const [loader, setloader] = useState(true)

    const location = useLocation()
    const { transferAmount, accountNumber, bankName, receiverName } = location.state || {}

    const amount = transferAmount ? transferAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '';

    useEffect(() => {
        setTimeout(() => {
            setloader(false)
        }, 1500);
    })

    return (
        <div>

             <div className="m-4 position-absolute top-0 left-0">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link className='text-decoration-none' style={{ "color": "#427bc7" }} to="/">Home</Link></li>
                        <li class="breadcrumb-item"><Link className='text-decoration-none' style={{ "color": "#427bc7" }} to="/onlinebanking">Online Banking</Link></li>
                        <li class="breadcrumb-item"><Link className='text-decoration-none' style={{ "color": "#427bc7" }} to="/onlinebanking/sendMoney">Send Money</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Success Page</li>
                    </ol>
                </nav>
            </div>
            
            {loader ? (
                <div className="loader-container">
                    <div className="spinner"></div>
                    <h6 className='text-black'>Making Your Transaction, This Wont Take Long !</h6>
                </div>
            ) : (
                <div className="container">
                    <div className="row justify-content-center align-items-center vh-100">
                        <div className="success-card">
                            <i class="fa-solid fa-check"></i>
                            <div className="text-center">
                                <h3>Transfer Amount</h3>
                                <div className='success-payment'>
                                    <h1 className='display-4 fw-bold'>${amount}</h1>
                                </div>
                                <p className='fs-6 mt-5 text-start mx-4'>Selected Recipient</p>
                                <div className='success-box'>
                                    <h2 className='fw-bold name-capitalize'>{receiverName}</h2>
                                    <h5 className='fw-bold name-capitalize'>{bankName}</h5>
                                    <p>Account No. <span className='fw-semibold'>{accountNumber}</span></p>
                                </div>
                                <Link to='/onlineBanking/sendMoney'>
                                    <button className='success-card-btn fw-semibold'>Another Transaction <i className='fa fa-arrow-right'></i></button>
                                </Link>
                                <small className='mt-2 d-block'>Take Screen Shot For Records</small>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}