import React from 'react';
import styles from './ProductDetails.module.scss';

interface ProductDetailsProps {
  name: string;
  type: 'music' | 'store';
  streamingLinks?: string[];
  buyLinks?: string[];
  sizes?: string[];
  prices?: number[];
  onBuy?: () => void;
}

const ProductDetails = ({
  name,
  type,
  streamingLinks,
  buyLinks,
  sizes,
  prices,
  onBuy,
}) => {
  return (
    <div className={styles.productDetails}>
      {type === 'music' && (
        <div>
          <h2>Stream:</h2>
          <ul>
            {streamingLinks?.map((link, index) => (
              <li key={index}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {type === 'store' && (
        <div>
          <h2>Sizes:</h2>
          <div className={styles.sizeRow}>
            {sizes?.map((size, index) => (
              <span key={index}>{size}</span>
            ))}
          </div>
          <div className={styles.priceRow}>
            {prices?.map((price, index) => (
              <span key={index}>${price}</span>
            ))}
          </div>
          <button onClick={onBuy}>Buy</button>
        </div>
      )}
    </div>
  );
};
