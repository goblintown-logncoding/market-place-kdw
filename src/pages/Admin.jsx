import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Stack,
  styled,
  TextareaAutosize,
  TextField,
  Typography
} from '@mui/material';
import { useRef } from 'react';
import { useMutation } from '@tanstack/react-query';
import { addProduct } from '../apis/firestore';
import ImageUploadButton from '../components/ImageUploadButton';

const Admin = () => {
  const productNameRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const mutation = useMutation({
    mutationFn: addProduct
  });

  return (
    <Container>
      <Card sx={{ minWidth: '700px' }}>
        <CardActionArea>
          <Box marginTop="10px" marginLeft="10px">
            <Typography variant="h2" fontSize="25px" fontWeight="500">
              Admin Page
            </Typography>
          </Box>
        </CardActionArea>
        <CardContent sx={{ width: '100%' }}>
          <Stack gap={3}>
            <TextField
              id="filled-basic"
              label="Product Name"
              variant="standard"
              inputRef={productNameRef}
            />
            <TextField id="filled-basic" label="price ($)" variant="standard" inputRef={priceRef} />
            <TextareaAutosize
              aria-label="Description"
              placeholder="Description"
              minRows={5}
              ref={descriptionRef}
            />
            <ImageUploadButton />
          </Stack>
          <Box marginTop="20px">
            <Button
              onClick={() => {
                console.log(productNameRef.current.value); // title
                console.log(priceRef.current.value); // price
                console.log(descriptionRef.current.value); // description
              }}
            >
              Upload
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Admin;
