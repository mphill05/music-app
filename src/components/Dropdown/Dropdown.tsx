import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react'; // Make sure to use useSession

import styles from './Dropdown.module.scss';
import Logout from '../Logout/Logout';

export const Dropdown = () => {
  const { data: session } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen((prevState) => !prevState);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as HTMLElement)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {session && (
        <div
          className={styles.dropdown}
          ref={dropdownRef}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button
            onClick={toggleDropdown}
            onMouseEnter={() => setIsDropdownOpen(true)}
            className={styles.userName}
          >
            {session.user?.name || 'User'}
          </button>
          {isDropdownOpen && (
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
                <Logout />
              </li>
            </ul>
          )}
        </div>
      )}
      {!session && (
        <div className={styles.authRouteLink}>
          <Link href="/login" className={styles.signupLoginText}>
            Login
          </Link>
          {' / '}
          <Link href="/register" className={styles.signupLoginText}>
            Signup
          </Link>
        </div>
      )}
    </>
  );
};
