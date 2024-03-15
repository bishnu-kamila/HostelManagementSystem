import React, { useState } from 'react'
import StudentService from '../../../Service/Student.service';
import ApplicationService from '../../../Service/Application.Service';

const AddApplication = () => {

const[application,setApplication]=useState({
    regdNo:"",
    applicationSub:"",
    parentApproval:"",
    hodApproval:"",
  
});

const [msg,setMsg]=useState("");

const handleChange=(e)=>{
  const value=e.target.value;
  setApplication({...application,[e.target.name]:value});
}

const ApplicationRegister=(e)=>{
  e.preventDefault();
  ApplicationService.saveApplication(application).then((res)=>{
    console.log("Registration Successfully");
    setMsg("Add Successfully");
    setApplication({
        regdNo:"",
        applicationSub:"",
        parentApproval:"",
        hodApproval:"",
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
                  Student registration
              </div>
              {
                msg &&
                <p className='fs-4 text-center text-success'>{msg}</p>
              }
              <div className='card-body'>
                <form onSubmit={(e)=>ApplicationRegister(e)}>
                  <div className='mb-3'>
                    <label>Enter Regd_No</label>
                    <input type='text' name='regdNo' className='form-control'
                    onChange={(e)=>handleChange(e)}
                    value={application.regdNo}
                    ></input>
                  </div>
                  <div className='mb-3'>
                    <label>Enter Application Subject</label>
                    <input type='text' name='applicationSub' className='form-control' 
                    onChange={(e)=>handleChange(e)}
                    value={application.applicationSub}
                    ></input>
                  </div>

                  
                  <button className='btn btn-primary col-md-12'>Add Application</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddApplication
