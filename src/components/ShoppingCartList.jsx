import { Box } from '@mui/material';
import ShoppingCartItem from './ShoppingCartItem';
import { useEffect, useState } from 'react';
import { getAllDocsInShoppingCartCollection } from '../apis/firestore';

const ShoppingCartList = () => {
  return (
    <Box>
      {.map((obj) => {
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
