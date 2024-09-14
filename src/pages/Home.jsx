import { Stack } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { useEffect, useState } from 'react';
import { getAllDocsInProductCollection } from '../apis/firestore';

function Home() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getAllDocsInProductCollection().then((e) => {
      setProductList(e);
    });
  }, []);

  return (
    <Stack flexDirection="row" gap="20px">
      {productList.map(({ productNumber, title, price, image }) => {
        return (
          <ProductCard
            key={productNumber}
            productNumber={productNumber}
            title={title}
            price={`$${price}`}
            image={image}
          />
        );
      })}
    </Stack>
  );
}

export default Home;
