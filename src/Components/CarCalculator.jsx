import React, { useState } from 'react';
import Audi from '../assets/audi.png';
import Bmw from '../assets/bmw.png';
import BmwM5 from '../assets/bmw m5.png';
import Mercedes from '../assets/mercedes.png';
import Volvo from '../assets/volvo.png';
import Toyata from '../assets/toyota.png';
import Honda from '../assets/honda.png';

export default function CarCalculator() {
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [term, setTerm] = useState('');
  const [insurance, setInsurance] = useState('');
  const [downPay, setDownPay] = useState('');
  const [exteriorColor, setExteriorColor] = useState('');
  const [interiorColor, setInteriorColor] = useState('');
  const [totalCost, setTotalCost] = useState(0);
  const [monthlyPay, setMonthlyPay] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState(false)

  // Temporary state variables for inputs
  const [tempYear, setTempYear] = useState('');
  const [tempMake, setTempMake] = useState('');
  const [tempModel, setTempModel] = useState('');
  const [tempTerm, setTempTerm] = useState('');
  const [tempInsurance, setTempInsurance] = useState('');
  const [tempDownPay, setTempDownPay] = useState('');
  const [tempExteriorColor, setTempExteriorColor] = useState('');
  const [tempInteriorColor, setTempInteriorColor] = useState('');

  const fees = { processing: 150, registration: 1000, docs: 2800, title: 1250, saleTax: 6.5 };

  const carInventory = [
    { make: 'Audi', model: 'A6', transmission: 'Automatic', price: 56900, image: Audi },
    { make: 'Bmw', model: '3 Series', transmission: 'Automatic', price: 46900, image: Bmw },
    { make: 'Bmw', model: 'M5 E60', transmission: 'Manual', price: 52400, image: BmwM5 },
    { make: 'Mercedes', model: 'C-Class', transmission: 'Automatic', price: 45100, image: Mercedes },
    { make: 'Volvo', model: 'S60', transmission: 'Automatic', price: 41000, image: Volvo },
    { make: 'Toyota', model: 'Camry', transmission: 'Automatic', price: 25995, image: Toyata },
    { make: 'Honda', model: 'Civic-X', transmission: 'Manual', price: 24950, image: Honda },
  ];

  const [selectedCar, setSelectedCar] = useState(null);

  const handleCarCalculate = (e) => {
    e.preventDefault();
    setIsActive(true);
  
    const foundCar = carInventory.find(car => car.make === tempMake && car.model === tempModel);
    setSelectedCar(foundCar);
  
    if (!foundCar) {
      setError(true); 
      setIsActive(false);
      return;
    }
  
    const saleTax = foundCar.price * fees.saleTax / 100;
    const calculatedTotalCost = foundCar.price + parseFloat(tempInsurance) + fees.processing + fees.registration + fees.docs + fees.title + saleTax;
    setTotalCost(calculatedTotalCost);
    const downPayment = parseFloat(tempDownPay);
  
    if (downPayment >= calculatedTotalCost || downPayment <= 0) {
      setError(true); 
      setIsActive(false);
      return;
    } else {
      setError(false); 
    }
  
    setTimeout(() => {
      setIsActive(false);
  
      const afterDownPay = calculatedTotalCost - downPayment;
      const calculatedMonthlyPay = afterDownPay / parseFloat(tempTerm);
  
      setYear(tempYear);
      setMake(tempMake);
      setModel(tempModel);
      setTerm(tempTerm);
      setInsurance(tempInsurance);
      setDownPay(tempDownPay);
      setExteriorColor(tempExteriorColor);
      setInteriorColor(tempInteriorColor);
  
      setDownPayment(afterDownPay);
      setMonthlyPay(calculatedMonthlyPay);
      setShowResult(true);
    }, 2000);
  };
  

  return (
    <div className="car-calculator">
      <div className="container my-5">

        <div className="text-start">
          <h1 className="display-6 fw-normal">Car Leasing</h1>
          <p className='fw-semibold'>Quickly Get Your Car Estimate, For Bigger Plans.</p>
        </div>

        <div className="row my-5">
          {/* Car Leasing Section */}
          <div className="col-12">
            <form action="" onSubmit={handleCarCalculate}>
              <div className="leasing-section rounded-top-3 border border-1">
                <div style={{ backgroundColor: "#001c36" }} className="p-3 rounded-top-3">
                  <div className="row">
                    <div className="col-12 col-md-4">
                      <div className="mx-2 mt-2 mt-md-0">
                        <label className='fs-6 d-block text-white fw-semibold'>Year</label>
                        <select required value={tempYear} onChange={(e) => setTempYear(e.target.value)} className='w-100 border border-1 p-2'>
                          <option value="">Select Year</option>
                          <option value="2024">2024</option>
                          <option value="2023">2023</option>
                          <option value="2022">2022</option>
                          <option value="2021">2021</option>
                          <option value="2020">2020</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-12 col-md-4">
                      <div className="mx-2 mt-2 mt-md-0">
                        <label htmlFor="" className='fs-6 d-block text-white fw-semibold'>Make</label>
                        <select required onChange={(e) => { setTempMake(e.target.value) }} value={tempMake} className='w-100 border border-1 p-2'>
                          <option value="">Select Car</option>
                          <option value="Audi">Audi</option>
                          <option value="Bmw">Bmw</option>
                          <option value="Mercedes">Mercedes</option>
                          <option value="Volvo">Volvo</option>
                          <option value="Toyota">Toyota</option>
                          <option value="Honda">Honda</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-12 col-md-4">
                      <div className="mx-2 mt-2 mt-md-0">
                        <label htmlFor="" className='fs-6 d-block text-white fw-semibold'>Model</label>
                        <select required onChange={(e) => { setTempModel(e.target.value) }} value={tempModel} className='w-100 border border-1 p-2'>
                          <option value="">Select Model</option>
                          {carInventory.filter(car => car.make === tempMake).map(car => (<option key={car.model} value={car.model}>{car.model}</option>))}
                        </select>
                      </div>

                    </div>
                  </div>
                </div>

                <div className='p-4'>
                  <div className="row">
                    <div className="col-12 col-md-4">
                      <div className="mx-2 mt-4 mt-md-2">
                        <label htmlFor="" className='fs-6 d-block text-secondary fw-semibold'>Transmission</label>
                        <input required type="text" className='w-100 border border-1 p-2' placeholder={selectedCar?.transmission} readOnly />
                      </div>
                    </div>

                    <div className="col-12 col-md-4">
                      <div className="mx-2 mt-4 mt-md-2">
                        <label htmlFor="" className='fs-6 d-block text-secondary fw-semibold'>Exterior Color</label>
                        <select required onChange={(e) => { setTempExteriorColor(e.target.value) }} value={tempExteriorColor} className='w-100 border border-1 p-2'>
                          <option value="">Select Exterior Color</option>
                          <option value="Dark-Grey">Dark Grey</option>
                          <option value="Black">Black</option>
                          <option value="Forest-Misty">Forest Misty</option>
                          <option value="White">White</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-12 col-md-4">
                      <div className="mx-2 mt-4 mt-md-2">
                        <label htmlFor="" className='fs-6 d-block text-secondary fw-semibold'>Interior Color</label>
                        <select required onChange={(e) => { setTempInteriorColor(e.target.value) }} value={tempInteriorColor} className='w-100 border border-1 p-2'>
                          <option value="">Select Interior Color</option>
                          <option value="Velvet">Velvet</option>
                          <option value="Grey">Grey</option>
                          <option value="Beige">Beige</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-12 col-md-4">
                      <div className="mx-2 mt-4">
                        <label htmlFor="" className='fs-6 d-block text-secondary fw-semibold'>Down Payment</label>
                        <input required type="number" onChange={(e) => { setTempDownPay(e.target.value) }} value={tempDownPay} className='w-100 border border-1 p-2' />
                        <small className='text-danger' style={{ display: error ? "block" : "none" }}>The Amount Should Be Least Then The Actual Car Value!</small>
                      </div>
                    </div>

                    <div className="col-12 col-md-4">
                      <div className="mx-2 mt-4">
                        <label htmlFor="" className='fs-6 d-block text-secondary fw-semibold'>Terms (In Months)</label>
                        <select required onChange={(e) => { setTempTerm(e.target.value) }} value={tempTerm} className='w-100 border border-1 p-2'>
                          <option value="">Select Month</option>
                          <option value="12">12</option>
                          <option value="24">24</option>
                          <option value="36">36</option>
                          <option value="48">48</option>
                          <option value="60">60</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-12 col-md-4">
                      <div className="mx-2 mt-4">
                        <label htmlFor="" className='fs-6 d-block text-secondary fw-semibold'>Insurance Type</label>
                        <select required onChange={(e) => { setTempInsurance(e.target.value) }} value={tempInsurance} className='w-100 border border-1 p-2'>
                          <option value="">Select Insurance</option>
                          <option value="4550">Full Coverage</option>
                          <option value="2250">Liability</option>
                          <option value="1880">Collision</option>
                        </select>
                      </div>
                    </div>

                    <div className="simple-interest mt-4">
                      <button className={isActive ? "button loading" : "button"}></button>
                    </div>

                  </div>
                </div>
              </div>
            </form>
          </div>

          {showResult && (
            <div className="col-12">
              <div className="row my-4">

                <div className="col-12 col-lg-6">
                  <div className="mt-4 p-2">
                    <img src={selectedCar?.image} className='w-100' alt="" />
                  </div>
                  <div className='my-4'>
                    <label htmlFor="" className='fs-2'>Car Price :</label>
                    <h1 className='d-inline-block float-end'>${selectedCar?.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</h1>
                  </div>
                </div>

                <div className="col-12 col-lg-6">
                  <div className="row">

                    <div className="col-12 col-lg-6">
                      <div className="">
                        <h4 className='mb-4'>Payment</h4>
                        <div className="mt-3 pb-2 border-bottom border-1">
                          <label htmlFor="" className='fs-6 fw-semibold'>Processing Fees :</label>
                          <h5 className='d-inline-block float-end'>${fees.processing}</h5>
                        </div>
                        <div className="mt-3 pb-2 border-bottom border-1">
                          <label htmlFor="" className='fs-6 fw-semibold'>Registration Fees :</label>
                          <h5 className='d-inline-block float-end'>${fees.registration}</h5>
                        </div>
                        <div className="mt-3 pb-2 border-bottom border-1">
                          <label htmlFor="" className='fs-6 fw-semibold'>Docs Fees :</label>
                          <h5 className='d-inline-block float-end'>${fees.docs}</h5>
                        </div>
                        <div className="mt-3 pb-2 border-bottom border-1">
                          <label htmlFor="" className='fs-6 fw-semibold'>Title Fees :</label>
                          <h5 className='d-inline-block float-end'>${fees.title}</h5>
                        </div>
                        <div className="mt-3 pb-2 border-bottom border-1">
                          <label htmlFor="" className='fs-6 fw-semibold'>Insurance Fees :</label>
                          <h5 className='d-inline-block float-end'>${insurance}</h5>
                        </div>
                        <div className="mt-3 pb-2 border-bottom border-1">
                          <label htmlFor="" className='fs-6 fw-semibold'>Sales Tax :</label>
                          <h5 className='d-inline-block float-end'>{fees.saleTax}%</h5>
                        </div>
                        <div className="mt-3 pb-2">
                          <label htmlFor="" className='fs-6 fw-semibold'>Terms (In Month) :</label>
                          <h5 className='d-inline-block float-end'>{term}</h5>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-lg-6">
                      <div className="">
                        <h4 className='mb-4'>Car Details</h4>
                        <div className="mt-3 pb-2 border-bottom border-1">
                          <label htmlFor="" className='fs-6 fw-semibold'>Make :</label>
                          <h5 className='d-inline-block float-end'>{make}</h5>
                        </div>
                        <div className="mt-3 pb-2 border-bottom border-1">
                          <label htmlFor="" className='fs-6 fw-semibold'>Year :</label>
                          <h5 className='d-inline-block float-end'>{year}</h5>
                        </div>
                        <div className="mt-3 pb-2 border-bottom border-1">
                          <label htmlFor="" className='fs-6 fw-semibold'>Model :</label>
                          <h5 className='d-inline-block float-end'>{model}</h5>
                        </div>
                        <div className="mt-3 pb-2 border-bottom border-1">
                          <label htmlFor="" className='fs-6 fw-semibold'>Exterior Color :</label>
                          <h5 className='d-inline-block float-end'>{exteriorColor}</h5>
                        </div>
                        <div className="mt-3">
                          <label htmlFor="" className='fs-6 fw-semibold'>Interior Color :</label>
                          <h5 className='d-inline-block float-end'>{interiorColor}</h5>
                        </div>
                      </div>
                    </div>

                    <div className='mt-2 pt-3 border-top border-1'>
                      <label htmlFor="" className='fs-6'>Total Cost :</label>
                      <h5 className='d-inline-block float-end'>${totalCost.toLocaleString('en-US', { minimumFractionDigits: 2 })}</h5>
                    </div>
                    <div className='mt-2 pt-3 border-top border-1'>
                      <label className='d-inline-block'>After Down Payment :</label>
                      <h5 className='d-inline-block float-end'>${downPayment.toLocaleString('en-US', { minimumFractionDigits: 2 })}</h5>
                    </div>
                    <div className="my-3 pt-3 border-top border-1">
                      <label htmlFor="" className='fs-3 fw-semibold'>Monthly Payment :</label>
                      <h2 className='d-inline-block float-end'>${monthlyPay.toLocaleString('en-US', { minimumFractionDigits: 2 })}</h2>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div >
    </div >
  );
}
