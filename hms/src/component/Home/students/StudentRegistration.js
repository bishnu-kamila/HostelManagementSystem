import React, { useState } from 'react'
import StudentService from '../../../Service/Student.service';

const StudentRegistration = () => {

const[students,setStudents]=useState({
  regdNo:"",
  password:"",
  firstName:"",
  lastName:"",
  eMail:"",
  mobileNo:"",
  fatherFirstName:"",
  fatherLastName:"",
  fatherEmail:"",
  fatherMobile_No:"",
  gender:"",
  department:"",
  course:"",
  hostelType:"",
});

const [msg,setMsg]=useState("");

const handleChange=(e)=>{
  const value=e.target.value;
  setStudents({...students,[e.target.name]:value});
}

const StudentRegister=(e)=>{
  e.preventDefault();
  StudentService.saveStudent(students).then((res)=>{
    console.log("Registration Successfully");
    setMsg("Registration Successfully");
    setStudents({
      regdNo:"",
      password:"",
      firstName:"",
      lastName:"",
      eMail:"",
      mobileNo:"",
      fatherFirstName:"",
      fatherLastName:"",
      fatherEmail:"",
      fatherMobile_No:"",
      gender:"",
      department:"",
      course:"",
      hostelType:"",
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
                <form onSubmit={(e)=>StudentRegister(e)}>
                  <div className='mb-3'>
                    <label>Enter Regd_No</label>
                    <input type='text' name='regdNo' className='form-control'
                    onChange={(e)=>handleChange(e)}
                    value={students.regdNo}
                    ></input>
                  </div>
                  <div className='mb-3'>
                    <label>Enter Password</label>
                    <input type='password' name='password' className='form-control' 
                    onChange={(e)=>handleChange(e)}
                    value={students.password}
                    ></input>
                  </div>

                  <div className='mb-3'>
                    <label>Enter First Name</label>
                    <input type='text' name='firstName' className='form-control' onChange={(e)=>handleChange(e)}
                    value={students.firstName}
                    ></input>
                  </div>
                  <div className='mb-3'>
                    <label>Enter Last Name</label>
                    <input type='text' name='lastName' className='form-control' onChange={(e)=>handleChange(e)}
                    value={students.lastName}
                    ></input>
                  </div>
                  <div className='mb-3'>
                    <label>Enter E_Mail</label>
                    <input type='email' name='eMail' className='form-control' onChange={(e)=>handleChange(e)}
                    value={students.eMail}
                    ></input>
                  </div>
                  <div className='mb-3'>
                    <label>Enter Contact_No</label>
                    <input type='tel' name='mobileNo' className='form-control' onChange={(e)=>handleChange(e)}
                    value={students.mobileNo}
                    ></input>
                  </div>
                  <div className='mb-3'>
                    <label>Enter Father First Name</label>
                    <input type='text' name='fatherFirstName' className='form-control' onChange={(e)=>handleChange(e)}
                    value={students.fatherFirstName}
                    ></input>
                  </div>
                  <div className='mb-3'>
                    <label>Enter Father Last Name</label>
                    <input type='text' name='fatherLastName' className='form-control' onChange={(e)=>handleChange(e)}
                    value={students.fatherLastName}
                    ></input>
                  </div>
                  <div className='mb-3'>
                    <label>Enter Father Email</label>
                    <input type='text' name='fatherEmail' className='form-control' onChange={(e)=>handleChange(e)}
                    value={students.fatherEmail}
                    ></input>
                  </div>
                  <div className='mb-3'>
                    <label>Enter Father Mobile No</label>
                    <input type='text' name='fatherMobile_No' className='form-control' onChange={(e)=>handleChange(e)}
                    value={students.fatherMobile_No}
                    ></input>
                  </div>
                  <div className='mb-3'>
                    <label>Enter Gender</label>
                    <input type='text' name='gender' className='form-control' onChange={(e)=>handleChange(e)}
                    value={students.gender}
                    ></input>
                  </div>
                  <div className='mb-3'>
                    <label>Enter Department</label>
                    <input type='text' name='department' className='form-control' onChange={(e)=>handleChange(e)}
                    value={students.department}
                    ></input>
                  </div>
                  <div className='mb-3'>
                    <label>Enter Course</label>
                    <input type='text' name='course' className='form-control' onChange={(e)=>handleChange(e)}
                    value={students.course}
                    ></input>
                  </div>
                  <div className='mb-3'>
                    <label>Enter Hostel Type</label>
                    <input type='text' name='hostelType' className='form-control' onChange={(e)=>handleChange(e)}
                    value={students.hostelType}></input>
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

export default StudentRegistration
