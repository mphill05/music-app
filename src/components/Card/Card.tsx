import Image from 'next/image';
import styles from './Card.module.scss';

interface CardProps {
  imageUrl: string;
  title: string;
  price?: number;
  width?: number;
  height?: number;
}

export const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  price,
  width = 250,
  height = 250,
}) => {
  return (
    <div className={styles.card}>
      <Image src={imageUrl} alt={title} width={width} height={height} />
      <h3>{title}</h3>
      {price && <p>{price}</p>}
    </div>
  );
};
