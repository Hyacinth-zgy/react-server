import React, { Component } from "react";
export default (DecorateComponent, styles) => {
  return class NewComponent extends Component {
    componentDidMount() {
      if (this.props.staticContext) {
        this.props.staticContext.css.push(styles._getCss());
      }
    }
    render() {
      return <DecorateComponent></DecorateComponent>;
    }
  };
};
