import React, { Component } from "react";
import { useEffect } from "react";
class NoteFound extends Component {
  constructor() {
    super();
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <div>这里是404页面</div>
      </div>
    );
  }
}
export default NoteFound;
