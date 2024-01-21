// src/UserListFetch.test.js

import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import UserListFetch from './UserListFetch';

test('renders user list fetched with Fetch API', async () => {
  render(<UserListFetch />);

  await waitFor(() => {
    const userListElement = screen.getByText(/User List \(Fetch\)/i);
    expect(userListElement).toBeInTheDocument();
  });

  const userNames = screen.getAllByRole('listitem').map((li) => li.textContent);
  expect(userNames).toHaveLength(10); // Assuming 10 users are fetched from the API
});
