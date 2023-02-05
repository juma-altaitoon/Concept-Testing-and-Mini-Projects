import React, { Component } from 'react'
import Kitchen from './Kitchen'
import LivingRoom from './LivingRoom'
import Bedroom from './Bedroom'
import Bath from './Bath'


export default class FloorPlan extends Component {
  render() {
    return (
      <div className='container'>FloorPlan
        <Bedroom bedNum = {1} />
        <Kitchen/>
        <LivingRoom/>
        <Bath size = {"Half"}/>
        <Bedroom bedNum = {2} />
        <Bath size = {"Full"}/>
        <Bedroom bedNum = {3} />
        
      </div>
    )
  }
}
