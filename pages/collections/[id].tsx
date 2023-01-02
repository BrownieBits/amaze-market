import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import PrimaryLayout from '../../components/layouts/base/PrimaryLayout';
import { NextPageWithLayout } from '../page';

interface Props {
  id: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params!.id ? params!.id : '';
  return {
    props: {
      id,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  // const paths = getAllPostIds();
  const paths: any = [
    '/collections/new',
    '/collections/holiday',
    '/collections/trending',
    '/collections/staff-picks',
    '/collections/pop-culture',
    '/collections/t-shirts',
    '/collections/outerwear',
    '/collections/accessories',
    '/collections/home-goods',
  ];
  return {
    paths,
    fallback: false,
  };
};

const Collection: NextPageWithLayout<Props> = ({ id }) => {
  const { locale } = useRouter();
  return (
    <>
      <Head>
        <title>
          {id.charAt(0).toUpperCase() + id.substring(1).replace('-', ' ')}{' '}
          Collection
        </title>
      </Head>
      <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
        <h1>
          {id.charAt(0).toUpperCase() + id.substring(1).replace('-', ' ')}{' '}
          Collection
        </h1>
      </section>
    </>
  );
};

export default Collection;

Collection.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
