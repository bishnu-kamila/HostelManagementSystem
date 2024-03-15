import React, { useState } from 'react'
import LaundryService from '../../../Service/Laundry.Service';

const LaundryRegistration = () => {

const[laundry,setLaundry]=useState({
    laundryId:"",
    password:"",
    laundryName:"",
    ownerName:"",
    owner_email:"",
    laundryType:"",
  
});

const [msg,setMsg]=useState("");

const handleChange=(e)=>{
  const value=e.target.value;
  setLaundry({...laundry,[e.target.name]:value});
}

const LaundryRegister=(e)=>{
  e.preventDefault();
  LaundryService.saveLaundry(laundry).then((res)=>{
    console.log("Registration Successfully");
    setMsg("Registration Successfully");
    setLaundry({
        laundryId:"",
        password:"",
        laundryName:"",
        ownerName:"",
        owner_email:"",
        laundryType:"",
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
                  Laundry registration
              </div>
              {
                msg &&
                <p className='fs-4 text-center text-success'>{msg}</p>
              }
              <div className='card-body'>
                <form onSubmit={(e)=>LaundryRegister(e)}>
                  <div className='mb-3'>
                    <label>Enter Laundry_Id</label>
                    <input type='text' name='laundryId' className='form-control'
                    onChange={(e)=>handleChange(e)}
                    value={laundry.laundryId}
                    ></input>
                  </div>
                  <div className='mb-3'>
                    <label>Enter Password</label>
                    <input type='password' name='password' className='form-control' 
                    onChange={(e)=>handleChange(e)}
                    value={laundry.password}
                    ></input>
                  </div>

                  <div className='mb-3'>
                    <label>Enter Laundry Name</label>
                    <input type='text' name='laundryName' className='form-control' onChange={(e)=>handleChange(e)}
                    value={laundry.laundryName}
                    ></input>
                  </div>
                  <div className='mb-3'>
                    <label>Enter Owner Name</label>
                    <input type='text' name='ownerName' className='form-control' onChange={(e)=>handleChange(e)}
                    value={laundry.ownerName}
                    ></input>
                  </div>
                  <div className='mb-3'>
                    <label>Enter owner E_Mail</label>
                    <input type='email' name='owner_email' className='form-control' onChange={(e)=>handleChange(e)}
                    value={laundry.owner_email}
                    ></input>
                  </div>
                  <div className='mb-3'>
                    <label>Enter Laundrt Type</label>
                    <input type='text' name='laundryType' className='form-control' onChange={(e)=>handleChange(e)}
                    value={laundry.laundryType}
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

export default LaundryRegistration
