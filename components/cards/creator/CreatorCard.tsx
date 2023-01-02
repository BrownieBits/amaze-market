import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import styles from './CreatorCard.module.scss';

export interface ICreatorCard {
  name: string;
  image: string;
  url: string;
  verified: boolean;
}

const CreatorCard: React.FC<ICreatorCard> = ({
  name,
  image,
  url,
  verified = false,
}) => {
  return (
    <Link href={url} className={styles.creatorCard} passHref>
      <Image
        src={image}
        alt={`${name} Creator`}
        fill
        className={styles.image}
      ></Image>
      <div className={styles.name}>
        <p>{name}</p>
        {verified ? (
          <FontAwesomeIcon icon={'fa-circle-check' as IconProp} />
        ) : (
          <></>
        )}
      </div>
    </Link>
  );
};

export default CreatorCard;
