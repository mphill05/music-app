'use client';

import { useState } from 'react';
import { Card } from '../../components/Card/Card';
import { storeItems } from '../../data/storeItems';
import styles from './page.module.scss';
import { SearchBar } from '@/components/searchBar/searchBar';

export default function Store() {
  const [query, setQuery] = useState('');

  const filteredStoreItems = storeItems.filter((item) =>
    item.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );

  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} />
      <div className={styles.cardContainer}>
        {filteredStoreItems.map((item, index) => (
          <Card
            key={index}
            imageUrl={item.imageUrl}
            title={item.title}
            price={item.price}
            width={500}
            height={500}
          />
        ))}
      </div>
    </div>
  );
}
