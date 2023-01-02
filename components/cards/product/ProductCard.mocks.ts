import { IProductCard } from './ProductCard';

const base: IProductCard = {
  name: 'Product title',
  type: 'Product Type',
  url: '/',
  price: '$19.99',
  productImage: '/creators/mrBeast.jpeg',
  creatorImage: '/creators/mrBeast.jpeg',
  creatorUrl: '/',
  creatorName: 'Creator Name',
  creatorVerified: true,
};

export const mockProductCardProps = {
  base,
};
