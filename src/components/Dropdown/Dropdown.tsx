import React from 'react';
import Link from 'next/link';
import styles from './Dropdown.module.scss';

interface DropdownProps {
  isLoggedIn: boolean;
}

export const Dropdown = ({ isLoggedIn }: DropdownProps) => {
  return (
    <div className={styles.dropdown}>
      {isLoggedIn ? (
        <>
          <div className={styles.userName}>Name</div>
          <ul className={styles.menu}>
            <li>
              <Link href="/account">Account</Link>
            </li>
            <li>
              <Link href="/orders">Orders</Link>
            </li>
            <li>
              <Link href="/settings">Settings</Link>
            </li>
            <li>
              <a href="#" onClick={() => console.log('Logout')}>
                Logout
              </a>
            </li>
          </ul>
        </>
      ) : (
        <Link href="/auth">Sign In</Link>
      )}
    </div>
  );
};
