import Head from 'next/head';
import PrimaryLayout from '../../components/layouts/base/PrimaryLayout';
import { NextPageWithLayout } from '../page';

const Collections: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Collections</title>
      </Head>
      <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
        <h1>Subscriptions</h1>
      </section>
    </>
  );
};

export default Collections;

Collections.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
