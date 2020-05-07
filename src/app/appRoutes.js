import React, {lazy, Suspense} from 'react'
import {Switch, Route, BrowserRouter as Router } from "react-router-dom";
// import UserGroceryList from './grocery/components/Cart/UserGroceryList'
//  import TestFile from './grocery/components/TestFile'
import {history } from './services/history'
import Home from './Home';
import Store from './store/store';
import { Provider } from 'react-redux';
import ProductGroceryList from './grocery/components/product/ProductGroceryList';
import ErrorBoundary from './grocery/components/error-boundary/error-boundary'
import asyncComponent from './grocery/components/AsyncComponent'
// const UserGroceryList = () => import('./grocery/components/cart/UserGroceryList');
// const UserGroceryList = asyncComponent('./Cart/UserGroceryList.js');


const UserGroceryList = asyncComponent(() => import('./grocery/components/Cart/UserGroceryList').then(module => module.default));
// const UserGroceryList = resolve =>{
//     require.ensure(['./grocery/components/cart/UserGroceryList'],()=>{
//             resolve(require('./grocery/components/cart/UserGroceryList'));
//     });
// };

// const UserGroceryList = lazy(() => { return import('./grocery/components/TestFile')});
// const UserGroceryList = loadable(() => import('./grocery/components/cart/UserGroceryList'), {
//     fallback: <div>Test</div>
//   });
export default class AppRoutes extends React.Component {
    render(){
      return (
         <React.Fragment>
            <Router history={history}>
            <Provider store = {Store} >

                <div className="App mainDivPadding">
                    {/* <ErrorBoundary> */}
                        <Home />
                        <Switch>
                            <Route exact path="/" component={ProductGroceryList}/>
                            <Route path="/AddItem" component={UserGroceryList}/>
                            {/* <Route path="*" component={NotFound} /> */}
                        </Switch>
                    {/* </ErrorBoundary> */}
                </div>
            </Provider>

            </Router>
        
        </React.Fragment>
      )
    }
}