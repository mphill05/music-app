import Image from 'next/image';

interface ProductDetailsProps {
  product: any;
  type: 'music' | 'store';
}

export const ProductDetails = ({ product, type }: ProductDetailsProps) => {
  if (!product) {
    return <div>Loading...</div>;
  }
  if (type === 'music') {
    return (
      <div>
        <Image
          src={product.imageUrl}
          alt={product.title}
          width={500}
          height={500}
        />
        <div>
          <h1>{product.title}</h1>
          <p>Release Date: {product.releaseDate}</p>
          <button>Buy on Apple Music</button>
          <button>Buy on Beatport</button>
          <button>Buy on Bandcamp</button>
        </div>
        <div>
          <h2>Stream</h2>
          <button>Spotify</button>
          <button>Apple Music</button>
        </div>
      </div>
    );
  } else if (type === 'store') {
    return (
      <div>
        <Image
          src={product.imageUrl}
          alt={product.title}
          width={500}
          height={500}
        />
        <div>
          <h1>{product.title}</h1>
          <p>Price: {product.price}</p>
          <button>S</button>
          <button>M</button>
          <button>L</button>
          <button>XL</button>
          <button>Buy</button>
        </div>
      </div>
    );
  }
};
