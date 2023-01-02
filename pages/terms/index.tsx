import Head from 'next/head';
import PrimaryLayout from '../../components/layouts/base/PrimaryLayout';
import { NextPageWithLayout } from '../page';

const Terms: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Terms of Service</title>
      </Head>
      <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
        <h1>Terms of Service</h1>
      </section>
    </>
  );
};

export default Terms;

Terms.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
