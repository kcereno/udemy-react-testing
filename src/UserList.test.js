import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

test('renders one row per user', () => {
  const fakeUsers = [
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
    },
    {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
    },
    {
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
    },
  ];

  render(<UserList users={fakeUsers} />);

  const rows = within(screen.getByTestId('users')).getAllByRole('row');
  expect(rows).toHaveLength(fakeUsers.length);
});

test("it shows the user's name and email", () => {});
