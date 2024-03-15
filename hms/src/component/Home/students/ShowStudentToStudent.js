import React, { useEffect, useState } from 'react'
import StudentService from '../../../Service/Student.service';

const ShowStudentToStudent = () => {

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
                    <table class="">
  <thead>
    
    <tr>
      <th scope="col">Id</th>
      
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      
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
      
      <td>{P.firstName}</td>
      <td>{P.lastName}</td>
      
      <td>{P.department}</td>
      <td>{P.course}</td>
      <td>{P.hostelType}</td>
      <td>{P.roomNo}</td>
      
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

export default ShowStudentToStudent
