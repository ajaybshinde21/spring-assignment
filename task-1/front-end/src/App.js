import Form from "./components/Form";
import "./App.css";
import Table from "./components/Table";
import { Component } from "react";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
      multiples: [],
    };
  }
  render() {
    return (
      <div className="container">
        <Form onSubmit={this.getMultiples} />
        <hr />
        <Table
          number={this.state.number}
          multiples={this.state.multiples}
        ></Table>
      </div>
    );
  }

  getMultiples = (e) => {
    e.preventDefault();
    let number = e.target.number.value;
    this.setState({ number: number });
    fetch(`http://localhost:8080/cvh?pqr=${number}`)
      .then((result) => {
        if (result.ok) {
          return result.json();
        }
      })
      .then((data) => {
        this.setState({ multiples: data });
      });
  };
}
