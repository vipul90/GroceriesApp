import React from 'react'
import { Grid } from '@material-ui/core';
// import '../Css/Grocery'
import UserGroceryCard from './UserGroceryCard';
// import Dummycard from './Dummycard'
class UserGroceryItem extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
       return (
            <Grid item xs={12} sm={12}  md={10} lg={10} className="gridCell">
                <UserGroceryCard {...this.props}></UserGroceryCard>
                {/* <Dummycard {...this.props}></Dummycard> */}
            </Grid>
       );
    }
}

export default UserGroceryItem;
