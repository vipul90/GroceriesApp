// import React, { Component } from "react";
// export default function lazyLoadComponent(getComponent) {
//     class LazyComponent extends Component {
//         constructor(props){
//             super(props);
//             this.state = { Component: LazyComponent.Component };
//         }

//         componentDidMount() {
//             if (!this.state.Component) {
//                 getComponent().then(Component => {
//                     LazyComponent.Component = Component
//                     this.setState({ Component })
//                 })
//             }
//         }
//         render() {
//             const { Component } = this.state;
//             if (Component) {
//                 return <Component {...this.props} />
//             }
//             return null;
//         }
//     }
//     return LazyComponent;
// }

// import React ,{lazy,Suspense} from 'react'
// // import UserGroceryList from './Cart/UserGroceryList'

// export default function lazyLoadComponent(getComponent) {
// // const UserGroceryList = lazy(() => { return import( './Cart/UserGroceryList')});
// console.log(getComponent);
// const UserGroceryList = lazy(getComponent().then(x=>{alert('Hello')}));
// class LazyComponent extends React.Component {
//     constructor(props){
//         super(props);
//     }
//     render(){
//         return(
//             <div>
//                 <Suspense fallback={<div>Loading...</div>}>
//                     <UserGroceryList {...this.props} ></UserGroceryList>
//                 </Suspense>
//             </div>
//         )
//     }
// }
//     return LazyComponent;
// }
import React ,{Component,Suspense} from 'react'

const LazyComponent = ({component:Component,...rest}) =>{
    return(
        <React.Fragment>
            <Suspense fallback={<div>Loading</div>} >
                <Component {...rest} ></Component>
            </Suspense>
        </React.Fragment>
    )
}

export default LazyComponent;