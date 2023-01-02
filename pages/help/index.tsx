import Head from 'next/head';
import PrimaryLayout from '../../components/layouts/base/PrimaryLayout';
import { NextPageWithLayout } from '../page';

const Help: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Help</title>
      </Head>
      <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
        <h1>Help</h1>
      </section>
    </>
  );
};

export default Help;

Help.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
