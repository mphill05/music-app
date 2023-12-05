import React from 'react';
import styles from './page.module.scss';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const Settings = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect('/');
  }

  return <div className={styles.settingsPage}>Settings</div>;
};

export default Settings;
