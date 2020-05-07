// import React ,{lazy,Suspense} from 'react'

// export default function AsyncComponent(props){
//     const LazyComponent = lazy(() => { return import(props.Component)});
//     class AsyncComponent extends React.Component {
//         constructor(props){
//             super(props);
//         }
//         render(){
//             return(
//                 <div>
//                     <Suspense fallback={<div>Loading...</div>}>
//                         <LazyComponent {...this.props} ></LazyComponent>
//                     </Suspense>
//                 </div>
//             )
//         }
//     }
//     return AsyncComponent;
// }

import React, { Component } from "react";
export default function asyncComponent(getComponent) {
    class AsyncComponent extends Component {
        // static Component = null;

        constructor(props){
            super(props);
            this.state = { Component: AsyncComponent.Component };
        }
       

        componentWillMount() {
            if (!this.state.Component) {
                getComponent().then(Component => {
                    AsyncComponent.Component = Component
                    this.setState({ Component })
                })
            }
        }
        render() {
            const { Component } = this.state;
            console.log(AsyncComponent.Component);
            if (Component) {
                return <Component {...this.props} />
            }
            return null;
        }
    }
    return AsyncComponent;
}