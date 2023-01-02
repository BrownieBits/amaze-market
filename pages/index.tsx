import Head from 'next/head';
import PrimaryLayout from '../components/layouts/base/PrimaryLayout';
import CreatorList, {
  ICreatorList,
} from '../components/lists/creator/CreatorList';
import ProductList, {
  IProductList,
} from '../components/lists/product/ProductList';
import { NextPageWithLayout } from './page';

const upAndComingCreatorList: ICreatorList = {
  title: 'Up And Coming Creators',
  url: '/',
  items: [
    {
      name: 'MrBeast',
      url: '/',
      image: '/creators/mrBeast.jpeg',
      verified: true,
    },
    {
      name: 'BrownieBits',
      url: '/',
      image: '/creators/mrBeast.jpeg',
      verified: false,
    },
  ],
};
const topCreatorList: ICreatorList = {
  title: 'Top Creators',
  url: '/',
  items: [
    {
      name: 'MrBeast',
      url: '/',
      image: '/creators/mrBeast.jpeg',
      verified: true,
    },
    {
      name: 'MrBeast',
      url: '/',
      image: '/creators/mrBeast.jpeg',
      verified: true,
    },
    {
      name: 'MrBeast',
      url: '/',
      image: '/creators/mrBeast.jpeg',
      verified: true,
    },
    {
      name: 'MrBeast',
      url: '/',
      image: '/creators/mrBeast.jpeg',
      verified: true,
    },
    {
      name: 'MrBeast',
      url: '/',
      image: '/creators/mrBeast.jpeg',
      verified: true,
    },
    {
      name: 'BrownieBits',
      url: '/',
      image: '/creators/mrBeast.jpeg',
      verified: false,
    },
  ],
};
const whatsHotProductList: IProductList = {
  title: 'Whats Hot',
  url: '/',
  items: [
    {
      name: 'Product title',
      type: 'Premium Tee',
      url: '/',
      price: '$19.99',
      productImage: '/creators/mrBeast.jpeg',
      creatorImage: '/creators/mrBeast.jpeg',
      creatorUrl: '/creator/mrbeast',
      creatorName: 'MrBeast',
      creatorVerified: true,
    },
    {
      name: 'Product title',
      type: 'Zip Up Hoodie',
      url: '/',
      price: '$19.99',
      productImage: '/creators/previewd.jpeg',
      creatorImage: '/creators/previewd.jpeg',
      creatorUrl: '/creator/mrbeast',
      creatorName: 'Previewd',
      creatorVerified: true,
    },
  ],
};

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <ProductList
        title={whatsHotProductList.title}
        url={whatsHotProductList.url}
        items={whatsHotProductList.items}
      />
      <CreatorList
        title={upAndComingCreatorList.title}
        url={upAndComingCreatorList.url}
        items={upAndComingCreatorList.items}
      />
      <CreatorList
        title={topCreatorList.title}
        url={topCreatorList.url}
        items={topCreatorList.items}
      />
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
