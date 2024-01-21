// src/UserList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const UserListWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const UserCard = styled.div`
  border: 1px solid #ddd;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <UserListWrapper>
      <h2>User List</h2>
      {users.map((user) => (
        <UserCard key={user.id}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </UserCard>
      ))}
    </UserListWrapper>
  );
};

export default UserList;
