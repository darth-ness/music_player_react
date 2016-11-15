import React, {Component} from 'react'
import Form from './Form';
import SearchInput from './SearchInput';
import SearchButton from './SearchButton';

export default class SearchBar extends Component {
  constructor() {
    super();

    // this.updateState = this.updateState.bind(this);
  }
  handleSearchInput(text) {
    this.setState({text});

  }
  handleTextButton() {
    this.props.captText(this.state.text);
  }


  render() {
    return(
      <div>
        <Form>
          <SearchInput handleSearchInput={this.handleSearchInput.bind(this)}/>
          <SearchButton handleTextButton={this.handleTextButton.bind(this)}/>
        </Form>
      </div>
    )

  }
}
