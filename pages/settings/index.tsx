import Head from 'next/head';
import PrimaryLayout from '../../components/layouts/base/PrimaryLayout';
import { NextPageWithLayout } from '../page';

const Settings: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Settings</title>
      </Head>
      <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
        <h1>Settings</h1>
      </section>
    </>
  );
};

export default Settings;

Settings.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
