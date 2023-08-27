import { Card } from '@/components/Card/Card';
import { songs } from '../../data/songs';
import styles from './page.module.scss';

interface Song {
  imageUrl: string;
  title: string;
}

export default function Music() {
  return (
    <div className={styles.cardContainer}>
      {songs.map((song: Song, index: number) => (
        <Card
          key={index}
          imageUrl={song.imageUrl}
          title={song.title}
          height={250}
          width={250}
        />
      ))}
    </div>
  );
}
