import Head from 'next/head';
import PrimaryLayout from '../../components/layouts/base/PrimaryLayout';
import { NextPageWithLayout } from '../page';

const About: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
        <h1>About</h1>
      </section>
    </>
  );
};

export default About;

About.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
