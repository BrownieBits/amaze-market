import Head from 'next/head';
import PrimaryLayout from '../../components/layouts/base/PrimaryLayout';
import CreatorList, {
  ICreatorList,
} from '../../components/lists/creator/CreatorList';
import { NextPageWithLayout } from '../page';
const youSubscriptions: ICreatorList = {
  title: 'Your Subscriptions',
  url: '',
  items: [
    {
      name: 'MrBeast',
      url: '/',
      image: '/creators/mrBeast.jpeg',
      verified: true,
    },
    {
      name: 'Previewd',
      url: '/',
      image: '/creators/previewd.jpeg',
      verified: false,
    },
  ],
};
const upAndComingCreatorList: ICreatorList = {
  title: 'Up And Coming Creators',
  url: '/',
  items: [
    {
      name: 'MrBeast',
      url: '/',
      image: '/mrBeast.jpeg',
      verified: true,
    },
    {
      name: 'BrownieBits',
      url: '/',
      image: '/mrBeast.jpeg',
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
      image: '/mrBeast.jpeg',
      verified: true,
    },
    {
      name: 'MrBeast',
      url: '/',
      image: '/mrBeast.jpeg',
      verified: true,
    },
    {
      name: 'MrBeast',
      url: '/',
      image: '/mrBeast.jpeg',
      verified: true,
    },
    {
      name: 'MrBeast',
      url: '/',
      image: '/mrBeast.jpeg',
      verified: true,
    },
    {
      name: 'MrBeast',
      url: '/',
      image: '/mrBeast.jpeg',
      verified: true,
    },
    {
      name: 'BrownieBits',
      url: '/',
      image: '/mrBeast.jpeg',
      verified: false,
    },
  ],
};

const Subscriptions: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Subscriptions</title>
      </Head>
      <CreatorList
        title={youSubscriptions.title}
        url={youSubscriptions.url}
        items={youSubscriptions.items}
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

export default Subscriptions;

Subscriptions.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
