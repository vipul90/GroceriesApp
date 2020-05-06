import React from 'react'
import { Grid } from '@material-ui/core';
import UserGroceryCard from './UserGroceryCard';

class UserGroceryItem extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
       return (
            <Grid item xs={12} sm={12}  md={12} lg={12} className="gridCell">
                <UserGroceryCard {...this.props}></UserGroceryCard>
            </Grid>
       );
    }
}

export default UserGroceryItem;
