import React, {Component} from 'react'

export default class SearchInput extends Component {
  constructor() {
    super();
  }
  handleTextInput(e) {
    let text = e.target.value;
    this.props.handleSearchInput(text);
  }

  render() {
    return(
      <input onChange={this.handleTextInput.bind(this)} type="text"/>
    )


  }
}
