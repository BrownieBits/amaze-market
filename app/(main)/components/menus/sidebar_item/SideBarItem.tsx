import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import styles from './SideBarItem.module.scss';

export type ISideBarItem = {
  title: string;
  icon: string;
  url: string;
};
export default function SideBarItem({ title, icon, url }: ISideBarItem) {
  const router = useRouter();
  const pathName = usePathname();
  const selected =
    pathName === url
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
}
