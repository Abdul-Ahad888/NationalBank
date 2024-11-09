import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>

      <div className="main-footer">
        <div className="container-fluid">
          <div className="row">

            <div className="col-12 col-lg-3">
              <div className="p-2 text-center text-lg-start">
                <h3>About Us</h3>
                <p className='footer-p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum maxime laudantium commodi ullam ipsum qui similique provident nemo inventore enim unde, minima ut vitae officia, dicta alias!</p>
              </div>
            </div>

            <div className="col-12 col-lg-3">
              <h3>Quick Links</h3>
              <ul className='text-white'>
                <li className='mt-4 mb-2'> <Link to='/onlinebanking' className='text-decoration-none footer-link'>Online Banking</Link> </li>
                <li className='my-2'> <Link to='/loans' className='text-decoration-none footer-link'>Loans</Link> </li>
                <li className='my-2'> <Link to='/cards' className='text-decoration-none footer-link'>Business Cards</Link> </li>
                <li className='my-2'> <Link to='/carcalculator' className='text-decoration-none footer-link'>Car Calculator</Link> </li>
              </ul>
            </div>

            <div className="col-12 col-lg-3">
              <h3>Usefull Links</h3>
              <ul className='text-white'>
                <li className='mt-4 mb-2'> <Link to='/onlinebanking' className='text-decoration-none footer-link'>Privacy Policy</Link> </li>
                <li className='my-2'> <Link to='/' className='text-decoration-none footer-link'>Services</Link> </li>
                <li className='my-2'> <Link to='/help' className='text-decoration-none footer-link'>Help</Link> </li>
              </ul>
            </div>

            <div className="col-12 col-lg-3">
              <h3>HelpLine & Services</h3>
              <div className="mt-4">
              <i className='help-ser-icon fa fa-phone fs-4'></i>
              <span className='mx-2 footer-contact'>+111 7777 111</span>
              </div>
              <div className="mt-3">
              <i className='help-ser-icon fa fa-envelope fs-4'></i>
              <span className='mx-2 footer-contact'>nationalbank@mail.com</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className="copyright-footer">
        <div className="text-start d-inline-block">
          All &copy; Copyrights Reserved
        </div>
        <div className="d-inline-block float-end">
          Created By <span className='fw-semibold'>Abdul Ahad</span>
        </div>
      </div>

    </>
  )
}
