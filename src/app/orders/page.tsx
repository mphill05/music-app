import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';
import styles from './page.module.scss';

const Orders = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect('/');
  }

  return <div className={styles.ordersPage}>Private Orders Page</div>;
};

export default Orders;
