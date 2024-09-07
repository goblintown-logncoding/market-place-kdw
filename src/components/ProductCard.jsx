import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import useProductStore from '../stores/useProductStore';
import PropTypes from 'prop-types';

const ProductCard = (props) => {
  const { add } = useProductStore();
  const { productNumber, title, price, image } = props;
  return (
    <Card key={productNumber} sx={{ minWidth: 200, maxWidth: 345 }}>
      <CardActionArea>
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
            add(props);
          }}
          size="small"
          color="primary"
        >
          Add to Card
        </Button>
      </CardActions>
    </Card>
  );
};

ProductCard.propTypes = {
  productNumber: PropTypes.string
};

export default ProductCard;
