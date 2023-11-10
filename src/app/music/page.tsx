'use client';

import { songs } from '../../data/songs';
import styles from './page.module.scss';
import { useState } from 'react';
import { SearchBar } from '@/components/searchBar/searchBar';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Animations from '@/components/Animations/Animations';

interface Song {
  id: string;
  imageUrl: string;
  title: string;
  alt?: string;
}

export default function Music() {
  const [query, setQuery] = useState('');

  const filteredSongs = songs.filter((song) =>
    song.title.toLowerCase().includes(query.toLocaleLowerCase())
  );

  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} />
      <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <div className={styles.musicContainer}>
          <div className={styles.musicCenter}>
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              className={styles.title}
            >
              <div className={styles.musicCardContainer}>
                {filteredSongs.map((songs: Song) => (
                  <Link
                    href={`/music/${songs.id}`}
                    key={songs.id}
                    as={`/music/${songs.id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <Animations>
                      <motion.img
                        initial={{ x: 60, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        key={songs.id}
                        src={songs.imageUrl}
                        width={250}
                        alt={songs.alt}
                      />
                      <div className={styles.musicInfo}>
                        <h4>{songs.title}</h4>
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
