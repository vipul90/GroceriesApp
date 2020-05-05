import React from 'react'
import { Grid } from '@material-ui/core';
// import '../Css/Grocery'
import ProductCard from './ProductCard'
class ProductItem extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        // console.log(this.props.IsExistInUserBucket);
       return (
            <Grid item xs={12} sm={6}  md={4} lg={2} className="gridCell">
                {/* {this.props.ProductDetail.ItemName} */}
               
                <ProductCard ProductDetail = {this.props.ProductDetail} 
                UserDataForItem= {this.props.UserDataForItem}
                AddItemFn = {this.props.AddItemFn} 
                IncreaseItemFn = {this.props.IncreaseItemFn} 
                DecreaseItemFn = {this.props.DecreaseItemFn} 
                RemoveItemFn= {this.props.RemoveItemFn}
                ></ProductCard>
            </Grid>
       );
    }
}

export default ProductItem;
