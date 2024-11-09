import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import charity from '../assets/charity.jpg'

export default function Donation() {

    const [cashBalance, setCashBalance] = useState(() => {
        const savedCash = localStorage.getItem('cashBalance')
        return savedCash
    })

    const [donateAmount, setDonateAmount] = useState('')
    const [showConfetti, setShowConfetti] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const handleDonate = (e) => {
        e.preventDefault()
        const amountToDonate = parseFloat(donateAmount);
        if (isNaN(amountToDonate) || amountToDonate <= 0 || amountToDonate > cashBalance) {
            alert("Please enter a valid donation amount.");
            return;
        }
        const newBalance = cashBalance - amountToDonate;
        setCashBalance(newBalance);
        setDonateAmount('');
        setShowModal(true)
        setShowConfetti(true)
        localStorage.setItem('cashBalance', newBalance.toString());
    }

    const handleModal = () => {
        setShowConfetti(false)
        setShowModal(false)
    }

    const handleQuickDonate = (amount) => {
        setDonateAmount(amount)
    }

    return (
        <div className='position-relative' style={{ overflow: "hidden" }}>
            {showConfetti && (
                <div>
                    <div class="party-popper">🎉</div>
                    <div class="cannon">
                        <div class="cannon__path cannon__path--sm cannon__path--angle-2">
                            <div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-3"></div>
                            <div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-1"></div>
                            <div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-2"></div>
                            <div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-1"></div>
                            <div class="cannon__confetti-spacer"></div>
                        </div>
                        <div class="cannon__path cannon__path--md cannon__path--angle-1">
                            <div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-2"></div>
                            <div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-2"></div>
                            <div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-3"></div>
                            <div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-1"></div>
                            <div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-4"></div>
                            <div class="cannon__confetti-spacer"></div>
                        </div>
                        <div class="cannon__path cannon__path--lg cannon__path--angle0">
                            <div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-1"></div>
                            <div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-4"></div>
                            <div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-2"></div>
                            <div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-3"></div>
                            <div class="cannon__confetti-spacer"></div>
                        </div>
                        <div class="cannon__path cannon__path--md cannon__path--angle1">
                            <div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-3"></div>
                            <div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-1"></div>
                            <div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-4"></div>
                            <div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-3"></div>
                            <div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-2"></div>
                            <div class="cannon__confetti-spacer"></div>
                        </div>
                        <div class="cannon__path cannon__path--sm cannon__path--angle2">
                            <div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-2"></div>
                            <div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-3"></div>
                            <div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-4"></div>
                            <div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-1"></div>
                            <div class="cannon__confetti-spacer"></div>
                        </div>
                    </div>
                </div>
            )}

            <div className={`modal fade ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" aria-labelledby="thankYouModalLabel" aria-hidden={!showModal} style={{ display: showModal ? 'block' : 'none' }}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="thankYouModalLabel">Thank You!</h5>
                            <button type="button" className="close fs-2 bg-transparent ms-auto border-0" onClick={handleModal}>
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Thank you for your generous donation! Your support will help us make a difference in the lives of underprivileged children.
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handleModal}>Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="m-4 position-absolute top-0 left-0">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link className='text-decoration-none' style={{ "color": "#427bc7" }} to="/">Home</Link></li>
                        <li class="breadcrumb-item"><Link className='text-decoration-none' style={{ "color": "#427bc7" }} to="/onlinebanking">Online Banking</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Donation</li>
                    </ol>
                </nav>
            </div>
            <div className="text-center my-5 p-2">
                <h1>Children Welfare Health Relief Fund</h1>
            </div>
            <div className="container-fluid bg-secondary-subtle py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <img className='w-100' src={charity} alt="" />
                            <div className="text-center w-25">
                                <h6 className='bg-dark text-white my-3 p-1'>Story</h6>
                            </div>
                            <div className="bg-white border border-1 border-secondary p-4">
                                <h4 className='mt-3 mb-4 fw-semibold'>Summary</h4>
                                <p>The Children Welfare Health Relief Fund is dedicated to improving the lives of underprivileged children by providing access to essential healthcare, nutrition, and educational support. Our mission is to ensure that every child has the opportunity to grow up healthy and achieve their full potential. With your generous support, we can provide life-saving medical treatments, nutritious meals, and educational resources to children in need. Every donation helps us bring hope and a brighter future to vulnerable children, empowering them to overcome the challenges they face daily.</p>
                                <p>Our organization works closely with local communities, healthcare providers, and educators to create sustainable, impactful programs that address the root causes of child poverty and health inequities. We believe that by focusing on early intervention and preventative care, we can dramatically improve children's lives and create lasting change. Our programs include mobile health clinics, school nutrition initiatives, and community health education, all aimed at fostering resilience and well-being for children and their families.</p>
                                <p>As we expand our reach, we’re committed to transparency and accountability, ensuring that every dollar raised goes directly towards making a difference. With ongoing support from donors and volunteers, we can continue to provide essential services to children worldwide. Join us in our mission to uplift and empower children in need—because together, we can build a world where every child has the opportunity to thrive.</p>
                                <h4 className='mt-3 mb-4 fw-semibold pt-4'>How Your Donation Will Be Used</h4>
                                <p>Your donation to the <strong>Children Welfare Health Relief Fund</strong> goes directly towards providing essential services for children in need. Every dollar helps fund:</p>
                                <ul>
                                    <li><strong>Healthcare Services</strong>: We provide access to medical treatments, vaccinations, and preventative care through partnerships with local healthcare providers.</li>
                                    <li><strong>Nutrition Programs</strong>: Your support enables us to supply nutritious meals to undernourished children, combating malnutrition and promoting healthy growth.</li>
                                    <li><strong>Educational Resources</strong>: Donations also fund educational programs, school supplies, and community learning initiatives, helping children gain the skills they need for a brighter future.</li>
                                </ul>
                                <p>Our commitment to transparency ensures that your contribution has a meaningful impact on children’s lives, delivering critical services and fostering long-term change.</p>
                                <h4 className='mt-3 mb-4 fw-semibold pt-4'>Challenge</h4>
                                <p>Children in underserved communities face numerous obstacles that prevent them from living healthy, fulfilling lives. Some of the primary challenges include:</p>
                                <ul>
                                    <li><strong>Lack of Access to Healthcare</strong>: In many regions, basic healthcare is either unavailable or unaffordable, leaving children vulnerable to preventable diseases and poor health outcomes.</li>
                                    <li><strong>Food Insecurity and Malnutrition</strong>: Without consistent access to nutritious food, children are at risk of stunted growth, weakened immune systems, and developmental delays.</li>
                                    <li><strong>Barriers to Education</strong>: Many children do not have access to quality education due to poverty, lack of resources, or social issues, limiting their future opportunities and perpetuating cycles of poverty.</li>
                                </ul>
                                <p>Our mission is to confront these challenges head-on, providing resources, support, and solutions that address the immediate needs of children while building a foundation for a better tomorrow.</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2"></div>
                        <div className="col-12 col-lg-4">
                            <div className='text-center text-white p-2 my-4 theme-bg-color'><h4 className='mt-2'>Balance : ${cashBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</h4></div>
                            <div className="donation-box">
                                <div className="text-center p-4">
                                    <h2 className='fw-semibold'>Donate</h2>
                                    <form action="" onSubmit={handleDonate}>
                                        <div className="input-group">
                                            <span className="input-group-text fs-4 fw-semibold">$</span>
                                            <input type="text"
                                                value={donateAmount}
                                                onChange={(e) => setDonateAmount(e.target.value)}
                                                className="form-control fs-3 fw-bold"
                                                style={{ color: "#00284e" }}
                                                required />
                                        </div>
                                        <button className='mt-2 w-100 border-0 btn-theme-fill'>Donate</button>
                                    </form>

                                    <div className='text-start my-4'>
                                        <h2 className='fw-semibold fs-5'>Quick Donate : </h2>
                                        <div className='d-inline-block w-50 p-1'>
                                        <button className='w-100 btn-theme-outline fw-bold' onClick={() => handleQuickDonate(5)}>5$</button>
                                        </div>
                                        <div className='d-inline-block w-50 p-1'>
                                        <button className='w-100 btn-theme-outline fw-bold' onClick={() => handleQuickDonate(10)}>10$</button>
                                        </div>
                                        <div className='d-inline-block w-50 p-1'>
                                        <button className='w-100 btn-theme-outline fw-bold' onClick={() => handleQuickDonate(50)}>50$</button>
                                        </div>
                                        <div className='d-inline-block w-50 p-1'>
                                        <button className='w-100 btn-theme-outline fw-bold' onClick={() => handleQuickDonate(100)}>100$</button>
                                        </div>
                                        <div className='d-inline-block w-100 p-1'>
                                        <button className='w-100 btn-theme-outline fw-bold' onClick={() => handleQuickDonate(500)}>500$</button>
                                        </div>
                                    </div>

                                    <div className="my-2">
                                        <small>Just $<span className='fw-normal fs-3'>1</span> Can Light Up Someone’s World with Joy</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
