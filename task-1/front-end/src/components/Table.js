import { tab } from "@testing-library/user-event/dist/tab";
import React, { Component } from "react";

export default class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Five Multiples of {this.props.number}</th>
          </tr>
        </thead>
        <tbody>
          {this.props.multiples.map((mul, index) => {
            return (
              <tr key={index}>
                <td>
                  {this.props.number} x {index + 1}
                </td>
                <td>{mul}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
