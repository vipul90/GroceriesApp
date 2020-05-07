import React, { Component } from "react";
export default function lazyLoadComponent(getComponent) {
    class LazyComponent extends Component {
        constructor(props){
            super(props);
            this.state = { Component: LazyComponent.Component };
        }

        componentWillMount() {
            if (!this.state.Component) {
                getComponent().then(Component => {
                    LazyComponent.Component = Component
                    this.setState({ Component })
                })
            }
        }
        render() {
            const { Component } = this.state;
            if (Component) {
                return <Component {...this.props} />
            }
            return null;
        }
    }
    return LazyComponent;
}