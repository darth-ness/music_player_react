import React, {Component} from 'react'

export default class SearchButton extends Component {
  constructor() {
    super();
  }
  handleSearchButton(e){
    // let text = e.event.value;
    e.preventDefault();
    this.props.handleTextButton();
  }

  render() {
    return(
      <button onClick={this.handleSearchButton.bind(this)}>Buscar</button>
    )

  }
}
