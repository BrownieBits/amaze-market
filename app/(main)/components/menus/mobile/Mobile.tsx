import Link from 'next/link';
import Icon from '../../icons/Icon';
import styles from './Mobile.module.scss';

export default function MobileMenu({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  console.log('SEARCH PARAMS', searchParams);
  const showCreatePopup = false;
  return (
    <div className={styles.mobileHeaderWrapper}>
      <div
        className={`${styles.mobilePopUp} ${
          showCreatePopup ? styles.show : ''
        }`}
        id="createPopUp"
      >
        <div className={styles.mobilePopUpHeader}>
          <p>Create</p>
          <Link className={styles.item} href="/" passHref>
            <Icon name="fa-xmark" />
          </Link>
        </div>
        <div className={styles.mobilePopUpContent}>
          <Link className={styles.item} href="/" passHref>
            <div className={styles.icon}>
              <Icon name="fa-plus" />
            </div>
            <p>Create a Product</p>
          </Link>
          <Link className={styles.item} href="/" passHref>
            <div className={styles.icon}>
              <Icon name="fa-shirt" />
            </div>
            <p>Your Products</p>
          </Link>
          <Link className={styles.item} href="/" passHref>
            <div className={styles.icon}>
              <Icon name="fa-store" />
            </div>
            <p>Go to Store</p>
          </Link>
        </div>
      </div>
      <header className={styles.mobileHeader}>
        <Link className={styles.item} href="/" passHref>
          <Icon name="fa-house" />
          <p>Home</p>
        </Link>
        <Link className={styles.item} href="/subscriptions" passHref>
          <Icon name="fa-user-check" />
          <p>Subscriptions</p>
        </Link>
        <Link className={styles.item} href="/" passHref>
          <Icon name="fa-circle-plus" />
        </Link>
        <Link className={styles.item} href="/likes" passHref>
          <Icon name="fa-thumbs-up" />
          <p>Likes</p>
        </Link>
        <Link className={styles.item} href="/collections" passHref>
          <Icon name="fa-layer-group" />
          <p>Collections</p>
        </Link>
      </header>
    </div>
  );
}
