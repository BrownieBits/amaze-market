import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductCard.module.scss';

export interface IProductCard {
  name: string;
  type: string;
  url: string;
  price: string;
  productImage: string;
  creatorImage: string;
  creatorUrl: string;
  creatorName: string;
  creatorVerified: boolean;
}

const ProductCard: React.FC<IProductCard> = ({
  name,
  type,
  url,
  price,
  productImage,
  creatorImage,
  creatorUrl,
  creatorName,
  creatorVerified,
}) => {
  return (
    <Link href={url} className={styles.creatorCard} passHref>
      <Image
        src={productImage}
        alt={name}
        fill
        className={styles.image}
      ></Image>
      <div className={styles.infoWrapper}>
        <div className={styles.creatorImage}>
          <Link href={creatorUrl} passHref className={styles.creatorLink}>
            <Image
              src={creatorImage}
              alt={creatorName}
              fill
              className={styles.image}
            ></Image>
          </Link>
        </div>
        <div className={styles.info}>
          <p className={styles.productName}>{name}</p>
          <Link href={creatorUrl} passHref className={styles.creatorLink}>
            <p>{creatorName}</p>
            {creatorVerified ? (
              <FontAwesomeIcon icon={'fa-circle-check' as IconProp} />
            ) : (
              <></>
            )}
          </Link>
          <p className={styles.productType}>{type}</p>
          <p className={styles.productPrice}>{price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
