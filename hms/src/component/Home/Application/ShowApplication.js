import React, { useEffect, useState } from 'react'
import StudentService from '../../../Service/Student.service';
import { Link } from 'react-router-dom';
import ApplicationService from '../../../Service/Application.Service';

const ShowAllApplication = () => {

    const[applicationList,setApplicationList]=useState([]);
    const [msg,setMsg]=useState("");
    useEffect(()=>{
        init();
    },[]);
    const init=()=>{
        ApplicationService.getAllApplication().then((res)=>{
            console.log(res.data);
            setApplicationList(res.data);
        }).catch((Error)=>{
            console.log(Error);
        });
    }

const deleteApplication=(id)=>{
    ApplicationService.deleteApplication(id).then((res)=>{
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
                        All Application List
                        {
                msg &&
                <p className='fs-4 text-center text-success'>{msg}</p>
              }
                    </div>
                    <div className='card-body'>
                    <table border='1' bgcolor='yellow'>
  <thead>
    
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Regd_No</th>
      <th scope="col">Notification Subject</th>
      <th scope="col">Parent Approval</th>
      <th scope="col">Hod Approval</th>
      
    </tr>
  </thead>
  <tbody>
  {
        applicationList.map((P,num)=>(

       
    <tr>
      
      <td>{num+1}</td>
      <td>{P.regdNo}</td>
      <td>{P.applicationSub}</td>
      <td>{P.parentApproval}</td>
      <td>{P.hodApproval}</td>
      
      <td>
        <Link to={'/editApplication/'+P.id} className='btn btn-sm btn-primary'>Edit</Link>
      </td>
      <td>
      <button onClick={()=>deleteApplication(P.id)} className='btn btn-sm btn-danger ms-1'>Delete</button>
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

export default ShowAllApplication
