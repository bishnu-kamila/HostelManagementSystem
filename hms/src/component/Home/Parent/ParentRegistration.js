import React, { useState } from 'react'
import ParentService from '../../../Service/ParentService';

const ParentRegistration = () => {

const[parent,setParent]=useState({
    Name:"",
    contactNo:"",
    eMail:"",
    password:"",
  
});

const [msg,setMsg]=useState("");

const handleChange=(e)=>{
  const value=e.target.value;
  setParent({...parent,[e.target.name]:value});
}

const ParentRegister=(e)=>{
  e.preventDefault();
  ParentService.saveParent(parent).then((res)=>{
    console.log("Registration Successfully");
    setMsg("Registration Successfully");
    setParent({
        Name:"",
        contactNo:"",
        eMail:"",
        password:"",
    });
  }).catch((error)=>{
    console.log(error);
  })
}


  return (
    <div>
      
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <div className='card'>
              <div className='card-header fs-3 text-center'>
                  Parent registration
              </div>
              {
                msg &&
                <p className='fs-4 text-center text-success'>{msg}</p>
              }
              <div className='card-body'>
                <form onSubmit={(e)=>ParentRegister(e)}>
                  <div className='mb-3'>
                    <label>Enter Name</label>
                    <input type='text' name='Name' className='form-control'
                    onChange={(e)=>handleChange(e)}
                    value={parent.Name}
                    ></input>
                  </div>
                  <div className='mb-3'>
                    <label>Enter Contact NO</label>
                    <input type='tel' name='contactNo' className='form-control' 
                    onChange={(e)=>handleChange(e)}
                    value={parent.contactNo}
                    ></input>
                  </div>

                  <div className='mb-3'>
                    <label>Enter E_Mail</label>
                    <input type='email' name='eMail' className='form-control' onChange={(e)=>handleChange(e)}
                    value={parent.eMail}
                    ></input>
                  </div>
                  <div className='mb-3'>
                    <label>Enter Password</label>
                    <input type='password' name='password' className='form-control' onChange={(e)=>handleChange(e)}
                    value={parent.password}
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

export default ParentRegistration
