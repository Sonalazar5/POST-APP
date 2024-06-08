import React, { useState } from 'react'
import Navbar from './Navbar'


export const Search = () => {
    const [data,setData]=useState(
        {
            "name":"",
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]: event.target.value})
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
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-format">NAME</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                        </div>
                        <center>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button class="btn btn-warning" onClick={readValue}>SEARCH</button>
                        </div>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}