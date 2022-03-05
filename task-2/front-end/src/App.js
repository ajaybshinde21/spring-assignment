import React, { Component } from "react";
import Form from "./components/Form";
import Swal from "sweetalert2";
import Table from "./components/Table"
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputId: "",
      inputResourceName: "",
      inputIsResourceAvailable: "",
      outputId:"",
      isTableVisible:false,
      outputObj:{},
    };
  }
  onSubmitEvent = async (e) => {
    e.preventDefault();
    let foo = await new Promise((resolve, reject) => {
      let id = e.target.id.value;
      let name = e.target.name.value;
      let isAvailable = e.target.availability.value;
      console.log(isAvailable); 
      this.setState({
        inputId: id,
        inputResourceName: name,
        inputIsResourceAvailable: isAvailable === "yes" ? true : false,
      });
      if (this.state.inputId === e.target.id.value) {
        resolve(true);
      }
    });
    const obj = {
      resourceId: this.state.inputId,
      resourceName: this.state.inputResourceName,
      avaialability: this.state.inputIsResourceAvailable,
    };
    console.log(obj);
    fetch("http://localhost:8080/ar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        if (data === true) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Data has been saved",
            showConfirmButton: false,
            timer: 2000,
          });
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  setStateOfOutputObj = (data) => {
    let resource = data;
    this.setState({outputObj : resource});
    console.log(this.state.outputObj);
  }
  getDataFromServer = (e)=>{
    e.preventDefault();
    const urlToQuery = "http://localhost:8080/gr/"+this.state.outputId;
    fetch(urlToQuery)
    .then((response)=>{
      console.log(response);
      if(response.status === 500){
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          showConfirmButton: false,
          timer: 1500,
        });
      }else if(response.status === 404 ){
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Oops...",
          text: `Resource id=${this.state.outputId} doesn't exist`,
          showConfirmButton: false,
          timer: 1500,
        });

      }
      else{
        return response.json();
      }
    })
    .then((data)=>{
        if(data != null){
          this.setStateOfOutputObj(data);
          this.setState({isTableVisible:true})
        }else{
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Oops...",
            text: `Resource id=${this.state.outputId} doesn't exist`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
    }).catch(((err)=>{
      console.log(err);
    }))
  }
 
  getDataFromServerInputChange = (e)=>{
    const idToQuery = e.target.value;
    console.log(idToQuery);
    this.setState({outputId:idToQuery});
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="six columns">
              <h1>Add Data</h1>
              <Form onSubmit={this.onSubmitEvent} />
            </div>
            <div className="six columns">
              <h1>Get Data</h1>
              <div className="row">
                <div className="six columns">
                  <form onSubmit={this.getDataFromServer}>
                    <label htmlFor="resourceId">Resource ID</label>
                    <input
                      className="u-full-width"
                      type="number"
                      placeholder="Enter Resource Id"
                      id="resourceId"
                      value={this.state.outputId}
                      onChange={this.getDataFromServerInputChange}
                    />
                    <input
                      className="button-primary"
                      type="submit"
                      value="Submit"
                    />
                  </form>
                </div>
              </div>
              <hr />
          <div className="result">
            <Table resource = {this.state.outputObj} isTableVisible={this.state.isTableVisible}/>
          </div>
            
            </div>

          </div>
         
        </div>
      </>
    );
  }
}
