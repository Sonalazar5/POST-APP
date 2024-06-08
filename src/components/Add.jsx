import React, { useState } from 'react'
import Navbar from './Navbar'

const Add = () => {
    const[data,setData]=useState(
        {
            "name":"",
            "dateofbirth":"",
            "email":"",
            "password":"",
            "confirmpassword":""
        }
    )
    const inputHandler=(event)=>{
setData({...data,[event.target.name]:event.target.value})
    } 
    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>
        <Navbar/>
   <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">NAME</label>
                    <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                </div>
                
               
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">DATE-OF-BIRTH</label>
                <input type="date"  id="" className="form-control" name='dateofbirth' value={data.dateofbirth} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">EMAIL-ID</label>
                <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} /></div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">PASSWORD</label>
               <input type="password"  id="" className="form-control" name='password' value={data.password} onChange={inputHandler} /></div>
               <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">CONFIRMPASSWORD</label>
                <input type="password" id="" className="form-control"  name='confirmpassword' value={data.confirmpassword} onChange={inputHandler}/>
                </div>
                <center>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button class="btn btn-success" onClick={readValue} >ADD</button>
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