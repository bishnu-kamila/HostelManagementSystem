import React, { useState } from 'react'
import CanteenService from '../../../Service/CanteenService';

const CanteenRegistration = () => {

const[canteen,setCanteen]=useState({
  regdId:"",
  password:"",
  canteenName:"",
  ownerName :"",
  eMail:"",
  foodLicense:"",
  canteenType:"",
  
});

const [msg,setMsg]=useState("");

const handleChange=(e)=>{
  const value=e.target.value;
  setCanteen({...canteen,[e.target.name]:value});
}

const CanteenRegister=(e)=>{
  e.preventDefault();
  CanteenService.saveCanteen(canteen).then((res)=>{
    console.log("Registration Successfully");
    setMsg("Registration Successfully");
    setCanteen({
      regdId:"",
  password:"",
  canteenName:"",
  ownerName :"",
  eMail:"",
  foodLicense:"",
  canteenType:"",
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
                  Canteen registration
              </div>
              {
                msg &&
                <p className='fs-4 text-center text-success'>{msg}</p>
              }
              <div className='card-body'>
                <form onSubmit={(e)=>CanteenRegister(e)}>
                  <div className='mb-3'>
                    <label>Enter Regd_Id</label>
                    <input type='text' name='regdId' className='form-control'
                    onChange={(e)=>handleChange(e)}
                    value={canteen.regdId}
                    ></input>
                  </div>
                  <div className='mb-3'>
                    <label>Enter Password</label>
                    <input type='password' name='password' className='form-control' 
                    onChange={(e)=>handleChange(e)}
                    value={canteen.password}
                    ></input>
                  </div>

                  <div className='mb-3'>
                    <label>Enter Canteen Name</label>
                    <input type='text' name='canteenName' className='form-control' onChange={(e)=>handleChange(e)}
                    value={canteen.canteenName}
                    ></input>
                  </div>
                  <div className='mb-3'>
                    <label>Enter Owner Name</label>
                    <input type='text' name='ownerName' className='form-control' onChange={(e)=>handleChange(e)}
                    value={canteen.ownerName}
                    ></input>
                  </div>
                  <div className='mb-3'>
                    <label>Enter E_Mail</label>
                    <input type='email' name='eMail' className='form-control' onChange={(e)=>handleChange(e)}
                    value={canteen.eMail}
                    ></input>
                  </div>
                  <div className='mb-3'>
                    <label>Enter Food Liscence</label>
                    <input type='file' name='foodLicense' className='form-control' onChange={(e)=>handleChange(e)}
                    value={canteen.foodLicense}
                    ></input>
                  </div>
                  <div className='mb-3'>
                    <label>Enter Canteen Type</label>
                    <input type='text' name='canteenType' className='form-control' onChange={(e)=>handleChange(e)}
                    value={canteen.canteenType}
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

export default CanteenRegistration
