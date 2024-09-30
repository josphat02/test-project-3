import React, { useState } from 'react';
import './AddUser.css'; // Import the CSS file
function AddUser({ addUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ name, email, location });
    setName('');
    setEmail('');
    setLocation('');
  };

  return (
    <form onSubmit={handleSubmit}className="form-container">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />
      <button type="submit">Add User</button>
    </form>
  );
}

export default AddUser;
