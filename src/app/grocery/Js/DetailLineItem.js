import React from 'react'

class DetailLineItem extends React.Component {

    render(){
        return (
                <div>
                    <span className="spanRightMargin">{this.props.HeaderValue}</span>
                    <input type="text" value={this.props.ItemValue} />
                </div>
        );
    }
}

export default DetailLineItem;