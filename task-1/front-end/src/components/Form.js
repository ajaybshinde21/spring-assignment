import React, { Component } from 'react'

export default class Form extends Component {
 
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
      <div className="row">
        <div className="twelve columns">
          <label htmlFor="number">Number</label>
          <input
            className="u-full-width"
            type="number"
            name="number"
            placeholder="Enter a number to get 5 Multiples"
            id="number"
            required
          />
        </div>
       
     
      </div>
      <input className="button-primary" type="submit" value="Submit" />
    </form>
    )
  }
}
