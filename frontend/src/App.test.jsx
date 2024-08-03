import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('should render Header', async () => {
  render(<App />);

  const header = screen.getByText("Student Management");
  expect(header).toBeInTheDocument();
})
