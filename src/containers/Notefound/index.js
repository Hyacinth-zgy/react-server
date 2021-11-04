import React, { Component } from "react";
import { useEffect } from "react";
class NoteFound extends Component {
  constructor() {
    super();
  }
  render() {
    if (this.props.staticContext) {
      this.props.staticContext.NoteFound = true;
    }
    return (
      <div>
        <div>这里是404页面</div>
      </div>
    );
  }
}
export default NoteFound;
