import { render, screen, fireEvent } from '@testing-library/react';
import AddUser from '../AddUser';

test('renders AddUser form and submits data', () => {
  const addUser = jest.fn();
  render(<AddUser addUser={addUser} />);
  
  // Fill the form
  fireEvent.change(screen.getByPlaceholderText(/Name/i), { target: { value: 'John' } });
  fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: 'john@example.com' } });
  fireEvent.change(screen.getByPlaceholderText(/Location/i), { target: { value: 'New York' } });
  
  // Submit the form
  fireEvent.click(screen.getByText(/Add User/i));

  // Check if addUser was called with the correct arguments
  expect(addUser).toHaveBeenCalledWith({ name: 'John', email: 'john@example.com', location: 'New York' });
});
