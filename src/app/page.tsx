'use client';

import { motion } from 'framer-motion';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <div className={styles.homeScreen}>
      <div className={styles.container}>
        <motion.div
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: 200, opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.2 }}
          className={styles.contactMe}
        >
          <div className={styles.announcements}>
            <h3>News</h3>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
