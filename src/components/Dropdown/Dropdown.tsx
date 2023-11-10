import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react'; // Make sure to use useSession
import Logout from '@/app/logout';

import styles from './Dropdown.module.scss';

export const Dropdown = () => {
  const { data: session } = useSession(); // Correctly use useSession here
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    console.log('Toggling Dropdown'); // Debugging line
    setIsDropdownOpen(!isDropdownOpen);
  };

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
  }, [dropdownRef]);

  return (
    <>
      {session && (
        <div
          className={styles.dropdown}
          ref={dropdownRef}
          onMouseLeave={handleMouseLeave}
        >
          <button
            onClick={toggleDropdown}
            onMouseEnter={handleMouseEnter}
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
