import { render, screen } from '@testing-library/react';
import App from '../../App';
import { ThemeProvider } from '../../context/ThemeContext';
import { MemoryRouter } from 'react-router-dom';

test('toggles between dark and light mode', () => {
  render(
    <ThemeProvider>
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    </ThemeProvider>
  );

  // Check the initial button text
  expect(screen.getByText(/Switch to Dark Mode/i)).toBeInTheDocument();

  // Click the button to toggle theme
  screen.getByText(/Switch to Dark Mode/i).click();

  // Check the button text after click
  expect(screen.getByText(/Switch to Light Mode/i)).toBeInTheDocument();
});
