import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Investment() {

  const [cashBalance, setCashBalance] = useState(() => {
    const savedCash = localStorage.getItem("cashBalance")
    return savedCash
  })

  const investments = [
    { name: "Stocks", type: 'Stocks', risk: 'High', expectedReturns: '0.2% - 9.2%', duration: 'Short-Term', company: 'Jbs Trades', amount: 1800 },
    { name: "Stocks", type: 'Stocks', risk: 'Medium', expectedReturns: '1% - 4%', duration: 'Long-Term', company: 'Marker Parker', amount: 2700 },
    { name: "Stocks", type: 'Stocks', risk: 'Low', expectedReturns: '4% - 10%', duration: 'Long-Term', company: 'Jewls & Sons', amount: 5500 },
    { name: "Bonds", type: 'Bonds', risk: 'Low', expectedReturns: '2% - 5%', duration: 'Mid-Term', company: 'Government', amount: 5000 },
    { name: "Mutual Funds", type: 'mf', risk: 'Medium', expectedReturns: '5% - 8%', duration: 'Long-Term', company: 'Mega Poly Steels', amount: 3000 },
    { name: "Stocks", type: 'Stocks', risk: 'High', expectedReturns: '10% - 15%', duration: 'Short-Term', company: 'Fast Traders', amount: 1200 },
    { name: "Stocks", type: 'Stocks', risk: 'Medium', expectedReturns: '3% - 7%', duration: 'Mid-Term', company: 'Silver Investments', amount: 3500 },
    { name: "Bonds", type: 'Bonds', risk: 'Low', expectedReturns: '1% - 3%', duration: 'Long-Term', company: 'Government Bonds', amount: 8000 },
    { name: "Mutual Funds", type: 'mf', risk: 'Medium', expectedReturns: '6% - 9%', duration: 'Long-Term', company: 'Alpha Mutuals', amount: 4500 },
    { name: "Stocks", type: 'Stocks', risk: 'Low', expectedReturns: '4% - 6%', duration: 'Mid-Term', company: 'Alpha Tech', amount: 2200 },
    { name: "Bonds", type: 'Bonds', risk: 'Medium', expectedReturns: '2% - 4%', duration: 'Mid-Term', company: 'City Bonds', amount: 6000 },
    { name: "Mutual Funds", type: 'mf', risk: 'Low', expectedReturns: '3% - 5%', duration: 'Long-Term', company: 'Mega Funds', amount: 3900 }
  ];

  const [isDisabled, setIsDisabled] = useState(()=>{
    investments.map(() => false)
    const disable = localStorage.getItem('isDisabled')
    return disable ? JSON.parse(disable) : []
  }
  )

  const handleInvest = (index) => {
    const currentBalance = parseFloat(cashBalance);
    const investmentAmount = parseFloat(investments[index].amount);
    const proceed = window.confirm(`Are You Sure You Want To Invest in ${investments[index].company} for $${investments[index].amount}`)

    if (!proceed) {
      return
    }

    if (currentBalance < investmentAmount) {
      alert('Insufficient Funds')
    }

    else {
      const newBalance = currentBalance - investmentAmount;

      const updatedDisabledStates = [...isDisabled];
      updatedDisabledStates[index] = true; 
      setIsDisabled(updatedDisabledStates);
      localStorage.setItem('isDisabled', JSON.stringify(updatedDisabledStates))

      setCashBalance(newBalance)
      localStorage.setItem('cashBalance', JSON.stringify(newBalance))
    }
  }

  const [filter, setFilter] = useState({
    "Stocks": true,
    "Bonds": true,
    "mf": true
  })

  const handleCheckbox = ((e) => {
    const { value, checked } = e.target
    setFilter((prevFilter) => ({
      ...prevFilter,
      [value]: checked,
    }))
  })

  const filterData = investments.filter((invest) => (
    filter[invest.type]
  ))

  return (
    <div className="container-fluid" style={{ backgroundColor: "#cecece" }}>
      <div className="row">

        <div className="d-none d-md-block col-md-4 col-lg-4 col-xl-3 col-xxl-2 sidebar">
          <div className="sidebar-header">
            <h2>Investments</h2>
          </div>
          <div className="sidebar-menu">
            <h5 className="text-dark">Filter by:</h5>
            <div>
              <label>
                <input type="checkbox" value="Stocks" checked={filter.Stocks} onChange={handleCheckbox} />
                <span className="custom-checkbox"></span> Stocks
              </label>
              <br />
              <label>
                <input type="checkbox" value="Bonds" checked={filter.Bonds} onChange={handleCheckbox} />
                <span className="custom-checkbox"></span> Bonds
              </label>
              <br />
              <label>
                <input type="checkbox" value="mf" checked={filter.mf} onChange={handleCheckbox} />
                <span className="custom-checkbox"></span> Mutual Funds
              </label>
            </div>
          </div>
        </div>


        <div className="col-md-8 col-lg-8 col-xl-9 col-xxl-10 mt-4">
          <div className="row justify-content-center">

            <div className="col-12 col-md-11">
              <nav aria-label="breadcrumb" className='d-inline-block'>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><Link className='text-decoration-none' style={{ "color": "#427bc7" }} to="/">Home</Link></li>
                  <li class="breadcrumb-item"><Link className='text-decoration-none' style={{ "color": "#427bc7" }} to="/onlinebanking">Online Banking</Link></li>
                  <li class="breadcrumb-item active" aria-current="page">Investments</li>
                </ol>
              </nav>

              <div className="d-inline-block float-end me-1">
                <div className="balance-card">
                  <span>Balance : </span><h5 className='d-inline-block'>${cashBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</h5>
                </div>
              </div>
            </div>

            {filterData.map((inv, index) => (
              <div key={index} className="col-12 col-md-11">
                <div className="investment-card tilted-card">
                  <div className="card-body d-flex position-relative">
                    <div className="flex-grow-1">
                      <h1 className='card-title-before d-none d-md-block'>{inv.name}</h1>
                      <h3 className="card-title">{inv.name}</h3>
                      <div className="card-text">
                        <p className="my-1 my-md-2 d-inline-block text-white me-4">Risk: <span className="text-danger fw-semibold">{inv.risk}</span></p>
                        <p className="my-1 my-md-2 d-inline-block text-white me-4">Expected Returns: <span className="text-success fw-semibold">{inv.expectedReturns}</span></p>
                        <p className="my-1 my-md-2 d-inline-block text-white me-4">Duration: <span className="text-warning">{inv.duration}</span></p>
                        <p className="my-1 my-md-2 d-inline-block text-white">Company: <span className="text-secondary fw-bold">{inv.company}</span></p>
                        <p className="mx-4 inv-card-amount d-block">Amount : <span className="d-block d-sm-inline-block text-white fs-3">${inv.amount}</span></p>
                      </div>
                    </div>
                    <div className="button-container">
                      <Link className="text-decoration-none">
                        <button disabled={isDisabled[index]} className="border-0 vertical-button tilted-button" onClick={() => handleInvest(index)}>
                        {isDisabled[index] ? "Invested" : "Invest"}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}


          </div>
        </div>
      </div>
    </div>
  );
}
