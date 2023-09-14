'use client';

import { songs } from '../../data/songs';
import styles from './page.module.scss';
import { useState } from 'react';
import { SearchBar } from '@/components/searchBar/searchBar';
import Link from 'next/link';
import { motion } from 'framer-motion';

let easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

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
                {filteredSongs.map((song: Song) => (
                  <Link
                    href={`/music/${song.id}`}
                    key={song.id}
                    as={`/music/${song.id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <motion.div
                      variants={fadeInUp}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`${styles.card} no-underline`}
                    >
                      <motion.img
                        initial={{ x: 60, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        key={song.id}
                        src={song.imageUrl}
                        width={250}
                        alt={song.alt}
                      />
                      <div className={styles.musicInfo}>
                        <h4>{song.title}</h4>
                      </div>
                    </motion.div>
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
