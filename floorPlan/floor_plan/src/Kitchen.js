import React, { Component } from 'react'
import Oven from './Oven'
import Sink from './Sink'

export default class Kitchen extends Component {
  render() {
    return (
      <div class="kitchen" >Kitchen
        <Oven/>
        <Sink/>
      </div>
    )
  }
}
