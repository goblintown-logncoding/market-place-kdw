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
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useRef } from 'react';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1
});

const Admin = () => {
  const productNameRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();

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
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Select Product Image
              <VisuallyHiddenInput
                type="file"
                onChange={(event) => console.log(event.target.files)}
                multiple
              />
            </Button>
          </Stack>
          <Box marginTop="20px">
            <Button
              onClick={() => {
                console.log(productNameRef.current.value);
                console.log(priceRef.current.value);
                console.log(descriptionRef.current.value);
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
