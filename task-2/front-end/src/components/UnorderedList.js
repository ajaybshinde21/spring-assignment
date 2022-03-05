import React, { Component } from "react";

export default class UnorderedList extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <>
        <h5>Resource Details</h5>
        <ul>
          <li>{this.props.obj.resourceId}</li>
          <li>{this.props.obj.resourceName}</li>
          <li>{this.props.obj.avaialability?"yes":"no"}</li>
        </ul>
      </>
    );
  }
}
