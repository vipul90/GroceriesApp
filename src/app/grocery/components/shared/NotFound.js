import React from 'react'

class NotFound extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                URL is not Valid. Please enter valid URL.
            </div>
        )
    }
}

export default NotFound;