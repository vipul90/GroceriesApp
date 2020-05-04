import React from 'react';
import DetailLineItem from './DetailLineItem';
import '../Css/Grocery.css'; 
import {Button} from '@material-ui/core'
import constants from '../../Helpers/commonConstants'
import GroceryDetailItem from '../../Helpers/GroceryDetail'
import { connect } from 'react-redux';
import * as actions from '../../action/actionCreators'

class GroceryDetails extends React.Component {

    constructor(){
        super();
        this.AddItemInGroceryHandler = this.AddItemInGrocery.bind(this);
    }
    AddItemInGrocery(){
        const currentDate = new Date();

        const date = currentDate.getDate();
        const month = currentDate.getMonth(); //Be careful! January is 0 not 1
        const year = currentDate.getFullYear();

        const dateString = date + "-" +(month + 1) + "-" + year;
        const newObj = new GroceryDetailItem(-1,'Item 4',2, dateString);
        this.props.dispatch(actions.AddItemInGrocery(newObj));
    }
    render(){
        return (
            <div>
                <DetailLineItem HeaderValue="Enter Your Name" ItemValue = '' ></DetailLineItem>
                <Button onClick={this.AddItemInGroceryHandler} variant="contained" size="medium" color="primary" >Save</Button>
            </div>
        );
    }
}

export default connect((state, props) =>{
    return {
        Groceries : state.GroceryDetails
    }
})(GroceryDetails);