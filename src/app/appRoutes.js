import React from 'react'
import {Switch, Route, BrowserRouter as Router } from "react-router-dom";
import UserGroceryList from './grocery/components/cart/UserGroceryList'
import {history } from './services/history'
import Home from './Home';
import Store from './store/store';
import { Provider } from 'react-redux';
import ProductGroceryList from './grocery/components/ProductGroceryList';

export default class AppRoutes extends React.Component {
    render(){
      return (
         <React.Fragment>
            <Router history={history}>
            <Provider store = {Store} >

                <div className="App mainDivPadding">
                    <Home />
                    <Switch>
                        <Route exact path="/" component={ProductGroceryList}/>
                        <Route path="/AddItem" component={UserGroceryList}/>
                    </Switch>
                </div>
            </Provider>

            </Router>
        
        </React.Fragment>
      )
    }
}