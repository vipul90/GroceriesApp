import React, { Component } from 'react'

import {Button} from '@material-ui/core'

import {Route, NavLink, BrowserRouter as Router } from "react-router-dom";
import AppRoutes from './appRoutes'
// import './grocery/Css/Grocery'
import './App.css';

export default class App extends Component {
    render(){
        return (
            <AppRoutes />
        );
    }
}
