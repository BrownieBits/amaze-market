import Link from 'next/link';
import CreatorCard, { ICreatorCard } from '../../cards/creator/CreatorCard';
import styles from './CreatorList.module.scss';

export interface ICreatorList {
  title: string;
  url: string;
  items: Array<ICreatorCard>;
}

const CreatorList: React.FC<ICreatorList> = ({ title, url, items }) => {
  return (
    <>
      <section className={styles.title}>
        <p>{title}</p>
        {url != '' ? (
          <Link href={url} passHref>
            See More
          </Link>
        ) : (
          <></>
        )}
      </section>
      <section className={styles.creatorsWrapper}>
        {items.map((item, index) => {
          return (
            <CreatorCard
              name={item.name}
              url={item.url}
              image={item.image}
              verified={item.verified}
              key={index}
            />
          );
        })}
      </section>
    </>
  );
};

export default CreatorList;
