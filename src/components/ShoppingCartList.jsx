import { Box } from '@mui/material';
import ShoppingCartItem from './ShoppingCartItem';
import { useEffect, useState } from 'react';
import { getAllDocsInShoppingCartCollection } from '../apis/firestore';

const ShoppingCartList = () => {
  const [shoppingCartList, setShoppingCartList] = useState([]);
  useEffect(() => {
    getAllDocsInShoppingCartCollection().then((e) => setShoppingCartList(e));
  }, []);
  console.log(shoppingCartList);
  return (
    <Box>
      {shoppingCartList.map((obj) => {
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
