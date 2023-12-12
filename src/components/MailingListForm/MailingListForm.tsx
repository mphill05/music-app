import styles from './MailingListForm.module.scss';

const MailingListForm = () => {
  return (
    <div className={styles.inputGroup}>
      <input
        type="email"
        className={styles.input}
        id="Email"
        name="Email"
        placeholder="Join the mailing list"
      />
      <input className={styles.buttonSubmit} value="Subscribe" type="submit" />
    </div>
  );
};

export default MailingListForm;
