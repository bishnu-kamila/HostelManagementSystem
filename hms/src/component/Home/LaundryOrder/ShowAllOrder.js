import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import OrderService from '../../../Service/Order.Service';

const ShowAllOrder = () => {

    const[OrderList,setOrderList]=useState([]);
    const [msg,setMsg]=useState("");
    useEffect(()=>{
        init();
    },[]);
    const init=()=>{
        OrderService.getAllOrder().then((res)=>{
            console.log(res.data);
            setOrderList(res.data);
        }).catch((Error)=>{
            console.log(Error);
        });
    }

const deleteOrder=(id)=>{
    OrderService.deleteOrder(id).then((res)=>{
        setMsg("Delete Successfully");
        init();
    }).catch((Error)=>{
        console.log(Error);
    })
}

  return (
    <div>
      <div className=''>
        <div className=''>
            <div className=''>
                <div className='card'>
                    <div className='card-header fs-3 text-center'>
                        All Order List
                        {
                msg &&
                <p className='fs-4 text-center text-success'>{msg}</p>
              }
                    </div>
                    <div className='card-body'>
                    <table class='table table-bordered'>
  <thead>
    
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Room No</th>
      <th scope="col">How Many Clothes</th>
      
      
    </tr>
  </thead>
  <tbody>
  {
        OrderList.map((P,num)=>(

       
    <tr>
      
      <td>{num+1}</td>
      <td>{P.Name}</td>
      <td>{P.roomNo}</td>
      <td>{P.clothes}</td>
      
      
      <td>
        <Link to="" className='btn btn-sm btn-primary'>Edit</Link>
      </td>
      <td>
      <button onClick={()=>deleteOrder(P.id)} className='btn btn-sm btn-danger ms-1'>Delete</button>
      </td>
    </tr>
        ))
    }
   
  </tbody>
</table>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ShowAllOrder
