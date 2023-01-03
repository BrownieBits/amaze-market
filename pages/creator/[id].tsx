import { collection, getDocs, limit, query, where } from 'firebase/firestore';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import PrimaryLayout from '../../components/layouts/base/PrimaryLayout';
import { db } from '../../lib/Firebase/firebase';
import { NextPageWithLayout } from '../page';

interface Props {
  id: string;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params!.id ? params!.id : '';
  const colRef = collection(db, 'creators');
  const todosQuery = query(colRef, where('name', '==', 'mrBeast'), limit(1));

  const snapshot = await await getDocs(todosQuery);
  console.log(snapshot.docs[0].data().name);
  return {
    props: {
      id,
    },
  };
};

const Creator: NextPageWithLayout<Props> = ({ id }) => {
  return (
    <>
      <Head>
        <title>
          {id.charAt(0).toUpperCase() + id.substring(1).replace('-', ' ')}{' '}
          Creator
        </title>
      </Head>
      <section>
        <h1>
          {id.charAt(0).toUpperCase() + id.substring(1).replace('-', ' ')}{' '}
          Creator
        </h1>
      </section>
    </>
  );
};

export default Creator;

Creator.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
