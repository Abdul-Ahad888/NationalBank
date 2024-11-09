import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png'
import profile from "../../assets/profile.png"
import '../../style.css'

export default function Header() {

  const [toggleRegButton, setToggleRegButton] = useState(true)
  const [toggleLoginButton, setToggleLoginButton] = useState(true)
  const [toggleProfileButton, setToggleProfileButton] = useState(false)

  const firstName = localStorage.getItem("FirstName")
  const lastName = localStorage.getItem("LastName")

  useEffect(() => {

    const email = localStorage.getItem("Email")
    const password = localStorage.getItem("Password")
    const loginToken = localStorage.getItem("loginToken")

    if (email && password) {
      setToggleRegButton(false)
    }

    if (loginToken) {
      setToggleLoginButton(false)
      setToggleProfileButton(true)
    }

  }, [])

  return (
    <>
      <Navbar expand="lg" className="navbar">
        <Container>
          <Link to="/"><img className='logo' src={logo} alt="Bank Image" /></Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">

            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Link className='mx-2 my-2 my-lg-0 nav-links' to='/'> <i className='mx-2 mx-lg-0 d-inline-block d-lg-block text-center fa fa-home'></i><div className='text-white'>Home</div></Link>
              <Link className='mx-2 my-2 my-lg-0 nav-links' to='/onlinebanking'> <i className='mx-2 mx-lg-0 d-inline-block d-lg-block text-center fa fa-university'></i><div className="text-white">Online Banking</div></Link>
              <Link className='mx-2 my-2 my-lg-0 nav-links' to='/loans'> <i className='mx-2 mx-lg-0 d-inline-block d-lg-block text-center fa fa-dollar'></i><div className="text-white">Loans</div></Link>
              <Link className='mx-2 my-2 my-lg-0 nav-links' to='/carcalculator'> <i className='mx-2 mx-lg-0 d-inline-block d-lg-block text-center fa fa-car'></i><div className="text-white">Car Calculator</div></Link>
              <Link className='mx-2 my-2 my-lg-0 nav-links' to='/help'> <i className='mx-2 mx-lg-0 d-inline-block d-lg-block text-center fa fa-cogs'></i><div className="text-white">Help</div></Link>
            </Nav>

            <div className='ms-auto my-4'>
              <div className="" style={{ display: toggleLoginButton ? "inline-block" : "none" }}>
                <Link to='/login' className='btn-w-dyn login-btn text-center my-2 mx-3 text-decoration-none d-inline-block'>Log In <i className='fa-regular fa-user-circle fs-4 position-relative' style={{ top: "3px" }} ></i> </Link>
              </div>

              <div className="" style={{ display: toggleRegButton ? "inline-block" : "none" }}>
                <Link to='/register' className='btn-w-dyn reg-btn text-center d-inline-block text-decoration-none mx-1'>Create Account</Link>
              </div>

              <div className="" style={{ display: toggleProfileButton ? "inline-block" : "none" }}>
              <Link to="/profile" className='text-decoration-none'>
                <div className='d-flex profile-headbox'>
                  <div className='me-2'> 
                    <img src={profile} style={{ width: "45px" }} alt="" />
                  </div>

                  <div className='d-block'>
                    <div className='text-white'>Personal</div>
                    <small className='fw-bold text-white text-capitalize'>{firstName + " " + lastName}</small>
                  </div>
                </div>
              </Link>
              </div>

            </div>



          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
