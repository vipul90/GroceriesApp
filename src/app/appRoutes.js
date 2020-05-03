import React from 'react'
import {Switch, Route, BrowserRouter as Router } from "react-router-dom";
import GroceryItem from './grocery/Js/GroceryItem'
import GroceryList from './grocery/Js/GroceryList'
// import { Switch } from '@material-ui/core';
import {history } from './services/history'
import Home from './Home'
// import { connect } from 'react-redux';
import Store from './store/store'
import { Provider } from 'react-redux';
// import './App.css';
export default class AppRoutes extends React.Component {
    render(){
      return (
         <React.Fragment>
            <Router history={history}>
            <Provider store = {Store} >

                <div className="App">
                    <Home />
                    <Switch>
                        <Route exact path="/" component={GroceryList}/>
                        <Route path="/AddItem" component={GroceryItem}/>
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