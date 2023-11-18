'use client';

import { storeItems } from '@/data/storeItems';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './page.module.scss';
import Link from 'next/link';
import { useCart } from '@/context/cartContext';
import Button from '@/components/Button/Button';

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

interface Item {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
}

interface StoreDetailsPageProps {
  params: {
    id: string;
  };
}

async function getItem(id: string) {
  const item = storeItems.find((storeItems) => storeItems.id === id);
  return item;
}

export default function StoreDetailsPage({ params }: StoreDetailsPageProps) {
  const [item, setItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState(true);
  const { addItem, toggleCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedItem: Item | undefined = await getItem(params.id);
      setItem(fetchedItem || null);
      setLoading(false);
    };

    fetchData();
  }, [params.id]);

  const handleAddToCart = () => {
    toggleCart();
    if (item) {
      addItem({
        id: item.id,
        name: item.title,
        imageUrl: item.imageUrl,
        title: item.title,
        price: item.price,
        quantity: 1,
      });
    }
  };

  if (loading || !item) {
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
              key={item.imageUrl}
              src={item.imageUrl}
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: 200, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
            />
          </motion.div>
          <div className={styles.productDetails}>
            <motion.div variants={stagger} className={styles.inner}>
              <Link href="/store">
                <motion.div variants={fadeInUp}>
                  <a className={styles.goBack}>&lt; Back to store</a>
                </motion.div>
              </Link>
              <motion.h1 variants={fadeInUp}>{item.title}</motion.h1>
              <motion.p variants={fadeInUp}>{item.description}</motion.p>
              <motion.div variants={fadeInUp} className={styles.sizes}>
                <div className={styles.sizeLayout}>
                  <div className={styles.sizeCircle}>S</div>
                  <div className={styles.sizeCircle}>M</div>
                  <div className={styles.sizeCircle}>L</div>
                  <div className={styles.sizeCircle}>XL</div>
                  <div className={styles.sizeCircle}>2XL</div>
                  <div className={styles.sizeCircle}>3XL</div>
                </div>
              </motion.div>
              <motion.h3 variants={fadeInUp}>Quantity</motion.h3>
              <motion.div variants={fadeInUp} className={styles.qtyPrice}>
                <div className={styles.qty}>
                  <div className={styles.minus}>-</div>
                  <div className={styles.amount}>1</div>
                  <div className={styles.add}>+</div>
                </div>
              </motion.div>
              <motion.p variants={fadeInUp} className={styles.price}>
                <h2 className={styles.price}>${item.price}</h2>
              </motion.p>
              <motion.div variants={fadeInUp} className={styles.btnRow}>
                <Button onClick={handleAddToCart}>Add To Cart</Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
