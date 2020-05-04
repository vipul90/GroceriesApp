import React from 'react'
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import DeleteIcon from '@material-ui/icons/Delete';

export default class GroceryListItem extends React.Component {
  
    constructor(){
        super();
    }
    render(){
        const itemId = this.props.ItemDetail.ItemId;
        return (
            <tr>
                <td className ="cell" >
                   {this.props.ItemDetail.ItemName} 
                </td>
                 <td className ="cell" >
                   {this.props.ItemDetail.Quantity} 
                </td>
                <td className ="cell" >
                   {this.props.ItemDetail.Date} 
                </td> 
                <td className ="cell">
                 {  itemId > 0 ? <DeleteIcon onClick={this.props.RemoveFn.bind(this,this.props.ItemDetail,this.props.DispatchFn)} /> : ''}
                </td>
            </tr>
        );
    }
}