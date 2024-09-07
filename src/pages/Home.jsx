import { Box, Stack } from '@mui/material';
import ProductCard from '../components/ProductCard';
import apple from '../assets/apple.jpg';
import bananas from '../assets/bananas.jpg';
import potato from '../assets/potato.jpg';

function Home() {
  const dummyProductList = [
    {
      productNumber: '1000',
      title: 'Apple',
      price: '$6',
      image: apple
    },
    {
      productNumber: '1001',
      title: 'Bananas',
      price: '$3',
      image: bananas
    },
    {
      productNumber: '1002',
      title: 'Potato',
      price: '$2',
      image: potato
    }
  ];

  return (
    <Stack flexDirection="row" gap="20px">
      {dummyProductList.map(({ productNumber, title, price, image }) => {
        return (
          <ProductCard productNumber={productNumber} title={title} price={price} image={image} />
        );
      })}
    </Stack>
  );
}

export default Home;
