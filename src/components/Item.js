import React, {Component} from 'react'

export default class Item extends Component {
  render() {
    return(
      <div>
        <h3>{this.props.title}</h3>
        <button>Agregar</button>
      </div>
    )

  }
}
