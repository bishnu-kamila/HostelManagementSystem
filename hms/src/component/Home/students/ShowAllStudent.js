import React, { useEffect, useState } from 'react'
import StudentService from '../../../Service/Student.service';
import { Link } from 'react-router-dom';

const ShowAllStudent = () => {

    const[studentList,setStudentList]=useState([]);
    const [msg,setMsg]=useState("");
    useEffect(()=>{
        init();
    },[]);
    const init=()=>{
        StudentService.getAllStudent().then((res)=>{
            console.log(res.data);
            setStudentList(res.data);
        }).catch((Error)=>{
            console.log(Error);
        });
    }

const deleteStudent=(id)=>{
    StudentService.deleteStudent(id).then((res)=>{
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
                    <table border='1' bgcolor='yellow'>
  <thead>
    
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Regd_No</th>
      <th scope="col">Password</th>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">E_mail</th>
      <th scope="col">Mobile No</th>
      <th scope="col">Father First Name</th>
      <th scope="col">Father Last Name</th>
      <th scope="col">Father E_Mail</th>
      <th scope="col">Father Mobile No</th>
      <th scope="col">Gender</th>
      <th scope="col">Department</th>
      <th scope="col">Course</th>
      <th scope="col">Hostel Type</th>
      <th scope="col">Room No</th>
    </tr>
  </thead>
  <tbody>
  {
        studentList.map((P,num)=>(

       
    <tr>
      
      <td>{num+1}</td>
      <td>{P.regdNo}</td>
      <td>{P.password}</td>
      <td>{P.firstName}</td>
      <td>{P.lastName}</td>
      <td>{P.eMail}</td>
      <td>{P.mobileNo}</td>
      <td>{P.fatherFirstName}</td>
      <td>{P.fatherLastName}</td>
      <td>{P.fatherEmail}</td>
      <td>{P.fatherMobile_No}</td>
      <td>{P.gender}</td>
      <td>{P.department}</td>
      <td>{P.course}</td>
      <td>{P.hostelType}</td>
      <td>{P.roomNo}</td>
      <td>
        <Link to={'/editStudent/'+P.id} className='btn btn-sm btn-primary'>Edit</Link>
      </td>
      <td>
      <button onClick={()=>deleteStudent(P.id)} className='btn btn-sm btn-danger ms-1'>Delete</button>
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

export default ShowAllStudent
