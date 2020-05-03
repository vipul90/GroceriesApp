import React from 'react'
import { connect } from 'react-redux';
import GroceryItem from './GroceryItem'
import '../Css/Grocery.css'; 
import GroceryDetailItem from '../../Helpers/GroceryDetail'

class GroceryList extends React.Component {
    render(){
        return (
            <div>
                <table className="groceryTable">
                    <GroceryItem ItemDetail ={new GroceryDetailItem('Item Name','Quantity','Date of Purchase') }></GroceryItem>
                    {this.props.Groceries.map(item =>{
                        return <GroceryItem ItemDetail = {item}></GroceryItem>
                    })}
                </table>
                Grocery List and count is : {this.props.Groceries.length}
            </div>
        );
    }
}

// class GroceryList extends React.Component {
//     render(){
//         return (
//             <div>
//                  <Grid container>
//                         <Grid item xs={1}>
//                             <Paper className="paper">item</Paper>
//                         </Grid>
//                 </Grid>
//                 Grocery List and count is : {this.props.Groceries.length}
//             </div>
//         );
//     }
// }

export default connect((state, props) =>{
    // console.log( state.GroceryDetails.groceryItems.length);
    return {
        Groceries : state.GroceryDetails.groceryItems
    }
})(GroceryList);