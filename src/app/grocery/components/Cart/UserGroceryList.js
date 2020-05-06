import React from 'react'
import { Grid } from '@material-ui/core';
import '../../Css/Grocery'
import UserGroceryItem from './UserGroceryItem'
import {connect} from 'react-redux'
import * as actionCreators from '../../../action/actionCreators'
import {bindActionCreators} from 'redux'

class UserGroceryList extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <div>
                <Grid container spacing = {2}>
                {this.props.UserGroceries.map(item=>{
                      return <UserGroceryItem 
                      key={item.ItemId} 
                      UserDataForItem = {item}
                      AddItemFn = {this.props.AddItemInUserGroceryList}
                      IncreaseItemFn = {this.props.IncreaseItemInUserGroceryList}
                      DecreaseItemFn = {this.props.DecreaseItemInUserGroceryList}
                      RemoveItemFn = {this.props.RemoveItemInUserGroceryList} 
                      ProductDetail = {this.props.AvailableGroceries.find(x => x !==undefined && x.ItemId == item.ItemId) }>
                      </UserGroceryItem>
                })}
                </Grid>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        ...bindActionCreators(actionCreators,dispatch)
    }
}

const mapStateToProps = (state) =>{
    return {
        AvailableGroceries : state.GroceryDetails.availableGroceryList,
        UserGroceries : state.GroceryDetails.userGroceryItems,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserGroceryList);