import React from 'react';

export default function Help() {

  const HandleFormSumbit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="text-center mt-5 pt-4">
            <h1>We Are Here To Help You!</h1>
            <div className="position-relative w-75 mx-auto my-4">
              <input type="text" className="form-control border border-1 fs-5 rounded-4 ps-4" style={{ padding: "12px" }} placeholder="Search" />
              <button className='border-0 bg-transparent'><i className="fa fa-search position-absolute" style={{ right: '25px', top: '35%', transform: 'translateY(-50%)', color: '#aaa' }}
              ></i></button>
            </div>
          </div>
        </div>

        <div className='my-5'>
          <div className="row text-center">

            <div className="col-12 col-lg-4">
              <div className="p-4">
                <i className='fa fa-rocket mt-4 mb-5 help-center-icon' style={{ fontSize: "50px" }}></i>
                <h4>Getting Started </h4>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, dicta.</p>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="p-4">
                <i className='fa fa-user mt-4 mb-5 help-center-icon' style={{ fontSize: "50px" }}></i>
                <h4>Accounts </h4>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, dicta.</p>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="p-4">
                <i className='fa fa-envelope mt-4 mb-5 help-center-icon' style={{ fontSize: "50px" }}></i>
                <h4>Email Recovery</h4>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, dicta.</p>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="p-4">
                <i className='fa fa-bell mt-4 mb-5 help-center-icon' style={{ fontSize: "50px" }}></i>
                <h4>Notifications </h4>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, dicta.</p>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="p-4">
                <i className='fa fa-lock mt-4 mb-5 help-center-icon' style={{ fontSize: "50px" }}></i>
                <h4>Password /Security </h4>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, dicta.</p>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="p-4">
                <i className='fa fa-circle-dollar-to-slot mt-4 mb-5 help-center-icon' style={{ fontSize: "50px" }}></i>
                <h4>Transaction Error </h4>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, dicta.</p>
              </div>
            </div>

            <div className="row justify-content-center m-0 my-5 pt-5">
              <div className="col-12 col-lg-6">
                <div className="p-2">
                  <div className="helpline-box">
                    <div className="p-4">
                      <i className='fa fa-map'></i>
                      <h5 className='mt-3 fw-semibold'>Our Address</h5>
                      <p>North Nazimbad, Karachi, Pakistan, 74400</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-3">
                <div className="p-2">
                  <div className="helpline-box">
                    <div className="p-4">
                      <i className='fa fa-envelope'></i>
                      <h5 className='mt-3 fw-semibold'>Mail Us</h5>
                      <p>nationalbank@mail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-3">
                <div className="p-2">
                  <div className="helpline-box">
                    <div className="p-4">
                      <i className='fa fa-phone'></i>
                      <h5 className='mt-3 fw-semibold'>Call Us</h5>
                      <p>+111 7777 111</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="text-center mt-5 mb-4 pt-5">
              <h1 className='fw-bold'>Having Trouble?</h1>
              <p>Leave us a message, and we'll take care of the rest!</p>
            </div>

            <div className="row justify-content-center">
              <div className="col-12 col-md-8 col-lg-7">
                <form className="form" onSubmit={HandleFormSumbit}>
                  <div className="row">
                    <div className="col-12">
                      <div className="p-2">
                        <div className="input-group">
                          <span className="input-group-text p-3"><i className="fas fa-user"></i></span>
                          <input className="form-control" type="text" placeholder="Name" required/>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="p-2">
                        <div className="input-group">
                          <span className="input-group-text p-3"><i className="fas fa-envelope"></i></span>
                          <input className="form-control" type="text" placeholder="Email Address" required/>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="p-2">
                        <div className="input-group">
                          <span className="input-group-text p-3"><i className="fas fa-comment"></i></span>
                          <textarea className="form-control p-3" rows="10" placeholder="Message"required></textarea>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="p-2">
                        <button className="btn-theme-fill w-100">Send</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>


          </div>
        </div>

      </div>
    </div>
  );
}
