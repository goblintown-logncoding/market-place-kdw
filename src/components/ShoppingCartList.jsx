import { Box } from '@mui/material';
import ShoppingCartItem from './ShoppingCartItem';
import { getAllDocsInShoppingCartCollection } from '../apis/firestore';
import { useQuery } from '@tanstack/react-query';

const ShoppingCartList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['shoppingCartList'],
    queryFn: getAllDocsInShoppingCartCollection
  });

  if (isLoading) {
    return 'Loading...';
  }

  return (
    <Box>
      {data.map((obj) => {
        const { title, image, productNumber, price, quantity } = obj;
        return (
          <ShoppingCartItem
            key={productNumber}
            title={title}
            image={image}
            quantity={quantity}
            price={price}
            productNumber={productNumber}
          />
        );
      })}
    </Box>
  );
};

export default ShoppingCartList;
