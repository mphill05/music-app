'use client';

import { signOut } from 'next-auth/react';

export default function Logout() {
  return (
    <span
      onClick={() => {
        signOut();
      }}
      style={{ color: 'white', cursor: 'pointer' }}
    >
      Logout
    </span>
  );
}
