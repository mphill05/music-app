'use client';

import React, { useState } from 'react';
import styles from './page.module.scss';

export default function AuthForm() {
  const [isActive, setIsActive] = useState(false);

  const handleSignup = () => {
    setIsActive(true);
  };

  const handleSignin = () => {
    setIsActive(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.blueBg}>
          <div className={styles.box + ' ' + styles.signin}>
            <h2>Already Have an Account?</h2>
            <button className={styles.signinBtn} onClick={handleSignin}>
              Sign in
            </button>
          </div>
          <div className={styles.box}>
            <h2>Dont Have an Account?</h2>
            <button className={styles.signupBtn} onClick={handleSignup}>
              Sign up
            </button>
          </div>
        </div>
        <div className={`${styles.formBx} ${isActive ? styles.active : ''}`}>
          <div className={styles.form + ' ' + styles.signinForm}>
            <form className={styles.myForm}>
              <h3>Sign In</h3>
              <input type="text" name="" placeholder="Username" />
              <input type="password" name="" placeholder="Password" />
              <input type="submit" name="" value="Login" />
              <a href="#" className={styles.forgot}>
                Forgot Password
              </a>
            </form>
          </div>
          <div className={styles.form + ' ' + styles.signupForm}>
            <form className={styles.myForm}>
              <h3>Sign Up</h3>
              <input type="text" name="" placeholder="Username" />
              <input type="text" name="" placeholder="Email Address" />
              <input type="password" name="" placeholder="Password" />
              <input type="password" name="" placeholder="Confirm Password" />
              <input type="submit" name="" value="Register" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
