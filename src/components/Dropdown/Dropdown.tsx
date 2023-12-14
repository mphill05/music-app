import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Link from 'next/link';
import Logout from '../Logout/Logout';

import styles from './Dropdown.module.scss';
import LogoutBtn from '../Buttons/Logout/Logout';

interface DropdownProps {
  userInfo: any;
}

export const Dropdown = ({ userInfo }: DropdownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const getClickOutside = (e: MouseEvent) => {
      if (isDropdownOpen && e.target !== menuRef.current) {
        setIsDropdownOpen(false);
      }
    };
    window.addEventListener('click', getClickOutside);
    return () => {
      window.removeEventListener('click', getClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <li className={styles.userMenuContainer}>
      <div
        className={`${
          isDropdownOpen ? styles.userDataActive : styles.userData
        }`}
        onClick={(e) => {
          e.stopPropagation();
          setIsDropdownOpen(!isDropdownOpen);
        }}
      >
        {userInfo}
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.ul
              initial={{ opacity: 0, y: '-50%' }}
              animate={{ opacity: 1, y: '0%' }}
              exit={{ opacity: 0, y: '-50%', transition: { duration: 0.35 } }}
              transition={{ type: 'spring', stiffness: 100, duration: 0.75 }}
              className={`${styles.userMenu} ${styles.userName}`}
              ref={menuRef}
            >
              <div className={styles.userMenuDetails}>
                <li>{userInfo.user?.name || 'Name'}</li>
                <li>{userInfo.user?.email || 'email@email.com'}</li>
              </div>
              <br />
              <Link href="/account">Account</Link>
              <Link href="/orders">Orders</Link>
              <Link href="/settings">Settings</Link>
              <a>
                <Logout />
              </a>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </li>
  );
};
