import React from 'react'
import {Switch, Route, BrowserRouter as Router } from "react-router-dom";
import GroceryDetails from './grocery/components/GroceryDetails'
// import UserGroceryList from './grocery/components/UserGroceryList'
import {history } from './services/history'
import Home from './Home'
import Store from './store/store'
import { Provider } from 'react-redux';

export default class AppRoutes extends React.Component {
    render(){
      return (
         <React.Fragment>
            <Router history={history}>
            <Provider store = {Store} >

                <div className="App">
                    <Home />
                    {/* <Switch>
                        <Route exact path="/" component={GroceryDetails}/>
                        <Route path="/AddItem" component={GroceryDetails}/>
                    </Switch> */}
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