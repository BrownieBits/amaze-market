import Head from 'next/head';
import PrimaryLayout from '../../components/layouts/base/PrimaryLayout';
import { NextPageWithLayout } from '../page';

const Press: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Press</title>
      </Head>
      <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
        <h1>Press</h1>
      </section>
    </>
  );
};

export default Press;

Press.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
