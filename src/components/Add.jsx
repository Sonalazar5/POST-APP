import React from 'react'
import Navbar from './Navbar'


const Add = () => {
  return (
    <div>
        <Navbar/>
   <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">NAME</label>
                    <input type="text" className="form-control" />
                </div>
                
               
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">DATE-OF-BIRTH</label>
                <input type="date" name="" id="" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">EMAIL-ID</label>
                <input type="text" className="form-control" /></div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">PASSWORD</label>
               <input type="password" name="" id="" className="form-control" /></div>
               <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">CONFIRM PASSWORD</label>
                <input type="password" name="" id="" className="form-control" />
                </div>
                <center>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button class="btn btn-success">ADD</button>
                </div>
                </center>
            </div>
        </div>
    </div>
   </div>
    </div>
  )
}

export default Add