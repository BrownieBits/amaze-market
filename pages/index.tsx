import Head from 'next/head';
import { useRouter } from 'next/router';
import PrimaryLayout from '../components/layouts/base/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const { locale } = useRouter();

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
        <h1>Home</h1>
      </section>
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
