import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';

test('it shows two inputs and a button', () => {
  render(<UserForm />);

  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test('it calls onUserAdd when the form is submitted', () => {
  const mockFn = jest.fn();
  render(<UserForm onUserAdd={mockFn} />);

  // Find the two inputs
  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });

  // Simulate typing in a name
  user.click(nameInput);
  user.keyboard('John Doe');

  // Simulate typing in an email
  user.click(emailInput);
  user.keyboard('123@1234.com');

  // Find the button
  const button = screen.getByRole('button');

  // Simulate clicking the button
  user.click(button);

  // Assert that the onUserAdd function was called with the correct arguments
  expect(mockFn).toHaveBeenCalled();
  expect(mockFn).toHaveBeenCalledWith({
    name: 'John Doe',
    email: '123@1234.com',
  });
});
