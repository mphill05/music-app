import styles from './page.module.scss';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const Account = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect('/');
  }
  return (
    <div className={styles.accountPage}>
      <div className={styles.accountInfo}></div>
    </div>
  );
};

export default Account;
