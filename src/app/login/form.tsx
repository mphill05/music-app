'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FormEvent, useReducer, useState } from 'react';
import styles from './form.module.scss';
import Link from 'next/link';
import { FaEnvelope, FaFacebook, FaGoogle, FaLock } from 'react-icons/fa';
import Button from '@/components/Button/Button';

export default function Form() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordType, setPasswordType] = useReducer((state) => {
    return state === 'password' ? 'text' : 'password';
  }, 'password');

  const togglePasswordVisibility = () => {
    setPasswordType();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (!response?.error) {
        router.replace('/');
      }
    } catch (error) {
      console.error(error);
      // Handle error here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.content}>
        <header>Login</header>
        <div className={styles.field}>
          <span className="fa fa-user">
            <FaEnvelope />
          </span>
          <input
            name="email"
            type="email"
            placeholder=" "
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className={`${styles.field} ${styles.space}`}>
          <span className="fa fa-lock">
            <FaLock />
          </span>
          <input
            name="password"
            type={passwordType}
            className={styles.passKey}
            placeholder=" "
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="checkbox"
            className={styles.show}
            onChange={togglePasswordVisibility}
          />
        </div>
        <div className={styles.pass}>
          <Link href="#">Forgot Password?</Link>
        </div>
        <div className={styles.field}>
          <Button type="submit" value="LOGIN">
            LOGIN
          </Button>
        </div>
        <div className={styles.login}>Or login with</div>
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
          {"Don't have account? "}
          <Link href={'/register'}>Signup</Link>
        </div>
      </div>
    </form>
  );
}
