'use client';

import { motion } from 'framer-motion';
import styles from './page.module.scss';
import { memo } from 'react';
import Button from '@/components/Button/Button';

function ContactPage() {
  return (
    <div className={styles.contactScreen}>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.infoWrapper}>
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
                <div className={styles.centeredContent}>
                  <p>
                    <strong>Business inquiries:</strong>
                  </p>
                  <p>
                    <a href="mailto:business@example.com">
                      business@example.com
                    </a>
                  </p>
                  <br />
                  <p>
                    <strong>Management:</strong>
                  </p>
                  <p>
                    <a href="mailto:management@example.com">
                      management@example.com
                    </a>
                  </p>
                </div>
              </motion.div>
            </div>
            <div className={styles.infoWrapper}>
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
                <div className={styles.centeredContent}>
                  <p>Download fonts and photos for show promo.</p>
                  <br />
                  <Button href="/path/to/your/presskit.zip" download>
                    Download Press Kit
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default memo(ContactPage);
