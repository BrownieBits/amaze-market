import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useState } from 'react';
import styles from './MobileHeader.module.scss';

export interface IMobileHeader {}

const MobileHeader: React.FC<IMobileHeader> = () => {
  const [showCreatePopup, setShowCreatePopup] = useState<boolean>(false);
  const toggleCreatePopup = () => {
    setShowCreatePopup(!showCreatePopup);
  };
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
          <button
            className={styles.close}
            onClick={() => {
              toggleCreatePopup();
            }}
          >
            <FontAwesomeIcon icon={'fa-xmark' as IconProp} />
          </button>
        </div>
        <div className={styles.mobilePopUpContent}>
          <Link className={styles.item} href="/" passHref>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={'fa-plus' as IconProp} />
            </div>
            <p>Create a Product</p>
          </Link>
          <Link className={styles.item} href="/" passHref>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={'fa-shirt' as IconProp} />
            </div>
            <p>Your Products</p>
          </Link>
          <Link className={styles.item} href="/" passHref>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={'fa-store' as IconProp} />
            </div>
            <p>Go to Store</p>
          </Link>
        </div>
      </div>
      <header className={styles.mobileHeader}>
        <Link className={styles.item} href="/" passHref>
          <FontAwesomeIcon icon={'fa-house' as IconProp} />
          <p>Home</p>
        </Link>
        <Link className={styles.item} href="/subscriptions" passHref>
          <FontAwesomeIcon icon={'fa-user-check' as IconProp} />
          <p>Subscriptions</p>
        </Link>
        <button
          className={`${styles.item} ${styles.big}`}
          onClick={() => {
            toggleCreatePopup();
          }}
        >
          <FontAwesomeIcon icon={'fa-circle-plus' as IconProp} />
        </button>
        <Link className={styles.item} href="/likes" passHref>
          <FontAwesomeIcon icon={'fa-thumbs-up' as IconProp} />
          <p>Liked Items</p>
        </Link>
        <Link className={styles.item} href="/collections" passHref>
          <FontAwesomeIcon icon={'fa-layer-group' as IconProp} />
          <p>Collections</p>
        </Link>
      </header>
    </div>
  );
};

export default MobileHeader;
