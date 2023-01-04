import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { collection, getDocs, limit, query, where } from 'firebase/firestore';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import PrimaryLayout from '../../components/layouts/base/PrimaryLayout';
import ProductList, {
  IProductList,
} from '../../components/lists/product/ProductList';
import { db } from '../../lib/Firebase/firebase';
import { NextPageWithLayout } from '../page';
import styles from './Creator.module.scss';

const whatsHotProductList: IProductList = {
  title: '',
  url: '',
  items: [
    {
      name: 'Adam Mug',
      type: 'Mug',
      url: '/',
      price: '$9.99',
      productImage: '/products/previewd_adam_mug.jpeg',
      creatorImage: '/creators/previewd.jpeg',
      creatorUrl: '/creator/previewd',
      creatorName: 'Previewd',
      creatorVerified: true,
    },
    {
      name: 'Behold Comma',
      type: 'Premium Tee',
      url: '/',
      price: '$19.99',
      productImage: '/products/previewd_behold_green.jpeg',
      creatorImage: '/creators/previewd.jpeg',
      creatorUrl: '/creator/previewd',
      creatorName: 'Previewd',
      creatorVerified: true,
    },
    {
      name: 'Fix It',
      type: 'Premium Tee',
      url: '/',
      price: '$19.99',
      productImage: '/products/previewd_fixit_purple.jpeg',
      creatorImage: '/creators/previewd.jpeg',
      creatorUrl: '/creator/previewd',
      creatorName: 'Previewd',
      creatorVerified: true,
    },
    {
      name: 'Hey Peaches',
      type: 'Premium Tee',
      url: '/',
      price: '$19.99',
      productImage: '/products/previewd_peaches_black.jpeg',
      creatorImage: '/creators/previewd.jpeg',
      creatorUrl: '/creator/previewd',
      creatorName: 'Previewd',
      creatorVerified: true,
    },
    {
      name: 'Adam Mug',
      type: 'Mug',
      url: '/',
      price: '$9.99',
      productImage: '/products/previewd_adam_mug.jpeg',
      creatorImage: '/creators/previewd.jpeg',
      creatorUrl: '/creator/previewd',
      creatorName: 'Previewd',
      creatorVerified: true,
    },
    {
      name: 'Behold Comma',
      type: 'Premium Tee',
      url: '/',
      price: '$19.99',
      productImage: '/products/previewd_behold_green.jpeg',
      creatorImage: '/creators/previewd.jpeg',
      creatorUrl: '/creator/previewd',
      creatorName: 'Previewd',
      creatorVerified: true,
    },
    {
      name: 'Fix It',
      type: 'Premium Tee',
      url: '/',
      price: '$19.99',
      productImage: '/products/previewd_fixit_purple.jpeg',
      creatorImage: '/creators/previewd.jpeg',
      creatorUrl: '/creator/previewd',
      creatorName: 'Previewd',
      creatorVerified: true,
    },
    {
      name: 'Hey Peaches',
      type: 'Premium Tee',
      url: '/',
      price: '$19.99',
      productImage: '/products/previewd_peaches_black.jpeg',
      creatorImage: '/creators/previewd.jpeg',
      creatorUrl: '/creator/previewd',
      creatorName: 'Previewd',
      creatorVerified: true,
    },
    {
      name: 'Adam Mug',
      type: 'Mug',
      url: '/',
      price: '$9.99',
      productImage: '/products/previewd_adam_mug.jpeg',
      creatorImage: '/creators/previewd.jpeg',
      creatorUrl: '/creator/previewd',
      creatorName: 'Previewd',
      creatorVerified: true,
    },
    {
      name: 'Behold Comma',
      type: 'Premium Tee',
      url: '/',
      price: '$19.99',
      productImage: '/products/previewd_behold_green.jpeg',
      creatorImage: '/creators/previewd.jpeg',
      creatorUrl: '/creator/previewd',
      creatorName: 'Previewd',
      creatorVerified: true,
    },
    {
      name: 'Fix It',
      type: 'Premium Tee',
      url: '/',
      price: '$19.99',
      productImage: '/products/previewd_fixit_purple.jpeg',
      creatorImage: '/creators/previewd.jpeg',
      creatorUrl: '/creator/previewd',
      creatorName: 'Previewd',
      creatorVerified: true,
    },
    {
      name: 'Hey Peaches',
      type: 'Premium Tee',
      url: '/',
      price: '$19.99',
      productImage: '/products/previewd_peaches_black.jpeg',
      creatorImage: '/creators/previewd.jpeg',
      creatorUrl: '/creator/previewd',
      creatorName: 'Previewd',
      creatorVerified: true,
    },
    {
      name: 'Adam Mug',
      type: 'Mug',
      url: '/',
      price: '$9.99',
      productImage: '/products/previewd_adam_mug.jpeg',
      creatorImage: '/creators/previewd.jpeg',
      creatorUrl: '/creator/previewd',
      creatorName: 'Previewd',
      creatorVerified: true,
    },
    {
      name: 'Behold Comma',
      type: 'Premium Tee',
      url: '/',
      price: '$19.99',
      productImage: '/products/previewd_behold_green.jpeg',
      creatorImage: '/creators/previewd.jpeg',
      creatorUrl: '/creator/previewd',
      creatorName: 'Previewd',
      creatorVerified: true,
    },
    {
      name: 'Fix It',
      type: 'Premium Tee',
      url: '/',
      price: '$19.99',
      productImage: '/products/previewd_fixit_purple.jpeg',
      creatorImage: '/creators/previewd.jpeg',
      creatorUrl: '/creator/previewd',
      creatorName: 'Previewd',
      creatorVerified: true,
    },
    {
      name: 'Hey Peaches',
      type: 'Premium Tee',
      url: '/',
      price: '$19.99',
      productImage: '/products/previewd_peaches_black.jpeg',
      creatorImage: '/creators/previewd.jpeg',
      creatorUrl: '/creator/previewd',
      creatorName: 'Previewd',
      creatorVerified: true,
    },
  ],
};

interface Props {
  id: string;
  banner: string;
  name: string;
  logo: string;
  verified: boolean;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params!.id ? params!.id : '';
  const colRef = collection(db, 'creators');
  const todosQuery = query(colRef, where('name', '==', `${id}`), limit(1));

  const snapshot = await await getDocs(todosQuery);
  const banner = snapshot.docs.length > 0 ? snapshot.docs[0].data().banner : '';
  const name =
    id.toString().charAt(0).toUpperCase() +
    id.toString().substring(1).replace('-', ' ');
  const logo = snapshot.docs.length > 0 ? snapshot.docs[0].data().logo : '';
  const verified =
    snapshot.docs.length > 0 ? snapshot.docs[0].data().verified : false;
  return {
    props: {
      id,
      banner,
      name,
      logo,
      verified,
    },
  };
};

const Creator: NextPageWithLayout<Props> = ({
  id,
  banner,
  name,
  logo,
  verified,
}) => {
  return (
    <>
      <Head>
        <title>
          {id.charAt(0).toUpperCase() + id.substring(1).replace('-', ' ')}{' '}
          Creator
        </title>
      </Head>
      {banner != '' ? (
        <section className={styles.creatorBanner}>
          <Image
            src={banner}
            alt={`${name} Creator Banner`}
            fill
            className={styles.image}
          ></Image>
        </section>
      ) : (
        <></>
      )}
      <section className={`content ${styles.headerWrapper}`}>
        <div className={styles.headerTop}>
          <div className={styles.creatorLogo}>
            <Image
              src={logo}
              alt={`${name} Creator Logo`}
              fill
              className={styles.image}
            ></Image>
          </div>
          <div className={styles.creatorInfo}>
            <div className={styles.name}>
              <h1>{name}</h1>
              {verified ? (
                <FontAwesomeIcon icon={'fa-circle-check' as IconProp} />
              ) : (
                <></>
              )}
            </div>
            <p className={styles.followText}>Follow on social</p>
            <div className={styles.socials}>
              <Link href="/" passHref>
                <FontAwesomeIcon icon={'fa-brands fa-youtube' as IconProp} />
              </Link>
              <Link href="/" passHref>
                <FontAwesomeIcon icon={'fa-brands fa-instagram' as IconProp} />
              </Link>
              <Link href="/" passHref>
                <FontAwesomeIcon icon={'fa-brands fa-twitch' as IconProp} />
              </Link>
              <Link href="/" passHref>
                <FontAwesomeIcon icon={'fa-brands fa-twitter' as IconProp} />
              </Link>
              <Link href="/" passHref>
                <FontAwesomeIcon icon={'fa-brands fa-discord' as IconProp} />
              </Link>
            </div>
          </div>
          <div>
            <button>Subscribe</button>
          </div>
        </div>
        <div className={styles.headerMenu}>
          <Link href={`/creator/${id}`} passHref>
            Home
          </Link>
          <Link href={`/creator/${id}?page=new`} passHref>
            New
          </Link>
          <Link href={`/creator/${id}?page=tshirts`} passHref>
            T-Shirts
          </Link>
          <Link href={`/creator/${id}?page=outerwear`} passHref>
            Outerwear
          </Link>
          <Link href={`/creator/${id}?page=about`} passHref>
            About
          </Link>
        </div>
      </section>
      <section className="content">
        <ProductList
          title={whatsHotProductList.title}
          url={whatsHotProductList.url}
          items={whatsHotProductList.items}
        />
      </section>
    </>
  );
};

export default Creator;

Creator.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
