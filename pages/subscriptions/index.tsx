import Head from 'next/head';
import PrimaryLayout from '../../components/layouts/base/PrimaryLayout';
import { NextPageWithLayout } from '../page';

const Subscriptions: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Subscriptions</title>
      </Head>
      <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
        <h1>Subscriptions</h1>
      </section>
    </>
  );
};

export default Subscriptions;

Subscriptions.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
