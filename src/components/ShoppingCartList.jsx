import { Box } from '@mui/material';
import useProductStore from '../stores/useProductStore';
import ShoppingCartItem from './ShoppingCartItem';

const ShoppingCartList = () => {
  const { productList, productObject } = useProductStore();
  return (
    <Box>
      {Object.keys(productObject).map((key) => {
        const { title, image, productNumber, price, count } = productObject[key];
        return (
          <ShoppingCartItem
            key={productNumber}
            title={title}
            image={image}
            quantity={count}
            price={price}
          />
        );
      })}
    </Box>
  );
};

export default ShoppingCartList;
