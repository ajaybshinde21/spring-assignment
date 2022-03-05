import React, { Component } from 'react'

export default class Form extends Component {
 
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
      <div className="row">
        <div className="six columns">
          <label htmlFor="resourceId">Id</label>
          <input
            className="u-full-width"
            type="number"
            name="id"
            placeholder="Enter Resource Id"
            id="resourceId"
            required
          />
        </div>
        <div className="six columns">
          <label htmlFor="resourceName">Name</label>
          <input
            className="u-full-width"
            type="text"
            name="name"
            placeholder="Enter Resource Name"
            id="resourceName"
            required
          />
        </div>
      </div>
      <label>
      <span className="label-body">Is resource available?</span>
      <input type="radio" name="availability" value="yes"/> Yes
        <input type="radio" name="availability" value="no"/> No
        
      </label>
      <input className="button-primary" type="submit" value="Submit" />
    </form>
    )
  }
}
