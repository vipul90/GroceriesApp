import React from 'react'
import {Switch, Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import {history } from './services/history'
import Home from './Home';
import Store from './store/store';
import { Provider } from 'react-redux';
import ProductGroceryList from './grocery/components/product/ProductGroceryList';
// import UserGroceryList from './grocery/components/cart/UserGroceryList';
import ErrorBoundary from './grocery/components/error-boundary/error-boundary'
import LazyComponent from './grocery/components/LazyComponent'
import NotFound from './grocery/components/shared/NotFound'
// const UserGroceryList = lazyLoadComponent(() => import('./grocery/components/Cart/UserGroceryList').then(module => module.default));
// const NotFound = lazyLoadComponent(() => import('./grocery/components/shared/NotFound').then(module => module.default));
// const UserGroceryList = lazyLoadComponent(() => import('./grocery/components/Cart/UserGroceryList'));

const usergroceryLazy = React.lazy(()=> import('./grocery/components/Cart/UserGroceryList'));
const UserGroceryList = (props) =><LazyComponent component={usergroceryLazy} {...props} ></LazyComponent>

export default class AppRoutes extends React.Component {
    render(){
      return (
         <React.Fragment>
            <Router history={history}>
            <Provider store = {Store} >

                <div className="App mainDivPadding">
                    <ErrorBoundary>
                        <Home />
                        <Switch>
                            <Route exact path="/" component={ProductGroceryList}/>
                            <Route exact path="/AddItem" component={UserGroceryList}/>
                            <Route><Redirect to="/" /> </Route>
                        </Switch>
                    </ErrorBoundary>
                </div>
            </Provider>

            </Router>
        
        </React.Fragment>
      )
    }
}