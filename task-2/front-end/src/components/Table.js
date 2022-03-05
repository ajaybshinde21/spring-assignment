import React, { Component } from "react";

export default class Table extends Component {
  render() {
    return (
      <>
        {this.props.isTableVisible && <> 
          <h5>Resource Details</h5>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>isAvailable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.props.resource.resourceId}</td>
              <td>{this.props.resource.resourceName}</td>
              <td>{this.props.resource.avaialability ? "Yes" : "No"}</td>
            </tr>
          </tbody>
        </table>
        
        </>}


      </>
    );
  }
}
