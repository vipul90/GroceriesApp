import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import UserGroceryItem from '../../Helpers/UserGroceryItem'
import DateValue from '../../Helpers/Utils'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import Tooltip from '@material-ui/core/Tooltip';

class ProductCard extends React.Component {
//   const classes = useStyles();
    constructor(props){
        super(props);
        // this.AddUserGroceryItemHandler = this.AddUserGroceryItem.bind(this);
    }
    AddUserGroceryItem(itemId){
      // console.log("Item id is", itemId)
      let payload = new UserGroceryItem(-1,itemId,DateValue,1);
      this.props.AddItemFn(payload);
    }
    IncreaseUserGroceryItem(userItemId){
      // console.log("Item id is", itemId)
      let payload = {Id:userItemId};
      this.props.IncreaseItemFn(payload);
    }
    DecreaseOrRemoveUserGroceryItem(userItemId,currentQuantity){
      // console.log("Item id is", itemId)
      let payload = {Id:userItemId};
      if(currentQuantity > 1)
      {
        this.props.DecreaseItemFn(payload);
      }else{
        this.props.RemoveItemFn(payload);
      }
      
    }
render(){
    const productDetail = this.props.ProductDetail;
    const userDetail = this.props.UserDataForItem;
    // console.log("User detail Quantity is",userDetail);
    // console.log("Product Quantity is",productDetail.Quantity);
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
        {(userDetail===undefined || userDetail.Quantity === 0) ? <Button variant="contained" color="primary" size="small" 
        onClick={this.AddUserGroceryItem.bind(this,productDetail.ItemId)}>
          Add To Cart
          </Button> : 
          (<div >
            <RemoveCircleOutlineIcon onClick={this.DecreaseOrRemoveUserGroceryItem.bind(this,userDetail.Id,userDetail.Quantity)}/>
            <span className="spanCardActions">{userDetail.Quantity}</span>
            {userDetail.Quantity !== productDetail.Quantity ?
                <AddCircleOutlineIcon  onClick={this.IncreaseUserGroceryItem.bind(this,userDetail.Id)}/> :
                <Tooltip title="You can't add more items" arrow>
                  <AddCircleOutlineIcon />
                </Tooltip>}
          </div>)}
      </CardActions>
      </div>
    </Card>
  );
}};

export default ProductCard;
