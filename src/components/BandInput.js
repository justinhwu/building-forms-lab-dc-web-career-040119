// Add BandInput component
import React, { Component } from 'react'
import {connect} from 'react-redux'
import manageBand from '../reducers/manageBand'
class BandInput extends Component {

  constructor(){
    super()
    this.state={
      name: ''
    }
  }

  typeInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.submitName(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event)=> this.handleSubmit(event)}>
        <label>Name</label>
        <input type='text' value={this.state.name} name='name' onChange={(event)=>(this.typeInput(event))} />
        <input type='submit' value='Submit'/>
        </form>
      </div>
    )
  }
}



export default BandInput
