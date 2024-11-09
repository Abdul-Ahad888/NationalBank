import React from 'react'
import profile from "../assets/profile.png"
import {Link, useNavigate } from 'react-router-dom'

export default function Profile() {

    const navigate = useNavigate()

    const firstName = localStorage.getItem("FirstName")
    const lastName = localStorage.getItem("LastName")
    const country = localStorage.getItem("Country")
    const city = localStorage.getItem("City")
    const age = localStorage.getItem("Age")
    const gender = localStorage.getItem("Gender")
    const email = localStorage.getItem("Email")

    let cashBalance = localStorage.getItem("cashBalance")
    const balance = parseFloat(cashBalance).toLocaleString('en-US', { minimumFractionDigits: 2 });

    const handleLogout = () => {
        localStorage.removeItem("loginToken")
        navigate('/')
    }

    return (
        <div>

            <div className="m-4 position-absolute top-0 left-0">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link className='text-decoration-none' style={{ "color": "#427bc7" }} to="/">Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Profile</li>
                    </ol>
                </nav>
            </div>

            <div className="container">
                <div className="row my-5 pt-4">

                    <div className="col-12 col-md-6">
                        <div className="d-flex justify-content-center justify-content-md-start">
                            <img src={profile} style={{ width: "110px" }} alt="" />
                            <div className='d-block mt-2'>
                                <h1 className="text-capitalize">{firstName + " " + lastName}</h1>
                                <p className='text-capitalize'> <i class="fa-solid fa-location-dot"></i> {country + "," + " " + city}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="float-md-end mt-4 mt-md-0 text-center">
                            <h5>Account Balance :</h5>
                            <h1>{balance}</h1>
                        </div>
                    </div>

                    <div>
                        <p className='fw-bold mt-5 fs-5'><i className='fa fa-chevron-right'></i> Personal :</p>
                    </div>

                    <div className='mx-2'>
                        <div className='my-3'>Language : <span className='fw-bold'>English</span></div>
                        <div className='my-3'>Age : <span className='fw-bold'>{age}</span></div>
                        <div className='my-3'>Gender : <span className='fw-bold'>{gender}</span></div>
                        <div className='my-3'>Email Address : <span className='fw-bold'>{email}</span></div>
                    </div>

                    <div>
                        <p className='fw-bold mt-5 fs-5'><i className='fa fa-chevron-right'></i> Account Details :</p>
                    </div>

                    <div className='mx-2'>
                        <div className='my-3'>Bank : <span className='fw-bold'>National Bank</span></div>
                        <div className='my-3'>Account Number : <span className='fw-bold'>9714163271</span></div>
                        <div className='my-3'>Credit Card : <span className='fw-bold'>
                            <select name="" id="" className='py-1 px-2'>
                                <option value="">VisaCard</option>
                                <option value="">MasterCard</option>
                            </select>
                        </span></div>
                    </div>

                    <div>
                        <p className='fw-bold mt-5 fs-5'><i className='fa fa-chevron-right'></i> Security :</p>
                    </div>

                    <div className='mx-2'>
                        <div className='my-3'>Password : <span className='fw-bold'>*******</span></div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="emailNotif" />
                            <div className='my-3'>Two-Factor Authentication</div>
                        </div>
                    </div>

                    <div>
                        <p className='fw-bold mt-5 fs-5'><i className='fa fa-chevron-right'></i> Notifications :</p>
                    </div>

                    <div className="mx-2">
                        <div className="form-check my-3">
                            <input className="form-check-input" type="checkbox" id="emailNotif" />
                            <label className="form-check-label" htmlFor="emailNotif">
                                Email Notifications
                            </label>
                        </div>
                        <div className="form-check my-3">
                            <input className="form-check-input" type="checkbox" id="smsNotif" />
                            <label className="form-check-label" htmlFor="smsNotif">
                                Browser Notifications
                            </label>
                        </div>
                    </div>

                    <div className="col-12 col-md-2 mt-5">
                        <button onClick={handleLogout} className='btn-theme-outline w-100'>Log Out</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
