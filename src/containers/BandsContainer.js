import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import {connect} from 'react-redux'

class BandsContainer extends Component {

  render() {
    return(
      <div>
        {this.props.bands.map((band)=>(
          <li>{band.name}</li>
        ))}
        <BandInput submitName={this.props.submitName}/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  submitName: (name) => dispatch({type: 'ADD_BAND', payload: name})
})

const mapStateToProps = (state) => ({
  bands: state.bands
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
