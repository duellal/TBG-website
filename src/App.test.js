import { render, screen } from '@testing-library/react';
import Website from './Website';

test('renders learn react link', () => {
  render(<Website />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
