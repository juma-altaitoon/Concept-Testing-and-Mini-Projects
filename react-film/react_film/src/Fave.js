import React, { Component } from 'react'

export default class Fave extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      //  isFave : false
    }
  }

  handleClick = (e) => {
    e.stopPropagation()
    console.log("handling Fave click!", this.props.isFave);
    this.props.onFaveToggle()
  }

  render() {
    const isFave = (this.props.isFave) ? 'remove_from_queue' : 'add_to_queue';
    let isFaveClass = "film-row-fave " + isFave
    console.log(isFaveClass)
    return (
      <div onClick={this.handleClick} className= {isFaveClass}>
        <p className="material-icons">{isFave}</p>
      </div>
      
    )
  }
}
