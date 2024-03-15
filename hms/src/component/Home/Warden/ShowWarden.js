import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import WardenService from '../../../Service/Warden.Service';

const ShowAllWarden = () => {

    const[wardenList,setWardenList]=useState([]);
    const [msg,setMsg]=useState("");
    useEffect(()=>{
        init();
    },[]);
    const init=()=>{
        WardenService.getAllWarden().then((res)=>{
            console.log(res.data);
            setWardenList(res.data);
        }).catch((Error)=>{
            console.log(Error);
        });
    }

const deleteWarden=(id)=>{
    WardenService.deleteWarden(id).then((res)=>{
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
                        All Student List
                        {
                msg &&
                <p className='fs-4 text-center text-success'>{msg}</p>
              }
                    </div>
                    <div className='card-body'>
                    <table class="">
  <thead>
    
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Regd_Id</th>
      <th scope="col">Password</th>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">Gender</th>
      <th scope="col">E_Mail No</th>
      <th scope="col"> Hostel_No</th>
      
    </tr>
  </thead>
  <tbody>
  {
        wardenList.map((P,num)=>(

       
    <tr>
      
      <td>{num+1}</td>
      <td>{P.regdId}</td>
      <td>{P.password}</td>
      <td>{P.firstName}</td>
      <td>{P.lastName}</td>
      <td>{P.gender}</td>
      <td>{P.eMail}</td>
      <td>{P.hostelNo}</td>
      
      <td>
        <Link to="" className='btn btn-sm btn-primary'>Edit</Link>
      </td>
      <td>
      <button onClick={()=>deleteWarden(P.id)} className='btn btn-sm btn-danger ms-1'>Delete</button>
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

export default ShowAllWarden
