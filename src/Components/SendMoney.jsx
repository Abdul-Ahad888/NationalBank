import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';

export default function SendMoney() {

    const [transferAmount, setTransferAmount] = useState('');
    const [receiverName, setReceiverName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [bankName, setBankName] = useState('');
    const [transferAmountError, setTransferAmountError] = useState(false);
    const [receiverNameError, setReceiverNameError] = useState(false);
    const [accountNumberError, setAccountNumberError] = useState(false);
    const [accountNumberLengthError, setAccountNumberLengthError] = useState(false);
    const [bankNameError, setBankNameError] = useState(false);

    const navigate = useNavigate();

    // Load cash balance as a number from localStorage
    const [cashBalance, setCashBalance] = useState(() => {
        const savedCash = localStorage.getItem('cashBalance');
        return savedCash ? JSON.parse(savedCash) : 25000;
    });

    const handleTransferForm = (e) => {
        e.preventDefault();

        let hasErrors = false;

        // Validate Receiver Name
        if (/[^a-zA-Z\s'-]/.test(receiverName)) {
            setReceiverNameError(true);
            hasErrors = true;
        } else {
            setReceiverNameError(false);
        }

        // Validate Bank Name
        if (/[^a-zA-Z\s'-]/.test(bankName)) {
            setBankNameError(true);
            hasErrors = true;
        } else {
            setBankNameError(false);
        }

        // Validate Account Number
        if (!/^\d+$/.test(accountNumber) || accountNumber.length !== 10) {
            setAccountNumberError(true);
            setAccountNumberLengthError(true);
            hasErrors = true;
        } else {
            setAccountNumberError(false);
            setAccountNumberLengthError(false);
        }

        // Validate Transfer Amount
        const numericTransferAmount = parseFloat(transferAmount.replace(/,/g, ''));
        if (isNaN(numericTransferAmount) || numericTransferAmount <= 0) {
            alert('Please enter a valid amount');
            return;
        }
        if (isNaN(numericTransferAmount)) {
            setTransferAmountError(true);
            hasErrors = true;
        } else {
            setTransferAmountError(false);
        }

        // Proceed if no errors
        if (!hasErrors) {
            if (numericTransferAmount > cashBalance) {
                alert('Transfer amount exceeds your available balance.');
                return;
            }

            const newBalance = cashBalance - numericTransferAmount;

            setCashBalance(newBalance);
            localStorage.setItem('cashBalance', JSON.stringify(newBalance));

            navigate('/onlineBanking/SendMoney/success', {
                state: {
                    transferAmount: numericTransferAmount,
                    receiverName,
                    bankName,
                    accountNumber
                }
            });
        } else {
            console.log("Form contains errors, please fix them");
        }
    };



    return (
        <div>

            <div className="m-4 position-absolute top-0 left-0">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link className='text-decoration-none' style={{ "color": "#427bc7" }} to="/">Home</Link></li>
                        <li class="breadcrumb-item"><Link className='text-decoration-none' style={{ "color": "#427bc7" }} to="/onlinebanking">Online Banking</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Send Money</li>
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
                                    <h2 className="transfer-card-heading">Send Money</h2>
                                </div>
                                <form className="transfer-details py-4" onSubmit={handleTransferForm}>
                                    <div className="my-3">
                                        <label htmlFor="receiver-name" className="d-block">Receiver's Name :</label>
                                        <input
                                            type="text"
                                            id="receiver-name"
                                            value={receiverName}
                                            onChange={(e) => setReceiverName(e.target.value)}
                                            className="form-control w-100 py-1 name-capitalize"
                                            required
                                        />
                                        <small className='text-danger' style={{ display: receiverNameError ? "block" : "none" }}>
                                            ERROR | Name should contain only alphabets!
                                        </small>
                                    </div>



                                    <div className="my-3">
                                        <label htmlFor="account-number" className="d-block">Account Number :</label>
                                        <input
                                            type="text"
                                            id="account-number"
                                            value={accountNumber}
                                            onChange={(e) => setAccountNumber(e.target.value)}
                                            className="form-control w-100 py-1"
                                            required
                                        />
                                        <small className='text-danger' style={{ display: accountNumberError ? "block" : "none" }}>
                                            ERROR | Account number should contain only number values !
                                        </small>
                                        <small className='text-danger' style={{ display: accountNumberLengthError ? "block" : "none" }}>
                                            ERROR | Account number should have 10 numbers !
                                        </small>
                                    </div>

                                    <div className="my-3">
                                        <label htmlFor="bank-name" className="d-block">Bank Name :</label>
                                        <input
                                            type="text"
                                            id="bank-name"
                                            value={bankName}
                                            onChange={(e) => setBankName(e.target.value)}
                                            className="form-control w-100 py-1 name-capitalize"
                                            required
                                        />
                                        <small className='text-danger' style={{ display: bankNameError ? "block" : "none" }}>
                                            ERROR | Bank name should contain only alphabets!
                                        </small>
                                    </div>

                                    <div className="my-3">
                                        <label htmlFor="amount" className="d-block">Amount :</label>
                                        <div className="input-group">
                                            <span className="input-group-text fs-4 fw-semibold">$</span>
                                            <input
                                                type="text"
                                                id="transferAmount"
                                                value={transferAmount}
                                                onChange={(e) => setTransferAmount(e.target.value)}
                                                className="form-control fs-3 fw-bold"
                                                style={{ color: "#00284e" }}
                                                aria-label="Amount (to the nearest dollar)"
                                                required
                                            />
                                        </div>
                                        <small className='text-danger' style={{ display: transferAmountError ? "block" : "none" }}>
                                            ERROR | Amount should contain only number values!
                                        </small>
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
