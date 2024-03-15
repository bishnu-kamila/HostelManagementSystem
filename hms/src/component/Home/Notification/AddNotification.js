import React, { useState } from 'react'
import NotificationService from '../../../Service/Notification.Service';

const AddNotification = () => {

const[notification,setNotification]=useState({
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
  setNotification({...notification,[e.target.name]:value});
}

const NotificationRegister=(e)=>{
  e.preventDefault();
  NotificationService.saveNotification(notification).then((res)=>{
    console.log("Notification Added Successfully");
    setMsg("Notification Added Successfully");
    setNotification({
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
                <form onSubmit={(e)=>NotificationRegister(e)}>
                  <div className='mb-3'>
                    <label>Enter Topic</label>
                    <input type='text' name='topic' className='form-control'
                    onChange={(e)=>handleChange(e)}
                    value={notification.topic}
                    ></input>
                  </div>

                  <div className='mb-3'>
                    <label>Enter Notification</label>
                    <input type='text' name='notification' className='form-control' onChange={(e)=>handleChange(e)}
                    value={notification.notification}
                    ></input>
                  </div>
                 
                  <button className='btn btn-primary col-md-12'>Upload</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddNotification
