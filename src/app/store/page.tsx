import { Card } from '../../components/Card/Card';
import { storeItems } from '../../data/storeItems';
import styles from './page.module.scss';

export default async function Store() {
  return (
    <div className={styles.cardContainer}>
      {storeItems.map((item, index) => (
        <Card
          key={index}
          imageUrl={item.imageUrl}
          title={item.title}
          price={item.price}
          width={500}
          height={500}
        />
      ))}
    </div>
  );
}
