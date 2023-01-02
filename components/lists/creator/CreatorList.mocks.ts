import { ICreatorList } from './CreatorList';

const base: ICreatorList = {
  title: 'My Creators',
  url: '/',
  items: [
    { name: 'Creator', image: '/mrBeast.jpeg', url: '/', verified: true },
  ],
};

export const mockCreatorListProps = {
  base,
};
