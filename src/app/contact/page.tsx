'use client';

import { motion } from 'framer-motion';
import styles from './page.module.scss';

export default function ContactPage() {
  return (
    <div className={styles.contactScreen}>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <motion.div
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: 200, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
              className={styles.contactMe}
            >
              <div className={styles.contactText}>
                <h3>Contact Me</h3>
              </div>
              <div>
                <p>
                  For business inquiries:{' '}
                  <a href="mailto:business@example.com">business@example.com</a>
                </p>
                <p>
                  For management:{' '}
                  <a href="mailto:management@example.com">
                    management@example.com
                  </a>
                </p>
              </div>
            </motion.div>
            <motion.div
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: 200, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.4 }}
              className={styles.pressKit}
            >
              <div className={styles.contactText}>
                <h3>Press Kit</h3>
              </div>
              <div>
                <p>Download fonts and photos for show promo.</p>
                <br />
                <a href="/path/to/your/presskit.zip" download>
                  Download Press Kit
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
