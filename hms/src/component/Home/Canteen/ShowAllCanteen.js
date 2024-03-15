import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CanteenService from '../../../Service/CanteenService';

const ShowAllCanteen = () => {

    const[canteenList,setCanteenList]=useState([]);
    const [msg,setMsg]=useState("");
    useEffect(()=>{
        init();
    },[]);
    const init=()=>{
        CanteenService.getAllCanteen().then((res)=>{
            console.log(res.data);
            setCanteenList(res.data);
        }).catch((Error)=>{
            console.log(Error);
        });
    }

const deleteCanteen=(id)=>{
    CanteenService.deleteCanteen(id).then((res)=>{
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
                        All Canteen List
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
      <th scope="col">Regd_Id</th>
      <th scope="col">Password</th>
      <th scope="col">Canteen Name</th>
      <th scope="col">Owner Name</th>
      <th scope="col">E_mail</th>
      <th scope="col">Food Liscence</th>
      <th scope="col">Canteen Type</th>
      
    </tr>
  </thead>
  <tbody>
  {
        canteenList.map((P,num)=>(

       
    <tr>
      
      <td>{num+1}</td>
      <td>{P.regdId}</td>
      <td>{P.password}</td>
      <td>{P.canteenName}</td>
      <td>{P.ownerName}</td>
      <td>{P.eMail}</td>
      <td>{P.foodLicense}</td>
      <td>{P.canteenType}</td>
      
      <td>
        <Link to="" className='btn btn-sm btn-primary'>Edit</Link>
      </td>
      <td>
      <button onClick={()=>deleteCanteen(P.id)} className='btn btn-sm btn-danger ms-1'>Delete</button>
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

export default ShowAllCanteen
