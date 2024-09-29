import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';
import { useEffect, useState } from 'react';
import { getAllDocsInProductCollection } from '../apis/firestore';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getAllDocsInProductCollection().then((e) => {
      const targetProduct = e.find((p) => p.productNumber === id);
      console.log(targetProduct);
      setProduct(targetProduct);
    });
  }, []);
  const dummyData = {
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/marketplace-kdw.appspot.com/o/apple.jpg?alt=media&token=d1ce71d5-a570-4aa5-ab77-d092cf85568d',
    title: 'Apple',
    price: 12,
    info: (
      <Box>
        <Typography>this is dummy info</Typography>
        <li> this is dummy info </li>
        <li> this is dummy info </li>
      </Box>
    )
  };

  return (
    <Box>
      <ProductDetail
        imageUrl={product.image}
        title={product.title}
        price={product.price}
        info={dummyData.info}
      />
    </Box>
  );
};

export default ProductDetailPage;
