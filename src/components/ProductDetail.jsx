import { Box, CardMedia, Stack, Typography } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import AddToCartButton from './AddToCartButton';

const ProductDetail = ({ title, price, info, imageUrl }) => {
  return (
    <Box>
      <Stack direction="row">
        <CardMedia component="img" height="250" image={imageUrl} alt="green iguana" />
        <Stack>
          <Box>
            <Typography variant="h2" fontWeight="400">
              {title}
            </Typography>
            <Typography variant="h4">$ {price}</Typography>
          </Box>
          <Box marginTop="20px" marginBottom="20px">
            {info}
          </Box>
          <Stack sx={{ width: 800 }}>
            <Stack direction="row" alignItems="center" justifyItems="center">
              <Box sx={{ marginRight: '20px' }}>
                <IconButton sx={{ backgroundColor: 'lightgrey' }} aria-label="add">
                  <RemoveIcon />
                </IconButton>
              </Box>
              1
              <Box sx={{ marginLeft: '20px' }}>
                <IconButton sx={{ backgroundColor: 'lightgrey' }} aria-label="add">
                  <AddIcon />
                </IconButton>
              </Box>
              <Box marginLeft="30px">
                <AddToCartButton sx={{ width: '300px' }} />
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ProductDetail;
