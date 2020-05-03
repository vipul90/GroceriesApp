import React from 'react'

export default class GroceryItem extends React.Component {
  
    constructor(){
        super();
    }
    render(){
       
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
            </tr>
        );
    }
}