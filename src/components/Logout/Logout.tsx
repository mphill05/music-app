'use client';

import { signOut } from 'next-auth/react';
import styles from './Logout.module.scss';

export default function Logout() {
  const handleLogout = () => {
    signOut({ callbackUrl: '/' });
  };

  return (
    <button
      className={styles.logoutBtnStyles}
      onClick={handleLogout}
      aria-label="Logout"
      type="button"
    >
      Logout
    </button>
  );
}
