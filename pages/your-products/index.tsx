import Head from 'next/head';
import PrimaryLayout from '../../components/layouts/base/PrimaryLayout';
import { NextPageWithLayout } from '../page';

const YourProducts: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Your Products</title>
      </Head>
      <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
        <h1>Your Products</h1>
      </section>
    </>
  );
};

export default YourProducts;

YourProducts.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
