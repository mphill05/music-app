'use client';

import { songs } from '@/data/songs';
import { motion } from 'framer-motion';
import styles from './page.module.scss';
import Link from 'next/link';
import Button from '@/components/Buttons/Button';
import { memo } from 'react';

interface Song {
  id: string;
  imageUrl: string;
  title: string;
  alt?: string;
}

function HomePage() {
  const newestSongId = songs[0].id;
  const newestSong = songs.find((song) => song.id === newestSongId);

  if (!newestSong) {
    return <></>;
  }

  return (
    <>
      {newestSong && (
        <div className={styles.homePage}>
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
                  <>
                    <motion.img
                      initial={{ x: 60, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      key={newestSong.id}
                      src={newestSong.imageUrl}
                      width={250}
                    />
                  </>
                </div>
              </motion.div>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <Link href={`/music/${newestSong.id}`}>
              <Button>{newestSong.title}</Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default memo(HomePage);
