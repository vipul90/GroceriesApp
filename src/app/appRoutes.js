import React from 'react'
import {Switch, Route, BrowserRouter as Router } from "react-router-dom";
import GroceryDetails from './grocery/components/GroceryDetails'
import UserGroceryList from './grocery/components/cart/UserGroceryList'
import {history } from './services/history'
import Home from './Home';
import Store from './store/store';
import { Provider } from 'react-redux';
import ProductGroceryList from './grocery/components/ProductGroceryList';
// import './App.css'

export default class AppRoutes extends React.Component {
    render(){
      return (
         <React.Fragment>
            <Router history={history}>
            <Provider store = {Store} >

                <div className="App" className="mainDivPadding">
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
       
// const AppRoutes= connect(function mapStoreToProps(state, props){
//     console.log(state);
//     console.log(props);
// })(RoutesApp);

// export default AppRoutes;