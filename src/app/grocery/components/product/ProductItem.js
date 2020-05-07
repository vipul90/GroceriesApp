import React from 'react'
import { Grid } from '@material-ui/core';
import ProductCard from './ProductCard'

class ProductItem extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
       return (
            <Grid item xs={12} sm={6}  md={4} lg={3} className="gridCell">
                <ProductCard {...this.props}></ProductCard>
            </Grid>
       );
    }
}

export default ProductItem;
