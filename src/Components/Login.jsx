import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {

  const navigate = useNavigate()

  // Email And Password
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Email And Password Error Handling
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)

  // Toggling To View Password
  const [togglePasswordView, setTogglePasswordView] = useState('password')

  // Taking Registerd Email And Password
  const regEmail = localStorage.getItem('Email')
  const regPassword = localStorage.getItem('Password')

  // Toggle Password View
  const handlePassView = () => {
    if (togglePasswordView === "password") {
      setTogglePasswordView("text")
    }
    else {
      setTogglePasswordView("password")
    }
  }

  // Handle Login Sumbit
  const handleSumbit = (e) => {
    e.preventDefault()

    if (email !== regEmail) {
      setErrorEmail(true)
      return
    }
    else {
      setErrorEmail(false)
    }

    if (password !== regPassword) {
      setErrorPassword(true)
      return
    }
    else {
      setErrorPassword(false)
    }

    localStorage.setItem("loginToken", "approved")

    navigate('/')

  }

  return (
    <div className='bg-login'>

      <div className="position-absolute top-0 start-0">
        <Link className='text-decoration-none' to='/'>
          <button className='m-4 btn-theme-outline'>Go Back</button>
        </Link>
      </div>

      <div className="container">
        <div className="row justify-content-center align-items-center vh-100">


          <div className="col-12 col-lg-5">
            <div className="login-form-box p-5">

              <div className="text-center">
                <h1 className='mt-3'>Welcome Back</h1>
                <div className="my-4 fa-regular fa-user-circle" style={{ fontSize: '100px' }}></div>
              </div>

              <form action="" onSubmit={handleSumbit}>

                <div className="row">
                  <div className="col-12">
                    <div className="py-1">
                      <label htmlFor="" className='fw-bold'>Email : </label>
                      <input className='d-block input-target-border pt-4 pb-2 w-100 border-bottom border-0' type="text" placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} required />
                      <small className='text-danger' style={{ display: errorEmail ? "block" : "none" }}>Incorrect Email!</small>
                    </div>
                  </div>
                  <div className="col-12 mt-4">
                    <div className="py-1">
                      <div className="position-relative">
                        <label htmlFor="" className='fw-bold'>Password : </label>
                        <input className='d-block input-target-border pt-4 pb-2 w-100 border-bottom border-0' type={togglePasswordView} placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <i className='fa fa-eye position-absolute end-0' style={{ bottom: "20px", cursor: "pointer" }} onClick={handlePassView}></i>
                      </div>
                      <small className='text-danger' style={{ display: errorPassword ? "block" : "none" }}>Incorrect Password!</small>
                    </div>
                  </div>
                  <div className="col-12 mt-4">
                    <button className='btn-theme-fill w-100'>Login</button>
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
