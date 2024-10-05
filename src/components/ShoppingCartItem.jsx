import {
  Box,
  Button,
  CardMedia,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';

const ShoppingCartItem = ({ image, title, price, quantity }) => {
  const [selectQuantity, setSelectQuantity] = useState(quantity);
  const [isUpdated, setIsUpdated] = useState(false);

  const handleChange = (e) => {
    setSelectQuantity(e.target.value);
  };

  const handleUpdate = () => {
    setIsUpdated(true);
  };

  const handleFocus = () => {
    setIsUpdated(false);
  };

  return (
    <Box>
      <Stack flexDirection="row">
        <Box marginRight={2}>
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
            <Stack marginTop={1} flexDirection="row" alignItems="center" sx={{ width: '100%' }}>
              <Box>
                {selectQuantity > 10 || selectQuantity === '10+' ? (
                  <Stack flexDirection="row" alignItems="center" justifyContent="center">
                    <TextField
                      sx={{
                        width: '70px',
                        fontSize: '10px',
                        '.MuiInputBase-root': {
                          height: '45px'
                        }
                      }}
                      label="Qty"
                      variant="outlined"
                      onFocus={handleFocus}
                    />
                    {isUpdated || <Button onClick={handleUpdate}>Update</Button>}
                  </Stack>
                ) : (
                  <FormControl fullWidth>
                    <InputLabel>Qty</InputLabel>
                    <Select
                      sx={{ height: 40 }}
                      value={selectQuantity}
                      label="Qty"
                      onChange={handleChange}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, '10+'].map((n) => {
                        if (n === '10+') {
                          return (
                            <MenuItem key={'10+'} value={'10+'}>
                              10+
                            </MenuItem>
                          );
                        }
                        return (
                          <MenuItem key={n} value={n}>
                            {n}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                )}
              </Box>
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
