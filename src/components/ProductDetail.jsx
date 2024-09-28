import { Box, CardMedia, Stack, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

const ProductDetail = ({ title, price, info, imageUrl }) => {
  return (
    <Box>
      <Stack direction="row">
        <CardMedia component="img" height="140" image={imageUrl} alt="green iguana" />
        <Stack>
          <Box marginBottom="10px">
            <Typography variant="h2">{title}</Typography>
            <Typography variant="h4">$ {price}</Typography>
          </Box>
          <Box marginBottom="10px">{info}</Box>
          <Stack>
            <Stack direction="row">
              <Box>
                <IconButton aria-label="add">
                  <AddIcon />
                </IconButton>
              </Box>
              1
              <Box>
                <IconButton aria-label="add">
                  <AddIcon />
                </IconButton>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ProductDetail;
