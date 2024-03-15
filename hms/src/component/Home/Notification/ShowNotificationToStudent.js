import React, { useEffect, useState } from 'react'
import NotificationService from '../../../Service/Notification.Service';

const ShowNotificationToStudent = () => {

    const[notificationList,setNotificationList]=useState([]);
    const [msg,setMsg]=useState("");
    useEffect(()=>{
        init();
    },[]);
    const init=()=>{
        NotificationService.getAllNotification().then((res)=>{
            console.log(res.data);
            setNotificationList(res.data);
        }).catch((Error)=>{
            console.log(Error);
        });
    }

const deleteNotification=(id)=>{
    NotificationService.deleteNotification(id).then((res)=>{
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
                    <table class='table table-bordered'>
  <thead>
    
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Topic</th>
      <th scope="col">Notification</th>
      
    </tr>
  </thead>
  <tbody>
  {
        notificationList.map((P,num)=>(

       
    <tr>
      
      <td>{num+1}</td>
      <td>{P.topic}</td>
      <td>{P.notification}</td>
      
     
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

export default ShowNotificationToStudent
