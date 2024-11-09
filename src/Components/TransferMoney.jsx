import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import masterCard from '../assets/MasterCard_Logo.png'
import sim from '../assets/cardsim.png'


export default function TransferMoney() {

    const [amountInput, setAmountInput] = useState('');
    const [selectedCard, setSelectedCard] = useState('');


    // Retrieve and parse balances from localStorage
    const visaBalance = parseFloat(localStorage.getItem('visaBalance').replace(/[^0-9.]/g, '')) || 0;
    const masterBalance = parseFloat(localStorage.getItem('masterBalance').replace(/[^0-9.]/g, '')) || 0;
    const cashBalance = parseFloat(localStorage.getItem('cashBalance').replace(/[^0-9.]/g, '')) || 0;

    
    // Handle form submission
    const handleCardForm = (e) => {
        e.preventDefault();

        
        // Ensure amountInput is a number
        const amount = parseFloat(amountInput);

        if (isNaN(amount) || amount <= 0) {
            alert('Please enter a valid amount');
            return;
        }


        // Calculate updated balances
        let updatedCash = cashBalance - amount; 

        if (updatedCash < 0) {
            alert("You don't have enough cash balance");
            return;
        }

        if (selectedCard === 'visa-gold') {
            const updatedVisaCredit = visaBalance + amount;
            localStorage.setItem('visaBalance', updatedVisaCredit.toFixed(2));
        } else if (selectedCard === 'master-card') {
            const updatedMasterCredit = masterBalance + amount;
            localStorage.setItem('masterBalance', updatedMasterCredit.toFixed(2));
        }

        localStorage.setItem('cashBalance', updatedCash.toFixed(2));
        setAmountInput('');
    };


    // Calculate progress width based on credit balance
    const visaWidthStyle = (visaBalance / 50000) * 100;
    const masterWidthStyle = (masterBalance / 100000) * 100;


    // Define progress bar style
    const progressbarStyle = {
        width: `${selectedCard === 'visa-gold' ? visaWidthStyle : masterWidthStyle}%`,
        backgroundColor: selectedCard === 'visa-gold'
            ? (visaWidthStyle >= 100 ? 'red' : '#b8860b')
            : (masterWidthStyle >= 100 ? 'red' :'#440000')
    };
    
    
    // Format balances for display
    const formattedVisaBalance = visaBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const formattedMasterBalance = masterBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    return (
        <div>

            <div className="m-4 position-absolute top-0 left-0">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link className='text-decoration-none' style={{ "color": "#427bc7" }} to="/">Home</Link></li>
                        <li class="breadcrumb-item"><Link className='text-decoration-none' style={{ "color": "#427bc7" }} to="/onlinebanking">Online Banking</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Transfer Money</li>
                    </ol>
                </nav>
            </div>

            <div className="container">
                <div className="row justify-content-center align-items-center vh-100">

                    <div className="col-12 col-lg-5">


                        <div className="my-5">

                            <div className="transfer-card">
                                <i className="fa-solid fa-money-bill-transfer"></i>
                                <div className="text-center head-for-send-money">
                                    <h2 className="transfer-card-heading">Transfer Money</h2>
                                </div>

                                <form className="transfer-details py-4" onSubmit={handleCardForm}>

                                    <div className="my-3">
                                        <label htmlFor="Card" className="d-block">Card :</label>
                                        <select className="form-select" onChange={(e) => { setSelectedCard(e.target.value) }} value={selectedCard} required>
                                            <option value="">Select Card</option>
                                            <option value="visa-gold">Visa Gold</option>
                                            <option value="master-card">Master Card</option>
                                        </select>
                                    </div>



                                    {(selectedCard === "visa-gold" || selectedCard === "master-card") && (
                                        <div style={{ backgroundColor: "#e9e9e9" }} className='py-2'>

                                            {selectedCard === "visa-gold" && (
                                                <div className="card-box m-auto" style={{ width: "75%", minWidth: "300px" }}>
                                                    <div className="visacard-box">
                                                        <img src={sim} style={{ width: "50px" }} alt="Sim Card" />
                                                        <p className="text-white pt-2 float-end">National Bank</p>
                                                        <p className="lifted-text-code mb-1 mt-2">xxxx xxxx xxxx xxxx</p>
                                                        <div>
                                                            <h4 className="text-white d-inline-block fw-bold">${formattedVisaBalance}</h4>
                                                            <h6 className="text-white float-end mt-1">VISA GOLD</h6>
                                                            <div
                                                                className="progress"
                                                                role="progressbar"
                                                                aria-valuenow="25"
                                                                aria-valuemin="0"
                                                                aria-valuemax="100"
                                                                style={{ height: "5px" }}
                                                            >
                                                                <div className="progress-bar visa" style={progressbarStyle}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {selectedCard === "master-card" && (
                                                <div className="card-box m-auto" style={{ width: "75%", minWidth: "300px" }}>
                                                    <div className="mastercard-box">
                                                        <img src={sim} style={{ width: "50px" }} alt="Sim Card" />
                                                        <p className="text-white pt-2 float-end">National Bank</p>
                                                        <p className="lifted-text-code mb-1 mt-2">xxxx xxxx xxxx xxxx</p>
                                                        <div>
                                                            <h4 className="text-white d-inline-block fw-bold">{formattedMasterBalance}</h4>
                                                            <img className='float-end' style={{ width: '50px' }} src={masterCard} alt="" />
                                                            <div
                                                                className="progress"
                                                                role="progressbar"
                                                                aria-valuenow="25"
                                                                aria-valuemin="0"
                                                                aria-valuemax="100"
                                                                style={{ height: "5px" }}
                                                            >
                                                                <div className="progress-bar mastercard" style={progressbarStyle}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                        </div>
                                    )}



                                    <div className="my-3">
                                        <label htmlFor="amount" className="d-block">Amount :</label>
                                        <div className="input-group">
                                            <span className="input-group-text fs-4 fw-semibold">$</span>
                                            <input
                                                type="text"
                                                id="transferAmount"
                                                value={amountInput}
                                                onChange={(e) => setAmountInput(e.target.value)}
                                                className="form-control fs-3 fw-bold"
                                                style={{ color: "#00284e" }}
                                                aria-label="Amount (to the nearest dollar)"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="0"
                                            id="flexCheckChecked"
                                            required
                                        />
                                        <label className="form-check-label" htmlFor="flexCheckChecked">
                                            I agree to the <a href="/" className="text-decoration-none">terms</a> and conditions.
                                        </label>
                                    </div>

                                    <div className='position-relative'>
                                        <input type="submit" value="Send Money" className="transfer-button" />
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
