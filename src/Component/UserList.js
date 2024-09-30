import React, { useState } from 'react';

const usersData = [
  { id: 1, name: 'John Doe', location: 'New York' },
  { id: 2, name: 'Jane Smith', location: 'Los Angeles' },
  { id: 3, name: 'Mike Johnson', location: 'Chicago' },
  { id: 4, name: 'Emily Davis', location: 'Miami' },
  // Add more users
];

function UserList() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  // Filter users by name or location
  const filteredUsers = usersData.filter(user => {
    return (
      user.name.toLowerCase().includes(searchQuery) ||
      user.location.toLowerCase().includes(searchQuery)
    );
  });

  return (
    <div>
      <h1>User List</h1>
      
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name or location"
        value={searchQuery}
        onChange={handleSearchChange}
      />

      {/* Display filtered users */}
      <ul>
        {filteredUsers.length > 0 ? (
          filteredUsers.map(user => (
            <li key={user.id}>
              {user.name} - {user.location}
            </li>
          ))
        ) : (
          <p>No users found</p>
        )}
      </ul>
    </div>
  );
}

export default UserList;
