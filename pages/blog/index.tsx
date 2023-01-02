import Head from 'next/head';
import PrimaryLayout from '../../components/layouts/base/PrimaryLayout';
import { NextPageWithLayout } from '../page';

const Blog: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
        <h1>Blog</h1>
      </section>
    </>
  );
};

export default Blog;

Blog.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
