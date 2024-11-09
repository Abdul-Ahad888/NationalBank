import React, { useEffect, useState } from 'react'
import HeroImage from '../assets/hero-image.png'
import { Link } from 'react-router-dom';
import homeImage from '../assets/working-laptop.jpg'
import '../style.css'

export default function Home() {

  const [amount, setAmount] = useState(1)
  const [converted, setConverted] = useState("")
  const [lastUpdate, setLastUpdate] = useState("")
  const [selectedCurrency, setSelectedCurrency] = useState("")
  const [rate, setRate] = useState("")

  // Curreny Convertor Api

  // const apiPath = 'https://v6.exchangerate-api.com/v6/0156099217d40ff9edc55fb0/latest/USD'

  // fetch(apiPath)

  //   .then(responce => {
  //     if (!responce.ok) {
  //       console.log("Network Error!")
  //     }
  //     return responce.json()
  //   })
  //   .then(data => {

  //     const coRates = data.conversion_rates
  //     setRate(coRates)
  //     setLastUpdate(data.time_last_update_utc)

  //   })

  //   .catch(err => console.log(err))

  //   useEffect(()=>{

  //     if(amount !== "" && rate[selectedCurrency]){}

  //     const convertedValue = (amount * rate[selectedCurrency]).toFixed(2)
  //     setConverted(convertedValue)

  //   },[amount, selectedCurrency, rate])

  const amountVal = amount
  const convertedVal = converted

  return (
    <>

      <section className='bg-image-home-build'>
        <div className="container">
          <div className="row justify-content-center align-items-center z-3 position-relative" style={{ height: "89vh" }}>
            <div className="text-center text-white">
              <h1 className='display-1 fw-normal'>National Bank</h1>
              <p>Approved By Millions Of User Across World Wide. Lorem ipsum dolor sit amet <br /> consectetur, adipisicing elit. Praesentium, porro.</p>
              <div className='row justify-content-center home-build-btn'>

                <div className="col-12 col-md-4 col-lg-3 col-xxl-2">
                  <div className="mx-5 mx-md-0">
                    <button className='py-0'>
                      <div className='d-flex align-items-center px-3'>
                        <div><i className='fab fa-google-play fs-2'></i></div>
                        <div className='ms-2 text-start position-relative' style={{top:"6px"}}>
                          <div><small style={{ fontSize: "10px" }}>Get It On</small></div>
                          <div className='fw-bold'><p style={{fontSize:"13px"}}>GOOGLE PLAY</p></div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>

                <div className="col-12 col-md-4 col-lg-3 col-xxl-2">
                  <div className="mx-5 mx-md-0">
                    <button className='py-0'>
                      <div className='d-flex align-items-center px-3'>
                        <div><i className='fab fa-apple fs-1'></i></div>
                        <div className='ms-2 text-start position-relative' style={{top:"6px"}}>
                          <div><small style={{ fontSize: "10px" }}>Get It On</small></div>
                          <div className='fw-bold'><p style={{fontSize:"13px"}}>APP STORE</p></div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='main-section'>
        <div className="container">
          <div className="row hero-section">

            <div className="col-12 col-lg-6">
              <div className="my-4">
                <h1 className='fw-normal display-4'> <span className='display-1' style={{ color: '#B0C4DE' }}>N</span>ational Bank Where Trust Meets Excellence.</h1>
                <p className='fs-5 fw-light'>Empowering you with secure, innovative solutions to achieve your financial goals and beyond.</p>
              </div>
            </div>

            <div className="col-12 col-lg-6 d-none d-lg-block">
              <div className="text-center">
                <img src={HeroImage} className='w-100' alt="--Image--" />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className='sec-2'>
        <div className="container-fluid my-5">
          <div className="row justify-content-center services">
            <div className="text-center">
              <h3 className='fw-bold mb-5'>Ways To Bank With Us</h3>
            </div>

            <div className="col-6 col-lg-4 col-xl-2 col-xxl-1">
              <Link to="/" style={{ "color": "transparent" }}>
                <div className="round-service m-auto">
                  <i className="fa fa-user-group fs-1"></i>
                </div>
              </Link>
              <div className="text-service text-center py-2">
                <h6 className='fw-bold'>Branches</h6>
                <p style={{ fontSize: "12px" }}>Bank With Us Via Walk To Our Branches</p>
              </div>
            </div>

            <div className="col-6 col-lg-4 col-xl-2 col-xxl-1">
              <Link to="/" style={{ "color": "transparent" }}>
                <div className="round-service m-auto">
                  <i className="fa-solid fa-credit-card fs-1"></i>
                </div>
              </Link>
              <div className="text-service text-center py-2">
                <h6 className='fw-bold'>ATM'S</h6>
                <p style={{ fontSize: "12px" }}>Get To Our Atm's For Withdrawals</p>
              </div>
            </div>

            <div className="col-6 col-lg-4 col-xl-2 col-xxl-1">
              <Link to="/onlinebanking" style={{ "color": "transparent" }}>
                <div className="round-service m-auto">
                  <i className="fa fa-laptop fs-1"></i>
                </div>
              </Link>
              <div className="text-service text-center py-2">
                <h6 className='fw-bold'>Internet Banking</h6>
                <p style={{ fontSize: "12px" }}>Bank With Us Using Your Internet Connection</p>
              </div>
            </div>

            <div className="col-6 col-lg-4 col-xl-2 col-xxl-1">
              <Link to="/" style={{ "color": "transparent" }}>
                <div className="round-service m-auto">
                  <i className="fa fa-mobile-screen fs-1"></i>
                </div>
              </Link>
              <div className="text-service text-center py-2">
                <h6 className='fw-bold'>Mobile Banking</h6>
                <p style={{ fontSize: "12px" }}>Connect With Us In Just One Touch</p>
              </div>
            </div>

            <div className="col-6 col-lg-4 col-xl-2 col-xxl-1">
              <Link to="/" style={{ "color": "transparent" }}>
                <div className="round-service m-auto">
                  <i className="fa fa-cc-visa fs-1"></i>
                </div>
              </Link>
              <div className="text-service text-center py-2">
                <h6 className='fw-bold'>Debit Cards</h6>
                <p style={{ fontSize: "12px" }}>Which Card Is Good For You?</p>
              </div>
            </div>

            <div className="col-6 col-lg-4 col-xl-2 col-xxl-1">
              <Link to="/" style={{ "color": "transparent" }}>
                <div className="round-service m-auto">
                  <i className="fa fa-headset fs-1"></i>
                </div>
              </Link>
              <div className="text-service text-center py-2">
                <h6 className='fw-bold'>Call Center</h6>
                <p style={{ fontSize: "12px" }}>Facing Problems While Banking? Our Services Is 24/7 For You.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className='sec-3'>
        <div className="container">
          <div className="row align-items-center my-5">
            <div className="col-12 col-lg-6 order-2 order-lg-1">
              <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, nesciunt.</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius labore ipsa laboriosam hic? Saepe fuga accusamus quasi aspernatur, doloremque nihil reprehenderit esse architecto odit non asperiores placeat aperiam culpa cupiditate, veniam minima voluptatibus eligendi ad ipsa odio quia laboriosam accusantium. Reprehenderit nulla veniam labore quibusdam eveniet. Velit consectetur sequi et tempora laudantium, dolore, mollitia natus animi debitis possimus reprehenderit maxime dolorem non. Reprehenderit voluptas nisi sit perspiciatis ex eum illo natus rem asperiores magnam iure repellat debitis tempore sed sint id omnis, suscipit dolores ipsa deserunt ea! Nostrum, quos reprehenderit? Officiis debitis hic nisi ipsum, dolores deserunt incidunt explicabo quae!</p>
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2">
              <div className="my-5">
              <img src={homeImage} className='img-fluid' alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
