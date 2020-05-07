import React from 'react'
import {  Redirect } from "react-router-dom";

class NotFound extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Redirect to="/" />
            </div>
        )
    }
}

export default NotFound;