import React, { useEffect, useState } from 'react'
import StudentService from '../../../Service/Student.service';
import { useParams } from 'react-router';
import ApplicationService from '../../../Service/Application.Service';

const EditApplication = () => {

const[application,setApplication]=useState({
    regdNo:"",
    applicationSub:"",
    parentApproval:"",
    hodApproval:"",
});



const {id}=useParams();
console.log(id);

const [msg,setMsg]=useState("");

useEffect(()=>{
    ApplicationService.getApplicationById(id).then((res)=>{
        setApplication(res.data);
    }).catch((error)=>{
        console.log(error);
    })
},[])


const handleChange=(e)=>{
  const value=e.target.value;
  setApplication({...application,[e.target.name]:value});
}

const ApplicationRegister=(e)=>{
  e.preventDefault();
  ApplicationService.saveApplication(application).then((res)=>{
    console.log("Registration Successfully");
    setMsg("Update Successfully");
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
                  Update Application
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
                    <input type='text' name='applicationSub' className='form-control' onChange={(e)=>handleChange(e)}
                    value={application.applicationSub}
                    ></input>
                  </div>
                  <div className='mb-3'>
                    <label>Approved By Parent</label>
                    <input type='text' name='parentApproval' className='form-control' onChange={(e)=>handleChange(e)}
                    value={application.parentApproval}
                    ></input>
                  </div>
                  <div className='mb-3'>
                    <label>Approved By Hod</label>
                    <input type='text' name='hodApproval' className='form-control' onChange={(e)=>handleChange(e)}
                    value={application.hodApproval}
                    ></input>
                  </div>
                  
                  <button className='btn btn-primary col-md-12'>Update</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditApplication
