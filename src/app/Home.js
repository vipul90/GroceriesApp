import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class Home extends Component {
    render(){
        return (

                <div>
                <h1>Simple SPA</h1>
                <ul className="header">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/AddItem">Add Item</NavLink></li>
                </ul>
                </div>
        );
    }
}
