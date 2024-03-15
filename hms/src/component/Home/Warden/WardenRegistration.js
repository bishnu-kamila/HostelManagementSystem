import React, { useState } from 'react'
import WardenService from '../../../Service/Warden.Service';

const WardenRegistration = () => {

const[warden,setWarden]=useState({
    regdId:"",
    password:"",
    firstName:"",
    lastName:"",
    gender:"",
    eMail:"",
    hostelNo:"",
  
});

const [msg,setMsg]=useState("");

const handleChange=(e)=>{
  const value=e.target.value;
  setWarden({...warden,[e.target.name]:value});
}

const wardenRegister=(e)=>{
  e.preventDefault();
  WardenService.saveWarden(warden).then((res)=>{
    console.log("Registration Successfully");
    setMsg("Registration Successfully");
    setWarden({
        regdId:"",
        password:"",
        firstName:"",
        lastName:"",
        gender:"",
        eMail:"",
        hostelNo:"",
    });
  }).catch((error)=>{
    console.log(error);
  })
}


  return (
    <div>
      {/* <h1>Student Registration</h1> */}
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <div className='card'>
              <div className='card-header fs-3 text-center'>
                  Warden registration
              </div>
              {
                msg &&
                <p className='fs-4 text-center text-success'>{msg}</p>
              }
              <div className='card-body'>
                <form onSubmit={(e)=>wardenRegister(e)}>
                  <div className='mb-3'>
                    <label>Enter Regd_Id</label>
                    <input type='text' name='regdId' className='form-control'
                    onChange={(e)=>handleChange(e)}
                    value={warden.regdId}
                    ></input>
                  </div>
                  <div className='mb-3'>
                    <label>Enter Password</label>
                    <input type='password' name='password' className='form-control' 
                    onChange={(e)=>handleChange(e)}
                    value={warden.password}
                    ></input>
                  </div>

                  <div className='mb-3'>
                    <label>Enter First Name</label>
                    <input type='text' name='firstName' className='form-control' onChange={(e)=>handleChange(e)}
                    value={warden.firstName}
                    ></input>
                  </div>
                  <div className='mb-3'>
                    <label>Enter Last Name</label>
                    <input type='text' name='lastName' className='form-control' onChange={(e)=>handleChange(e)}
                    value={warden.lastName}
                    ></input>
                  </div>
                  
                  <div className='mb-3'>
                    <label>Enter Gender</label>
                    <input type='tel' name='gender' className='form-control' onChange={(e)=>handleChange(e)}
                    value={warden.gender}
                    ></input>
                  </div>
                  
                  
                  
                  
                  
                  <div className='mb-3'>
                    <label>Enter E_Mail</label>
                    <input type='email' name='eMail' className='form-control' onChange={(e)=>handleChange(e)}
                    value={warden.eMail}
                    ></input>
                  </div>

                    

                  <div className='mb-3'>
                    <label>Enter Hostel No</label>
                    <input type='text' name='hostelNo' className='form-control' onChange={(e)=>handleChange(e)}
                    value={warden.hostelNo}
                    ></input>
                  </div>
                  
                  <button className='btn btn-primary col-md-12'>Register</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WardenRegistration
