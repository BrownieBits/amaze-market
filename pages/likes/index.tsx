import Head from 'next/head';
import PrimaryLayout from '../../components/layouts/base/PrimaryLayout';
import { NextPageWithLayout } from '../page';

const Likes: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Your Likes</title>
      </Head>
      <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
        <h1>Your Likes</h1>
      </section>
    </>
  );
};

export default Likes;

Likes.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
