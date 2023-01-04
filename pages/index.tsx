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
      url: '/creator/mrBeast',
      image: '/creators/mrBeast.jpeg',
      verified: true,
    },
    {
      name: 'Previewd',
      url: '/creator/previewd',
      image: '/creators/previewd.jpeg',
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
      url: '/creator/mrBeast',
      image: '/creators/mrBeast.jpeg',
      verified: true,
    },
    {
      name: 'MrBeast',
      url: '/creator/mrBeast',
      image: '/creators/mrBeast.jpeg',
      verified: true,
    },
    {
      name: 'MrBeast',
      url: '/creator/previewd',
      image: '/creators/previewd.jpeg',
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
      url: '/creator/mrBeast',
      image: '/creators/mrBeast.jpeg',
      verified: true,
    },
    {
      name: 'Moriah Elizabeth',
      url: '/creator/moriah-elizabeth',
      image: '/creators/moriahElizabeth.jpeg',
      verified: false,
    },
  ],
};
const whatsHotProductList: IProductList = {
  title: 'Whats Hot',
  url: '/',
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
  ],
};

const Home: NextPageWithLayout = () => {
  return (
    <div className="content">
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
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
