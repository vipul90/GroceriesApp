import React from 'react'
import { connect } from 'react-redux';
import GroceryListItem from './GroceryListItem'
import '../Css/Grocery.css'; 
import GroceryDetailItem from '../../Helpers/GroceryDetail'

class GroceryList extends React.Component {
    render(){
        return (
            <div>
                <table className="groceryTable">
                    <GroceryListItem ItemDetail ={new GroceryDetailItem(-1, 'Item Name','Quantity','Date of Purchase') }></GroceryListItem>
                    {this.props.Groceries.map(item =>{
                        return <GroceryListItem ItemDetail = {item}></GroceryListItem>
                    })}
                </table>
                <br />
                Grocery count is : {this.props.Groceries.length}
            </div>
        );
    }
}

export default connect((state, props) =>{
    // console.log( state.GroceryDetails.groceryItems.length);
    return {
        Groceries : state.GroceryDetails.groceryItems
    }
})(GroceryList);