import { GetServerSideProps } from 'next';
import { ProductDetails } from '../../components/ProductDetails/ProductDetails';
import { songs } from '../../data/songs';

interface Song {
  id: string;
  imageUrl: string;
  title: string;
  releaseDate: string;
}

interface SongDetailsProps {
  song: Song;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;

  if (!id) {
    return {
      notFound: true,
    };
  }

  const song = songs.find((song) => song.id === id);

  if (!song) {
    return {
      notFound: true,
    };
  }

  return {
    props: { song },
  };
};

export default function SongDetails({ song }: SongDetailsProps) {
  return <ProductDetails product={song} type="music" />;
}
