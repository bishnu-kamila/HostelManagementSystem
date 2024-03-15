// AdminPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StudentPageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
  background-color: lightgreen; /* Add this line for the background color */
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

const ParentHome = () => {
  return (
    <StudentPageContainer>
      <Card>
        <Link to="/showApplication"><h3>Show Application</h3></Link>
      </Card>
      <Card>
        <Link to="/editApplication"><h3>Approve Application</h3></Link>
      </Card>
      
      
    </StudentPageContainer>
  );
};

export default ParentHome;
