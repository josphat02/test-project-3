import React, { useState, useEffect } from 'react';
import AddUser from './AddUser';

import './Home.css';


function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then(response => response.json())
      .then(data => setUsers(data.results));
  }, []);
  // Add a new user to the list
  const addUser = (user) => {
    // Create a new user object to be added to the list
    const newUser = {
      name: { first: user.name, last: '' },
      email: user.email,
      location: { city: user.location },
    };
    setUsers([...users, newUser]);
  };

  const editUser = (index, updatedUser) => {
    const newUsers = users.slice();
    newUsers[index] = updatedUser;
    setUsers(newUsers);
  };
  const deleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };
  return (
    <div className="container">
      <h2>User Directory</h2>
      {/* Add the AddUser form */}
      <AddUser addUser={addUser} />
      <ul>
        {/* Loop through users and display them */}
        {users.map((user,index )=> (
          <li key={index}>
            {user.name.first} {user.name.last} - {user.email}
            <button onClick={() => editUser(index, prompt('Edit name:'))}>
              Edit
            </button>
            <button onClick={() => deleteUser(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;

