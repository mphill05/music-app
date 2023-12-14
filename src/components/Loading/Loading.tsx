import styles from './Loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.spinner1}></div>
    </div>
  );
};

export default Loading;
