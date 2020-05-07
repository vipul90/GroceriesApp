import React from 'react'
import { Grid } from '@material-ui/core';
import '../../Css/Grocery'
import UserGroceryItem from './UserGroceryItem'
import {connect} from 'react-redux'
import * as actionCreators from '../../../action/actionCreators'
import {bindActionCreators} from 'redux'
import "@babel/polyfill"
import PropTypes from "prop-types";

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
                      key={item.Id} 
                      UserDataForItem = {item}
                      AddItemFn = {this.props.AddItemInUserGroceryList}
                      IncreaseItemFn = {this.props.IncreaseItemInUserGroceryList}
                      DecreaseItemFn = {this.props.DecreaseItemInUserGroceryList}
                      RemoveItemFn = {this.props.RemoveItemInUserGroceryList} 
                      ProductDetail = {this.props.AvailableGroceries.find(x => x !==undefined && x.ItemId == item.ItemId) }>
                      </UserGroceryItem>
                })}
                </Grid>
                <div>
                <Grid container>
                    <Grid item xs={12} sm={12}  md={10} lg={12} className="">
                        <hr />
                    </Grid>
                    <Grid item xs={12} sm={12}  md={10} lg={12} className="">
                        <Grid container>
                            <Grid item xs={10} sm={10}  md={10} lg={10} className="gridTotal">
                                Total is : 
                            </Grid>
                            <Grid item xs={2} sm={2}  md={2} lg={2} className="gridTotalValue">
                               <strong>&#x20B9;{this.props.UserGroceries.reduce((prev,next)=>{ return prev + next.Total; },0)} </strong>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
              
                </div> 
            </div>
        );
    }
}

UserGroceryList.propTypes = {
    UserGroceries: PropTypes.array,
    AvailableGroceries: PropTypes.array,
    AddItemInUserGroceryList: PropTypes.func,
    IncreaseItemInUserGroceryList: PropTypes.func,
    DecreaseItemInUserGroceryList: PropTypes.func,
    RemoveItemInUserGroceryList: PropTypes.func,
  };
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