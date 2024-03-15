import React, { useState } from 'react'
import OrderService from '../../../Service/Order.Service';

const LaundryOrder = () => {

const[order,setOrder]=useState({
    Name:"",
    roomNo:"",
    clothes:"",
  
});

const [msg,setMsg]=useState("");

const handleChange=(e)=>{
  const value=e.target.value;
  setOrder({...order,[e.target.name]:value});
}

const OrderRegister=(e)=>{
  e.preventDefault();
  OrderService.saveOrder(order).then((res)=>{
    console.log("Registration Successfully");
    setMsg("Order Booked Successfully");
    setOrder({
        Name:"",
        roomNo:"",
        clothes:"",
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
                  Laundry Order Booking
              </div>
              {
                msg &&
                <p className='fs-4 text-center text-success'>{msg}</p>
              }
              <div className='card-body'>
                <form onSubmit={(e)=>OrderRegister(e)}>
                  <div className='mb-3'>
                    <label>Enter Name</label>
                    <input type='text' name='Name' className='form-control'
                    onChange={(e)=>handleChange(e)}
                    value={order.Name}
                    ></input>
                  </div>
                  <div className='mb-3'>
                    <label>Enter Room_No</label>
                    <input type='text' name='roomNo' className='form-control' 
                    onChange={(e)=>handleChange(e)}
                    value={order.roomNo}
                    ></input>
                  </div>

                  <div className='mb-3'>
                    <label>Enter Clothes Number</label>
                    <input type='text' name='clothes' className='form-control' onChange={(e)=>handleChange(e)}
                    value={order.clothes}
                    ></input>
                  </div>
                  
                  <button className='btn btn-primary col-md-12'>Book</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LaundryOrder
