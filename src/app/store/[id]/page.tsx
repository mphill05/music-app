import { ProductDetails } from '@/components/ProductDetails/ProductDetails';
import { storeItems } from '@/data/storeItems';

interface StoreDetailsPageProps {
  params: {
    id: string;
  };
}

async function getItem(id: string) {
  const item = storeItems.find((storeItems) => storeItems.id === id);
  return item;
}

export default async function StoreDetailsPage({
  params,
}: StoreDetailsPageProps) {
  const item = await getItem(params.id);

  if (!item) {
    return <div>Loading...</div>;
  }

  return <ProductDetails product={item} type="store" />;
}
