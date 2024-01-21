// src/UserListAxios.test.js

import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import UserListAxios from './UserListAxios';

test('renders user list fetched with Axios', async () => {
  render(<UserListAxios />);

  await waitFor(() => {
    const userListElement = screen.getByText(/User List \(Axios\)/i);
    expect(userListElement).toBeInTheDocument();
  });

  const userNames = screen.getAllByRole('listitem').map((li) => li.textContent);
  expect(userNames).toHaveLength(10); // Assuming 10 users are fetched from the API
});
