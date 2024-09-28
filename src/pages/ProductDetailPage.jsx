import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';

const ProductDetailPage = () => {
  const { id } = useParams();
  const dummyData = {
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/market…=media&token=d1ce71d5-a570-4aa5-ab77-d092cf85568d',
    title: 'Apple',
    price: 12,
    info: <Box>this is dummy info</Box>
  };

  return (
    <Box>
      <ProductDetail
        imageUrl={dummyData.imageUrl}
        title={dummyData.title}
        price={dummyData.price}
        info={dummyData.info}
      />
    </Box>
  );
};

export default ProductDetailPage;
