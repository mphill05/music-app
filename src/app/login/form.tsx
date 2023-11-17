'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import styles from './form.module.scss';
import Link from 'next/link';
import { FaEnvelope, FaFacebook, FaGoogle, FaLock } from 'react-icons/fa';

export default function Form() {
  const router = useRouter();
  const [passwordType, setPasswordType] = useState('password');

  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });

    console.log({ response });
    if (!response?.error) {
      router.push('/');
      router.refresh();
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
          <input name="email" type="email" placeholder=" " required />
          <label htmlFor="email">Email</label>
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
        <div className={styles.pass}>
          <a href="#">Forgot Password?</a>
        </div>
        <div className={styles.field}>
          <button className={styles.loginBtn} type="submit" value="LOGIN">
            LOGIN
          </button>
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
