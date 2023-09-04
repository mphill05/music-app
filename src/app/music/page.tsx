'use client';

import { Card } from '@/components/Card/Card';
import { songs } from '../../data/songs';
import styles from './page.module.scss';
import { useState } from 'react';
import { SearchBar } from '@/components/searchBar/searchBar';
import Link from 'next/link';

interface Song {
  id: string;
  imageUrl: string;
  title: string;
}

export default function Music() {
  const [query, setQuery] = useState('');

  const filteredSongs = songs.filter((song) =>
    song.title.toLowerCase().includes(query.toLocaleLowerCase())
  );

  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} />
      <div className={styles.cardContainer}>
        {filteredSongs.map((song: Song, index: number) => (
          <Link href={`/music/${song.id}`} key={song.id}>
            <Card
              key={index}
              imageUrl={song.imageUrl}
              title={song.title}
              height={250}
              width={250}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
