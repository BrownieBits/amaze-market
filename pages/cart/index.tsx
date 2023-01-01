import Head from 'next/head';
import PrimaryLayout from '../../components/layouts/base/PrimaryLayout';
import { NextPageWithLayout } from '../page';

const Cart: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
        <h1>Cart</h1>
      </section>
    </>
  );
};

export default Cart;

Cart.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
