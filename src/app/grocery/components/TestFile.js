import React ,{lazy,Suspense} from 'react'
// import UserGroceryList from './Cart/UserGroceryList'
const UserGroceryList = lazy(() => { return import( './Cart/UserGroceryList')});

class TestFile extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    <UserGroceryList {...this.props} ></UserGroceryList>
                </Suspense>
            </div>
        )
    }
}

export default TestFile;