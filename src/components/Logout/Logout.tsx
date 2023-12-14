'use client';

import { signOut } from 'next-auth/react';
import styles from './Logout.module.scss';
import LogoutBtn from '../Buttons/Logout/Logout';

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
      <LogoutBtn />
    </button>
  );
}
