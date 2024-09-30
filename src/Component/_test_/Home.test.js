import { render, screen } from '@testing-library/react';
import UserList from '../UserList';
import axios from 'axios';

jest.mock('axios');

test('renders user list from API', async () => {
  const users = [
    {
      name: { first: 'John', last: 'Doe' },
      email: 'john.doe@example.com',
      location: { city: 'New York', country: 'USA' },
    },
  ];
  
  axios.get.mockResolvedValue({ data: { results: users } });

  render(<UserList />);

  // Wait for the user data to be fetched and displayed
  const userItem = await screen.findByText(/John Doe/i);
  expect(userItem).toBeInTheDocument();
  expect(screen.getByText(/john.doe@example.com/i)).toBeInTheDocument();
});
