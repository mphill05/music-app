'use client';

import { FormEvent, useState } from 'react';
import styles from './form.module.scss';
import Link from 'next/link';
import {
  FaEnvelope,
  FaFacebook,
  FaGoogle,
  FaLock,
  FaLockOpen,
  FaUser,
} from 'react-icons/fa';

export default function Form() {
  const [passwordType, setPasswordType] = useState('password');

  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch(`/api/auth/register`, {
      method: 'POST',
      body: JSON.stringify({
        email: formData.get('email'),
        password: formData.get('password'),
      }),
    });
    console.log(response);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.content}>
        <header>Signup</header>
        <form action="#">
          <div className={styles.field}>
            <span className="fa fa-user">
              <FaUser />
            </span>
            <input name="name" type="name" placeholder=" " required />
            <label htmlFor="name">Name</label>
          </div>
          <div className={`${styles.field} ${styles.space}`}>
            <div className={styles.field}>
              <span className="fa fa-user">
                <FaEnvelope />
              </span>
              <input name="email" type="email" placeholder=" " required />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className={`${styles.field} ${styles.space}`}>
            <span className="fa fa-lock">
              <FaLock />
            </span>
            <input
              name="password"
              type="password"
              className={styles.passKey}
              placeholder=" "
              required
            />
            <label htmlFor="password">Password</label>
            <span className={styles.show} onClick={togglePasswordVisibility}>
              {passwordType === 'password' ? 'SHOW' : 'HIDE'}
            </span>
          </div>
          <div className={`${styles.field} ${styles.space}`}>
            <span className="fa fa-lock">
              <FaLockOpen />
            </span>
            <input
              name="password"
              type="password"
              className={styles.passKey}
              placeholder=" "
              required
            />
            <label htmlFor="password">Confirm Password</label>
          </div>
          <div className={styles.pass}></div>
          <div className={styles.field}>
            <button type="submit" value="SIGNUP">
              SIGNUP
            </button>
          </div>
        </form>
        <div className={styles.login}>Or signup with</div>
        <div className={styles.links}>
          <div className={styles.google}>
            <i className="fab fa-google">
              <FaGoogle />
            </i>
          </div>
          <div className={styles.facebook}>
            <i className="fab fa-facebook-f">
              <FaFacebook />
            </i>
          </div>
        </div>
        <div className={styles.signup}>
          {'Already have an account? '}
          <Link href={'/login'}>Login</Link>
        </div>
      </div>
    </form>
  );
}
