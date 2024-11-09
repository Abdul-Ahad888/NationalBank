import React, { useEffect, useState } from 'react';

export default function Loans() {

  // State For Loan Inputs
  const [inputLoanAmount, setInputLoanAmount] = useState('')
  const [inputLoanMonth, setInputLoanMonth] = useState('')
  const [inputLoanTime, setInputLoanTime] = useState('')

  // State For Calculated Loan Details
  const [loanAmount, setLoanAmount] = useState('');
  const [loanFee, setLoanFee] = useState('');
  const [totalLoan, setTotalLoan] = useState('');
  const [loanDueDate, setLoanDueDate] = useState('');
  const [loanMonthlyPay, setLoanMonthlyPay] = useState('');

  // State For Error Handling
  const [showInputLoanError, setShowInputLoanError] = useState(false)
  const [showInputLoanMonthError, setShowInputLoanMonthError] = useState(false)

  // State Handling For Current Loan 
  const [showCurrentLoan, setShowCurrentLoan] = useState(() => {
    const currentMonthlyLoan = localStorage.getItem('currentLoanMonthlyPay');
    const currentTotalLoan = localStorage.getItem('currentTotalLoan');
    return currentMonthlyLoan && currentTotalLoan ? true : false;
  });

  useEffect(() => {

    const monthlyLoan = JSON.parse(localStorage.getItem('currentLoanMonthlyPay'));
    const totalLoan = JSON.parse(localStorage.getItem('currentTotalLoan'));
    const dueDate = localStorage.getItem('currentDueDate');

    setCurrentMonthlyLoan(monthlyLoan);
    setCurrentTotalLoan(totalLoan);
    setCurrentDueDate(dueDate);

    if (monthlyLoan && totalLoan) {
      setShowCurrentLoan(true);
    }

  }, [])

  const [currentMonthlyLoan, setCurrentMonthlyLoan] = useState(() => {
    const currentMonthlyLoan = localStorage.getItem('currentLoanMonthlyPay')
    return JSON.parse(currentMonthlyLoan)
  })

  const [currentTotalLoan, setCurrentTotalLoan] = useState(() => {
    const currentLoan = localStorage.getItem('currentTotalLoan')
    return JSON.parse(currentLoan)
  })

  const [currentDueDate, setCurrentDueDate] = useState(() => {
    const currentDueDate = localStorage.getItem('currentDueDate')
    return currentDueDate
  })

  // State For Loading Button
  const [isActive, setIsActive] = useState(false);

  // Load cash balance as a number from localStorage
  const [cashBalance, setCashBalance] = useState(() => {
    const savedCash = localStorage.getItem('cashBalance')
    return JSON.parse(savedCash)
  })

  // Form Handler For Loan Form
  const handleLoanForm = (e) => {
    e.preventDefault();

    // Convert and validate inputs
    const loanAmount = parseFloat(inputLoanAmount);
    const loanMonths = parseInt(inputLoanMonth);

    // Form Error Handling
    if (isNaN(loanAmount)) {
      setShowInputLoanError(true)
      return;
    }
    else {
      setShowInputLoanError(false)
    }

    if (isNaN(loanMonths)) {
      setShowInputLoanMonthError(true)
      return;
    }
    else {
      setShowInputLoanMonthError(false)
    }

    setTimeout(() => {
      setIsActive(false);
      const renueFee = loanAmount / 10;
      const grandTotalLoan = loanAmount + renueFee;

      setLoanAmount(inputLoanAmount)
      setLoanFee(renueFee);
      setTotalLoan(grandTotalLoan);

      // Monthly Loan Calculation
      const monthlyLoan = grandTotalLoan / loanMonths
      setLoanMonthlyPay(monthlyLoan.toFixed(2))

      // Calculate due date
      const dueDate = new Date(inputLoanTime);
      dueDate.setMonth(dueDate.getMonth() + loanMonths);
      setLoanDueDate(dueDate.toLocaleDateString('en-US'));

    }, 2000);
    setIsActive(true);
  };


  // Handle Proceed Button To Get Loan
  const handleProceed = () => {
    if (currentTotalLoan) {
      alert("Already Having Loan")
      return
    }

    if (!totalLoan) {
      alert("Calculate Loan First")
      return
    }

    const proceed = window.confirm("Are You Sure You Want To Proceed")

    if (!proceed) {
      return
    }

    if (new Date(inputLoanTime).toISOString().split('T')[0] !== currentDate) {
      return
    }

    const updatedCash = parseFloat(loanAmount) + cashBalance
    setCashBalance(updatedCash)
    localStorage.setItem('cashBalance', JSON.parse(updatedCash))

    localStorage.setItem('currentTotalLoan', JSON.parse(totalLoan))
    localStorage.setItem('currentLoanMonthlyPay', JSON.parse(loanMonthlyPay))
    localStorage.setItem('currentDueDate', loanDueDate)

    setCurrentTotalLoan(totalLoan);
    setCurrentMonthlyLoan(loanMonthlyPay);
    setCurrentDueDate(loanDueDate);

    setShowCurrentLoan(true);
  }

  // Current Loan Pay Button Handling
  const payLoan = () => {
    const currentLoan = localStorage.getItem('currentTotalLoan')
    JSON.parse(currentLoan)

    if (!currentLoan) {
      return;
    }

    if(currentLoan > cashBalance){
      alert('Insufficient funds');
      return
    }

    const payLoanProceed = window.confirm(`Are You Sure You Want To Pay $${currentLoan}`)

    if (!payLoanProceed) {
      return
    }

    const updateCash = cashBalance - currentLoan
    setCashBalance(updateCash)
    localStorage.setItem('cashBalance', (updateCash))

    localStorage.removeItem('currentTotalLoan')
    localStorage.removeItem('currentLoanMonthlyPay')
    localStorage.removeItem('currentDueDate')

    setShowCurrentLoan(false);
    setCurrentTotalLoan(null);
    setCurrentMonthlyLoan(null);
    setCurrentDueDate(null);
  }

  // Get Current Date
  const currentDate = new Date().toISOString().split('T')[0]

  return (
    <div>
      <div className="container">
        <div className="row my-5">
          <div className="mb-4">
            <h1>Loan Calculator: Estimate Your Repayment</h1>
            <p className='fw-semibold'>Quickly calculate a loan payment and see a payoff schedule.</p>
          </div>

          <div className='border border-1 pb-2 pt-3 mb-4' style={{ display: showCurrentLoan ? 'block' : 'none' }}>
            <h4 className='d-inline-block mx-2 fs-1'>Current Loan :</h4>
            <div className='float-end text-end'>
              <h1 className='fw-bold' style={{ color: "#001c36" }}>${currentTotalLoan}</h1>
              <h5 className='mt-4'>Monthly Payment: ${currentMonthlyLoan}</h5>
              <p className=''>Pay Off Date : {currentDueDate}</p>
            </div>
            <button className='w-100 btn-theme-fill' onClick={payLoan}>Pay Loan</button>
          </div>

          <div className="col-12 col-lg-4">
            <div className="loan-input-detail">
              <h6 className='fw-bold'>Loan Details</h6>

              <form action="" onSubmit={handleLoanForm}>
                <label htmlFor="">Loan Amount</label>
                <input required type="text" value={inputLoanAmount} onChange={(e) => setInputLoanAmount(e.target.value)} />
                <small className='text-danger' style={{ display: showInputLoanError ? "block" : "none" }}>Input Should Contains Only Numbers Values !</small>

                <label htmlFor="">Loan term (months)</label>
                <input required type="text" value={inputLoanMonth} onChange={(e) => setInputLoanMonth(e.target.value)} />
                <small className='text-danger' style={{ display: showInputLoanMonthError ? "block" : "none" }}>Input Should Contains Only Numbers Values !</small>

                <label htmlFor="">Start date</label>
                <input required type="date" min={currentDate} className='fs-6 p-2' value={inputLoanTime} onChange={(e) => setInputLoanTime(e.target.value)} />

                <label htmlFor="">Fees</label>
                <input type="text" className='fs-6 p-2 loan-restricted-input' value={loanFee} readOnly />

                <div className='mt-4'>
                  <div className="simple-interest">
                    <button className={isActive ? "button loading" : "button"} type="submit"></button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-12 col-lg-8">

            <div className='py-3 px-4 w-100 mb-4 fs-2 fw-bold border border-1'><span className=''>Balance:</span><span className='float-end' style={{ color: "#001c36" }}>${cashBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span></div>

            <div className="border border-1 p-4">
              <h6 className='fw-bold'>Your loan estimate</h6>

              <div className="row mt-5">
                <div className="col-12 col-lg-4">
                  <div className="pb-4">
                    <h5>Monthly payment</h5>
                    <h1 className='fw-bold' style={{ color: "#00284e" }}>${loanMonthlyPay}</h1>
                  </div>
                </div>

                <div className="col-12 col-lg-8">
                  <div className='border-bottom border-2 pb-2'>
                    <h6 className='d-inline-block'>Loan Amount :</h6>
                    <h6 className='float-end d-inline-block fw-bold' style={{ color: "#00284e" }}>${loanAmount}</h6>
                  </div>

                  <div className='border-bottom border-2 pt-3 pb-2'>
                    <h6 className='d-inline-block'>Fees :</h6>
                    <h6 className='float-end d-inline-block fw-bold' style={{ color: "#00284e" }}>${loanFee}</h6>
                  </div>

                  <div className='border-bottom border-2 pt-3 pb-2'>
                    <h6 className='d-inline-block'>Total Loan Payment :</h6>
                    <h6 className='float-end d-inline-block fw-bold' style={{ color: "#00284e" }}>${totalLoan}</h6>
                  </div>

                  <div className='border-bottom border-2 pt-3 pb-2'>
                    <h6 className='d-inline-block'>Pay Off Date :</h6>
                    <h6 className='float-end d-inline-block fw-bold' style={{ color: "#00284e" }}>{loanDueDate}</h6>
                  </div>
                </div>
              </div>
            </div>

            <button className='w-100 btn-theme-fill my-2' onClick={handleProceed}>Proceed</button>
          </div>
        </div>
      </div>
    </div>
  );
}
