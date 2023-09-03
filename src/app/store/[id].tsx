import { GetStaticProps, GetStaticPaths } from 'next';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import { storeItems } from '../../data/storeItems';

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params;
  const item = storeItems.find((item) => item.id === id);

  return {
    props: { item },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = storeItems.map((item) => ({
    params: { id: item.id.toString() },
  }));

  return { paths, fallback: false };
};

export default function StoreItemDetails({ item }) {
  return <ProductDetails product={item} type="store" />;
}
