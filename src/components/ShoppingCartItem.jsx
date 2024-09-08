import { Box, Button, CardMedia, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const ShoppingCartItem = ({ image, title, price, quantity }) => {
  return (
    <Box>
      <Stack flexDirection="row">
        <Box>
          <CardMedia
            component="img"
            height="100px"
            width="100px"
            image={image}
            alt="green iguana"
          />
        </Box>
        <Stack flexDirection="row" flexGrow={1} justifyContent="space-between">
          <Stack flexGrow={1}>
            <Stack flexDirection="row" justifyContent="space-between">
              <Typography>{title}</Typography>
              <Typography>{price}</Typography>
            </Stack>
            <Stack flexDirection="row" sx={{ width: '100%' }}>
              <Typography>{quantity}</Typography>
              <Button>Delete</Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

ShoppingCartItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default ShoppingCartItem;
