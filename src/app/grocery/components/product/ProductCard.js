import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import AddCartButton from '../shared/AddCartButton'


class ProductCard extends React.Component {
    constructor(props){
        super(props);
    }
    
render(){
    const productDetail = this.props.ProductDetail;
  return (
    <Card className="CardRoot">
      <CardActionArea>
        <CardMedia
          component="img"
          alt={productDetail.ItemName}
          height="60"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"/>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h4">
          {productDetail.ItemName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {productDetail.ProductMeasuremnetUnit}
          </Typography>
        </CardContent>
      </CardActionArea>
      <div>
        <span className="spanMargin">
        <strong>&#x20B9;{productDetail.Price}</strong>
        </span>
      <CardActions className="CardButton">
        <AddCartButton {...this.props}/>
      </CardActions>
      </div>
    </Card>
  );
}}

export default ProductCard;