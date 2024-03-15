import React, { useState } from 'react'

import AdminService from '../../../Service/Admin.Service';

const AdminRegistration = () => {
  const[admin,setAdmin]=useState({
    eMail:"",
    password:"",
    
  });
  
  const [msg,setMsg]=useState("");
  
  const handleChange=(e)=>{
    const value=e.target.value;
    setAdmin({...admin,[e.target.name]:value});
  }
  
  const AdminRegister=(e)=>{
    e.preventDefault();
    AdminService.saveAdmin(admin).then((res)=>{
      console.log("Registration Successfully");
      setMsg("Registration Successfully");
      setAdmin({
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
                  Admin registration
              </div>
              {
                msg &&
                <p className='fs-4 text-center text-success'>{msg}</p>
              }
              <div className='card-body'>
                <form onSubmit={(e)=>AdminRegister(e)}>
                  <div className='mb-3'>
                    <label>Enter E_mail</label>
                    <input type='text' name='eMail' className='form-control'
                    onChange={(e)=>handleChange(e)}
                    value={admin.eMail}
                    ></input>
                  </div>
                  <div className='mb-3'>
                    <label>Enter Password</label>
                    <input type='password' name='password' className='form-control' 
                    onChange={(e)=>handleChange(e)}
                    value={admin.password}
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

export default AdminRegistration
