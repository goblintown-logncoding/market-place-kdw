import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import useProductStore from '../stores/useProductStore';
import PropTypes from 'prop-types';
import { setDocInShoppingCartCollection } from '../apis/firestore';
import { useNavigate } from 'react-router-dom';

const ProductCard = (props) => {
  const { addToObject } = useProductStore();
  const { productNumber, title, price, image } = props;
  const navigate = useNavigate();
  return (
    <Card sx={{ minWidth: 200, maxWidth: 345 }}>
      <CardActionArea
        onClick={() => {
          navigate('/product-detail/' + productNumber);
        }}
      >
        <CardMedia component="img" height="140" image={image} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => {
            /*
            const {productNumber, title, image, price} = props
            */
            setDocInShoppingCartCollection(props);

            //addToObject(props);
          }}
          size="small"
          color="primary"
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

ProductCard.propTypes = {
  productNumber: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default ProductCard;
