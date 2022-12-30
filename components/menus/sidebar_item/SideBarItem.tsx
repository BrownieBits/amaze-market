import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './SideBarItem.module.scss';

export interface ISideBarItem {
  title: string;
  icon: string;
  url: string;
}

const SideBarItem: React.FC<ISideBarItem> = ({ title, icon, url }) => {
  const router = useRouter();
  const selected =
    router.asPath === url
      ? `${styles.menuItem} ${styles.selected}`
      : `${styles.menuItem}`;
  const iconProp: IconProp = icon as IconProp;
  return (
    <li className={selected}>
      <Link href={url} passHref>
        <FontAwesomeIcon icon={iconProp} /> {title}
      </Link>
    </li>
  );
};

export default SideBarItem;
