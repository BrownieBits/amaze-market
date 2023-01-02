import Head from 'next/head';
import PrimaryLayout from '../../components/layouts/base/PrimaryLayout';
import { NextPageWithLayout } from '../page';

const Feedback: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Send Feedback</title>
      </Head>
      <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
        <h1>Send Feedback</h1>
      </section>
    </>
  );
};

export default Feedback;

Feedback.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
