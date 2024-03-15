import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AdminPageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;

const Heading = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const Card = styled.div`
  width: 200px;
  height: 150px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 10px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const LaundryHome = () => {
  return (
    <div>
      <Heading>Welcome To Laundry</Heading>
      <AdminPageContainer>
        <Card>
          <Link to="/showAllOrder"><h3>All Order</h3></Link>
        </Card>

        
        <Card>
          <Link to="/showNotification"><h3>All Notifications</h3></Link>
        </Card>

        <Card>
          <Link to="/addNotification"><h3>Add Notification</h3></Link>
        </Card>
      </AdminPageContainer>
    </div>
  );
};

export default LaundryHome;
