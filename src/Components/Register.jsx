import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Register() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [togglePasswordView, setTogglePasswordView] = useState('password')
    const [toggleConfirmPasswordView, setToggleConfirmPasswordView] = useState('password')
    const [gender, setGender] = useState('')

    // Error State Handling

    const [errorFirstName, setErrorFirstName] = useState(false)
    const [errorLastName, setErrorLastName] = useState(false)
    const [errorEmail, setErrorEmail] = useState(false)
    const [errorCountry, setErrorCountry] = useState(false)
    const [errorCity, setErrorCity] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    const [errorConfirmPassword, setErrorConfirmPassword] = useState(false)

    const navigate = useNavigate()

    const handlePassView = () => {
        if(togglePasswordView === "password"){
            setTogglePasswordView("text")
        }
        else{
            setTogglePasswordView("password")
        }
    }

    const handleConfirmPassView = () => {
        if(toggleConfirmPasswordView === "password"){
            setToggleConfirmPasswordView("text")
        }
        else{
            setToggleConfirmPasswordView("password")
        }
    }

    const handleSumbit = (e) => {
        e.preventDefault()

        if (!/^[a-zA-Z\s]+$/.test(firstName)) {
            setErrorFirstName(true);
            return;
        }
        else {
            setErrorFirstName(false)
        }

        if (!/^[a-zA-Z\s]+$/.test(lastName)) {
            setErrorLastName(true);
            return;
        }
        else {
            setErrorLastName(false)
        }

        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            setErrorEmail(true);
            return;
        }
        else {
            setErrorEmail(false)
        }

        if (!/^[a-zA-Z\s]+$/.test(country)) {
            setErrorCountry(true);
            return;
        }
        else {
            setErrorCountry(false)
        }

        if (!/^[a-zA-Z\s]+$/.test(city)) {
            setErrorCity(true);
            return;
        }
        else {
            setErrorCity(false)
        }

        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password)) {
            setErrorPassword(true);
        } else {
            setErrorPassword(false);
        }

        if (confirmPassword !== password) {
            setErrorConfirmPassword(true);
        } else {
            setErrorConfirmPassword(false);
        }

        localStorage.setItem("FirstName", firstName)
        localStorage.setItem("LastName", lastName)
        localStorage.setItem("Email", email)
        localStorage.setItem("Age", age)
        localStorage.setItem("Country", country)
        localStorage.setItem("City", city)
        localStorage.setItem("Password", password)
        localStorage.setItem("Gender", gender)

        navigate('/login')

    }

    return (
        <div>
            <div className='position-absolute top-0 start-0'>
                <Link className='text-decoration-none' to='/'>
                    <button className='m-4 btn-theme-outline'>Go Back</button>
                </Link>
            </div>
            <div className="container">
                <div className="row justify-content-center align-items-center vh-100">
                    <div className="col-12 col-lg-6">
                        <img className='img-fluid' src="https://img.freepik.com/premium-vector/online-registration-illustration-design-concept-websites-landing-pages-other_108061-938.jpg" alt="" />
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="">
                            <h1 className='fw-semibold'><span className='pb-2' style={{ borderBottom: "4px solid #00284e" }}>Reg</span>istration</h1>
                        </div>
                        <div className='pt-5'>

                            <form action="" onSubmit={handleSumbit}>
                                <div className="row">
                                    <div className="col-12 col-lg-6">
                                        <div className="py-1">
                                            <label htmlFor="" className='fw-bold'>First Name : </label>
                                            <input className='d-block input-target-border pt-4 pb-2 w-100 border-bottom border-0' type="text" placeholder='Enter Your First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                                            <small className='text-danger' style={{ display: errorFirstName ? "block" : "none" }}>First Name Only Contains Alphabets!</small>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <div className="py-1">
                                            <label htmlFor="" className='fw-bold'>Last Name : </label>
                                            <input className='d-block input-target-border pt-4 pb-2 w-100 border-bottom border-0' type="text" placeholder='Enter Your Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                                            <small className='text-danger' style={{ display: errorLastName ? "block" : "none" }}>Last Name Only Contains Alphabets!</small>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <div className="pt-4">
                                            <label htmlFor="" className='fw-bold'>Email : </label>
                                            <input className='d-block input-target-border pt-4 pb-2 w-100 border-bottom border-0' type="text" placeholder='Enter Your Email Address' value={email} onChange={(e) => setEmail(e.target.value)} required />
                                            <small className='text-danger' style={{ display: errorEmail ? "block" : "none" }}>Email Is Not Correct</small>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <div className="pt-4">
                                            <label htmlFor="" className='fw-bold'>Age : </label>
                                            <input className='d-block input-target-border pt-4 pb-2 w-100 border-bottom border-0' type="number" placeholder='Enter Your Age' value={age} onChange={(e) => setAge(e.target.value)} required />
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <div className="pt-4">
                                            <label htmlFor="" className='fw-bold'>Country : </label>
                                            <input className='d-block input-target-border pt-4 pb-2 w-100 border-bottom border-0' type="text" placeholder='Enter Your Country' value={country} onChange={(e) => setCountry(e.target.value)} required />
                                            <small className='text-danger' style={{ display: errorCountry ? "block" : "none" }}>Country Name Should Be In Alphabets!</small>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <div className="pt-4">
                                            <label htmlFor="" className='fw-bold'>City : </label>
                                            <input className='d-block input-target-border pt-4 pb-2 w-100 border-bottom border-0' type="text" placeholder='Enter Your City' value={city} onChange={(e) => setCity(e.target.value)} required />
                                            <small className='text-danger' style={{ display: errorCity ? "block" : "none" }}>City Name Should Be In Alphabets!</small>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <div className="pt-4">
                                            <label htmlFor="" className='fw-bold'>Password : </label>
                                            <div className="position-relative">
                                                <input className='d-block input-target-border pt-4 pb-2 w-100 border-bottom border-0' type={togglePasswordView} placeholder='Enter Your Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                                                <i className='fa fa-eye position-absolute end-0' style={{ top: "25px", cursor:"pointer"}} onClick={handlePassView}></i>
                                            </div>
                                            <small className='text-danger' style={{ display: errorPassword ? "block" : "none" }}>Password Must Contains UpperCase, LowerCase, Number, Special Character And Atleast Contains 8 Characters</small>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <div className="pt-4">
                                            <label htmlFor="" className='fw-bold'>Confirm Password : </label>
                                            <div className="position-relative">
                                                <input className='d-block input-target-border pt-4 pb-2 w-100 border-bottom border-0' type={toggleConfirmPasswordView} placeholder='Enter Your Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                                                <i className='fa fa-eye position-absolute end-0' style={{ top: "25px", cursor:"pointer"}} onClick={handleConfirmPassView}></i>
                                            </div>
                                            <small className='text-danger' style={{ display: errorConfirmPassword ? "block" : "none" }}>Password Should Be Same!</small>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="pt-4">
                                            <label htmlFor="" className='fw-bold mb-2'>Gender : </label>
                                            <div>
                                                <div className="row">
                                                    <div className="col-4">
                                                        <input className='me-2' type="radio" name='1' value="Male" required onChange={(e) => { setGender(e.target.value) }} />
                                                        <label htmlFor="" className='fw-bold'>Male </label>
                                                    </div>
                                                    <div className="col-4">
                                                        <input className='me-2' type="radio" name='1' required value="FeMale" onChange={(e) => { setGender(e.target.value) }} />
                                                        <label htmlFor="" className='fw-bold'>FeMale </label>
                                                    </div>
                                                    <div className="col-4">
                                                        <input className='me-2' type="radio" name='1' value="Other" required onChange={(e) => { setGender(e.target.value) }} />
                                                        <label htmlFor="" className='fw-bold'>Other </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="mt-5">
                                            <p className='text-danger fw-semibold'>Donnot Enter Your Real Details / Credentials !</p>
                                            <button className='btn-theme-fill w-100'>Register</button>
                                        </div>
                                    </div>

                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
