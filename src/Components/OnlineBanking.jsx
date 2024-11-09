import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sim from '../assets/cardsim.png'
import masterCard from '../assets/MasterCard_Logo.png'

export default function OnlineBanking() {

  // Balance State Managment

  const [cashBalance, setCashBalance] = useState(() => {
    const savedCash = localStorage.getItem('cashBalance');
    return savedCash ? parseFloat(savedCash) : 25000; // Store and retrieve as a number
  });

  const [visaBalance, setvisaBalance] = useState(() => {
    const visaSavedCredit = localStorage.getItem('visaBalance');
    return visaSavedCredit ? parseFloat(visaSavedCredit) : 10500;
  });

  const [masterBalance, setmasterBalance] = useState(() => {
    const masterSavedCredit = localStorage.getItem('masterBalance');
    return masterSavedCredit ? parseFloat(masterSavedCredit) : 50000;
  });

  useEffect(() => {
    // Update local storage whenever cashBalance or visaBalance changes
    localStorage.setItem('cashBalance', cashBalance);
    localStorage.setItem('visaBalance', visaBalance);
    localStorage.setItem('masterBalance', masterBalance);
  }, [cashBalance, visaBalance, masterBalance]);

  const balance = {
    cash: `$${cashBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}`,
    visaBalance: `$${visaBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}`,
    masterBalance: `$${masterBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}`
  };



  // Progress Bar Dynamic Width.

  const visaWidth = parseFloat(balance.visaBalance.replace(/[^0-9.]/g, '')) / 50000 * 100
  const masterWidth = parseFloat(balance.masterBalance.replace(/[^0-9.]/g, '')) / 100000 * 100;

  const visaWidthStyle = {
    width: `${visaWidth}%`,
    backgroundColor: visaWidth === 100 ? 'red' : '#b8860b'
  }
  
  const masterWidthStyle = {
    width: `${masterWidth}%`,
    backgroundColor: masterWidth === 100 ? 'red' :'#440000'
  }


  // Bill transaction and functional component js. 

  const bills = [
    {
      type: "Water Bill",
      company: "Suppliers",
      amount: "$65",
      units: "205 Units",
      dueDate: "25 Sep 2024",
      accountNumber: "1234586789",
      status: "Pending"
    },
    {
      type: "Electricity Bill",
      company: "Electric Nation",
      amount: "$120",
      units: "500 kWh",
      dueDate: "30 Sep 2024",
      accountNumber: "9876154321",
      status: "Pending"
    },
    {
      type: "Internet Bill",
      company: "Net Relators",
      amount: "$45",
      dataUsage: "200 GB",
      dataLimit: "250 GB",
      dueDate: "28 Sep 2024",
      accountNumber: "5556266777",
      status: "Pending"
    }
  ]



  const [paidBills, setPaidBills] = useState(() => {

    const savedBills = localStorage.getItem('paidBills')
    return savedBills ? JSON.parse(savedBills) : []

  });

  const handlePayBill = (index) => {

    const billAmount = parseFloat(bills[index].amount.replace(/[^0-9.]/g, ''));
    const moneyBalance = parseFloat(balance.cash.replace(/[^0-9.]/g, ''));

    const proceed = window.confirm(`Are You Sure You Want To Pay This Bill For ${bills[index].amount}`);

    if (!proceed) {
      return
    }

    if (billAmount > moneyBalance) {
      alert('Insufficient funds');
      return
    }

    else {
      const updatedPaidBills = [...paidBills, index];
      setPaidBills(updatedPaidBills)

      const updatedCash = (moneyBalance - billAmount)
      setCashBalance(updatedCash)
      localStorage.setItem('cashBalance', JSON.stringify(updatedCash))
      localStorage.setItem('paidBills', JSON.stringify(updatedPaidBills))
    }

  };

  const [showStatusText, setShowStatusText] = useState(false);

  useEffect(() => {
    const unpaidBills = bills.filter((_, index) => !paidBills.includes(index));
    if (unpaidBills.length === 0) {
      setShowStatusText(true);
    } else {
      setShowStatusText(false);
    }
  }, [paidBills]);




  return (
    <>
      <div className="container">
        <div className="row">

          {/* Balance Cards */}

          <div className="col-12 my-4">
            <div className="d-flex overflow-auto" style={{ whiteSpace: "nowrap" }}>
              <div className="card-box flex-shrink-0" style={{ width: "25%", minWidth: "300px" }}>
                <div className="pay-box">
                  <p className="text-white py-0 text-end">National Bank</p>
                  <small className="text-white d-block pt-4">Balance</small>
                  <h4 className="text-white mt-2 d-inline-block fw-bold">{balance.cash}</h4>
                  <h6 className="text-white mt-2 pt-1 float-end">CASH</h6>
                </div>
              </div>

              <div className="card-box flex-shrink-0" style={{ width: "25%", minWidth: "300px" }}>
                <div className="visacard-box">
                  <img src={sim} style={{ width: "50px" }} alt="Sim Card" />
                  <p className="text-white pt-2 float-end">National Bank</p>
                  <p className="lifted-text-code mb-1 mt-2">xxxx xxxx xxxx xxxx</p>
                  <div>
                    <h4 className="text-white d-inline-block fw-bold">{balance.visaBalance}</h4>
                    <h6 className="text-white float-end mt-1">VISA GOLD</h6>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ height: "5px" }}
                    >
                      <div className="progress-bar visa" style={visaWidthStyle}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-box flex-shrink-0" style={{ width: "25%", minWidth: "300px" }}>
                <div className="mastercard-box">
                  <img src={sim} style={{ width: "50px" }} alt="Sim Card" />
                  <p className="text-white pt-2 float-end">National Bank</p>
                  <p className="lifted-text-code mb-1 mt-2">xxxx xxxx xxxx xxxx</p>
                  <div>
                    <h4 className="text-white d-inline-block fw-bold">{balance.masterBalance}</h4>
                    <img className='float-end' style={{ width: '50px' }} src={masterCard} alt="" />
                    <div
                      className="progress"
                      role="progressbar"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ height: "5px" }}
                    >
                      <div className="progress-bar mastercard" style={masterWidthStyle}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-box flex-shrink-0" style={{ width: "25%", minWidth: "300px" }}>
                <div className="add-box d-flex flex-column justify-content-center align-items-center">
                  <div className="mt-4 add-icon-box">
                    <i className="fa fa-plus fs-2"></i>
                  </div>
                  <div>
                    <p className="text-white">Add Card</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Money Transaction Cards */}

          <div className="col-12 col-lg-4 col-xl-5 my-5 pt-2">
            <div className="row money-selector-container">

              <div className="col-12 col-xl-6">
                <Link className='text-decoration-none' to="/onlinebanking/sendMoney">
                  <div className="card money-card">
                    <i className="fa fa-wallet icon"></i>
                    <h5>Send Money</h5>
                  </div>
                </Link>
              </div>

              <div className="col-12 col-xl-6">
                <Link className='text-decoration-none' to="/onlinebanking/transferMoney">
                  <div className="card money-card">
                    <i className="fa fa-exchange-alt icon"></i>
                    <h5>Transfer Money</h5>
                  </div>
                </Link>
              </div>

              <div className="col-12 col-xl-6">
                <Link className='text-decoration-none' to="/onlinebanking/investment">
                  <div className="card money-card">
                    <i className="fa fa-chart-line icon"></i>
                    <h5>Investment</h5>
                  </div>
                </Link>
              </div>

              <div className="col-12 col-xl-6">
                <Link className='text-decoration-none' to="/onlinebanking/donation">
                  <div className="card money-card">
                    <i className="fa fa-hand-holding-heart icon"></i>
                    <h5>Charity / Donation</h5>
                  </div>
                </Link>
              </div>

              <div className="col-12">
                <Link className='text-decoration-none' to="/onlinebanking/transactions">
                  <div className="transaction-card">
                    <h5 className='d-inline-block mx-2'>View Transactions</h5>
                    <i className="fa fa-arrow-down icon"></i>
                  </div>
                </Link>
              </div>

            </div>
          </div>

          {/* Bills */}

          <div className="col-12 col-lg-8 col-xl-7 mb-5 mt-5 bg-light-lighter">
            <div className="row p-2">

              <div className="text-start">
                <h4 className='mt-3 pb-4 mx-1'>Utility Bills</h4>
              </div>

              {showStatusText && <div className="d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
                <h4 className='text-secondary'>No Pending Bills</h4>
              </div>}

              {bills.map((bill, index) => (
                !paidBills.includes(index) && (
                  <div key={index} className="col-12 col-lg-6 mb-4">
                    <div className="bill-card p-4">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">{bill.type}</h5>
                        <span className="badge bg-warning text-dark">{bill.status}</span>
                      </div>
                      <hr />
                      <p className='bill-p'><strong>Company:</strong> {bill.company}</p>
                      <p className='bill-p'><strong>Amount:</strong> {bill.amount}</p>
                      {bill.units && <p className='bill-p'><strong>Units: </strong> {bill.units}</p>}
                      {bill.dataUsage && <p className='bill-p'><strong>Data Usage: </strong> {bill.dataUsage}</p>}
                      {bill.dataLimit && <p className='bill-p'><strong>Data Limit: </strong> {bill.dataLimit}</p>}
                      <p className='bill-p'><strong>Due Date:</strong> {bill.dueDate}</p>
                      <p className='bill-p'><strong>Account Number:</strong> {bill.accountNumber}</p>
                      <button className="transfer-button w-100" onClick={() => { handlePayBill(index) }}>Pay Now</button>
                    </div>
                  </div>
                )
              ))}

            </div>
          </div>

        </div >
      </div >
    </>
  )
}
