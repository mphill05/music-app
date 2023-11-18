'use client';

import { useState } from 'react';
import { storeItems } from '../../data/storeItems';
import styles from './page.module.scss';
import { SearchBar } from '@/components/SearchBar/SearchBar';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Animations from '@/components/Animations/Animations';

export default function Store() {
  const [query, setQuery] = useState('');

  const filteredStoreItems = storeItems.filter((item) =>
    item.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );

  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} />
      <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <div className={styles.productContainer}>
          <div className={styles.productCenter}>
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              className={styles.title}
            >
              <div className={styles.productCardContainer}>
                {filteredStoreItems.map((item, index) => (
                  <Link
                    href={`/store/${item.id}`}
                    key={index}
                    as={`/store/${item.id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <Animations>
                      <motion.img
                        initial={{ x: 60, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        key={item.id}
                        src={item.imageUrl}
                        width={250}
                        alt={item.alt}
                      />
                      <div className={styles.productInfo}>
                        <h4>{item.title}</h4>
                        <span>${item.price}</span>
                      </div>
                    </Animations>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
