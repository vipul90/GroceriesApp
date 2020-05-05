import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import ProductGroceryList from './grocery/components/ProductGroceryList'

export default class Home extends Component {
    render(){
        return (

                <div>
                <h1>Grocery App</h1>
                <ul className="header">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/AddItem">Add Item</NavLink></li>
                </ul>
                <ProductGroceryList />
                </div>
        );
    }
}
