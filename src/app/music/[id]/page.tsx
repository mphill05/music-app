import { ProductDetails } from '@/components/ProductDetails/ProductDetails';
import { songs } from '@/data/songs';

interface SongDetailsPageProps {
  params: {
    id: string;
  };
}

async function getSong(id: string) {
  const song = songs.find((song) => song.id === id);
  return song;
}

export default async function SongDetailsPage({
  params,
}: SongDetailsPageProps) {
  const song = await getSong(params.id);

  if (!song) {
    return <div>Loading...</div>;
  }

  return <ProductDetails product={song} type="music" />;
}
