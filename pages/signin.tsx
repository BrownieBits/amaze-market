import PrimaryLayout from '../components/layouts/base/PrimaryLayout';
// import Date from '../components/date';

import { NextPageWithLayout } from './page';

const SignIn: NextPageWithLayout = () => {
  return (
    <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
      <h1> sign in</h1>
    </section>
  );
};

export default SignIn;

SignIn.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
