import React from 'react'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import UserGroceryItem from '../../../Helpers/UserGroceryItem'
import DateValue from '../../../Helpers/Utils'

class AddCartButton extends React.Component {
    constructor(props){
        super(props);
    }
    AddUserGroceryItem(itemId){
        let payload = new UserGroceryItem(-1,itemId,DateValue,1);
        this.props.AddItemFn(payload);
      }
      IncreaseUserGroceryItem(userItemId){
        let payload = {Id:userItemId};
        this.props.IncreaseItemFn(payload);
      }
      DecreaseOrRemoveUserGroceryItem(userItemId,currentQuantity){
        let payload = {Id:userItemId};
        if(currentQuantity > 1)
        {
          this.props.DecreaseItemFn(payload);
        }else{
          this.props.RemoveItemFn(payload);
        }
        
      }
    render(){
        const userDetail = this.props.UserDataForItem;
        const productDetail = this.props.ProductDetail;
       return (
           <React.Fragment>
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
          </React.Fragment>
       );
    }
}

export default AddCartButton;
