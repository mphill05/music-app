'use client';

import { songs } from '@/data/songs';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './page.module.scss';
import Link from 'next/link';
import Button from '@/components/Button/Button';
import BackBtn from '@/components/BackBtn/BackBtn';

let easing = [0.6, -0.05, 0.01, 0.99];
const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};
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
  releaseDate: string;
  download?: boolean;
}

interface SongDetailsPageProps {
  params: {
    id: string;
  };
}

async function getSong(id: string) {
  const song = songs.find((song) => song.id === id);
  return song;
}

export default function SongDetailsPage({ params }: SongDetailsPageProps) {
  const [song, setSong] = useState<Song | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedSong: Song | undefined = await getSong(params.id);
      setSong(fetchedSong || null);
      setLoading(false);
    };

    fetchData();
  }, [params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <div className={styles.fullscreen}>
        <div className={styles.product}>
          <motion.div
            className={styles.img}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            <motion.img
              key={song?.imageUrl}
              src={song?.imageUrl}
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: 200, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
            />
          </motion.div>
          <div className={styles.productDetails}>
            <motion.div variants={stagger} className={styles.inner}>
              <Link href="/music">
                <motion.div variants={fadeInUp}>
                  <a className={styles.goBack}>
                    <div className={styles.goBackContainer}>
                      <BackBtn /> Back to music
                    </div>
                  </a>
                </motion.div>
              </Link>
              <motion.h1 variants={fadeInUp}>{song?.title}</motion.h1>
              <motion.div variants={fadeInUp} className={styles.streaming}>
                <div>
                  <p>Song Release</p>
                  <p>{song?.releaseDate}</p>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className={styles.streaming}>
                <div>
                  <h3>Stream</h3>
                  <Link href="https://spotify.com" target="_blank">
                    <p>Spotify</p>
                  </Link>
                  <Link href="https://music.apple.com/" target="_blank">
                    <p>Apple Music</p>
                  </Link>
                  <Link href="https://pandora.com" target="_blank">
                    <p>Pandora (LOL)</p>
                  </Link>
                </div>
                <div>
                  <h3>Buy</h3>
                  <Link href="https://music.apple.com/" target="_blank">
                    <p>Apple Music</p>
                  </Link>
                  <Link href="https://beatport.com/" target="_blank">
                    <p>Beatport</p>
                  </Link>
                  <Link href="https://bandcamp.com/" target="_blank">
                    <p>Bandcamp</p>
                  </Link>
                </div>
              </motion.div>
              {song?.download && (
                <motion.div variants={fadeInUp}>
                  <Button>Download</Button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
