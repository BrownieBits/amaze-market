import Link from 'next/link';
import ProductCard, { IProductCard } from '../../cards/product/ProductCard';
import styles from './ProductList.module.scss';

export interface IProductList {
  title: string;
  url: string;
  items: Array<IProductCard>;
}

const ProductList: React.FC<IProductList> = ({ title, url, items }) => {
  return (
    <>
      {title != '' && url != '' ? (
        <section className={styles.title}>
          {title != '' ? <p>{title}</p> : <></>}
          {url != '' ? (
            <Link href={url} passHref>
              See More
            </Link>
          ) : (
            <></>
          )}
        </section>
      ) : (
        <></>
      )}
      <section className={styles.creatorsWrapper}>
        {items.map((item, index) => {
          return (
            <ProductCard
              name={item.name}
              url={item.url}
              type={item.type}
              price={item.price}
              productImage={item.productImage}
              creatorImage={item.creatorImage}
              creatorUrl={item.creatorUrl}
              creatorName={item.creatorName}
              creatorVerified={item.creatorVerified}
              key={index}
            />
          );
        })}
      </section>
    </>
  );
};

export default ProductList;
