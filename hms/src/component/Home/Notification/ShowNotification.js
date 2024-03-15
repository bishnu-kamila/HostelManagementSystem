import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NotificationService from '../../../Service/Notification.Service';

const ShowNotification = () => {
  const [notificationList, setNotificationList] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    NotificationService.getAllNotification()
      .then((res) => {
        console.log(res.data);
        setNotificationList(res.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  const deleteNotification = (id) => {
    NotificationService.deleteNotification(id)
      .then((res) => {
        setMsg("Delete Successfully");
        init();
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  return (
    <div className='container mt-4'>
      <div className='card'>
        <div className='card-header fs-3 text-center'>All Student List</div>
        {msg && (
          <p className='fs-4 text-center text-success'>{msg}</p>
        )}
        <div className='card-body'>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th scope='col'>Id</th>
                <th scope='col'>Topic</th>
                <th scope='col'>Notification</th>
                <th scope='col'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {notificationList.map((notification, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{notification.topic}</td>
                  <td>{notification.notification}</td>
                  <td>
                    <Link to='' className='btn btn-sm btn-primary'>
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteNotification(notification.id)}
                      className='btn btn-sm btn-danger ms-1'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowNotification;
