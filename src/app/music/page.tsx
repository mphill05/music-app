'use client';

import { songs } from '../../data/songs';
import styles from './page.module.scss';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { delay, motion } from 'framer-motion';
import Animations from '@/components/Animations/Animations';
import { SearchBar } from '@/components/Search/Search';

interface Song {
  id: string;
  imageUrl: string;
  title: string;
  alt?: string;
}

export default function Music() {
  const [query, setQuery] = useState('');

  const filteredSongs = useMemo(() => {
    return songs.filter((song) =>
      song.title.toLowerCase().includes(query.toLocaleLowerCase())
    );
  }, [query]);

  const calculateDelay = (index: number) => ({
    delay: index * 0.1,
  });

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
                {filteredSongs.map((songs: Song, index: number) => (
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
                        transition={calculateDelay(index)}
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
