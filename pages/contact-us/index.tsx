import Head from 'next/head';
import PrimaryLayout from '../../components/layouts/base/PrimaryLayout';
import { NextPageWithLayout } from '../page';

const Contact: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
        <h1>Contact Us</h1>
      </section>
    </>
  );
};

export default Contact;

Contact.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
