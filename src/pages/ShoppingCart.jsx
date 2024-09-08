import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Stack,
  Typography
} from '@mui/material';
import useProductStore from '../stores/useProductStore';
import ShoppingCartList from '../components/ShoppingCartList';

const ShoppingCart = () => {
  const { productObject } = useProductStore();
  console.log(productObject);
  return (
    <Container>
      <Card sx={{ minWidth: '700px' }}>
        <CardActionArea>
          <Stack padding="15px 10px" flexDirection="row" justifyContent="space-between">
            <Typography variant="h2" fontSize="25px" fontWeight="500">
              Shopping Cart
            </Typography>
            <Typography fontSize="12px" alignSelf="end">
              price
            </Typography>
          </Stack>
        </CardActionArea>
        <CardContent sx={{ width: '100%' }}>
          <ShoppingCartList />
        </CardContent>
      </Card>
    </Container>
  );
};

export default ShoppingCart;
