import Head from 'next/head';
import PrimaryLayout from '../../components/layouts/base/PrimaryLayout';
import { NextPageWithLayout } from '../page';

const Privacy: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
        <h1>Privacy Policy</h1>
      </section>
    </>
  );
};

export default Privacy;

Privacy.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
