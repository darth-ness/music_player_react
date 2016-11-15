import React, {Component} from 'react'
import SearchBar from './SearchBar';
import ItemList from './ItemList';

export default class SongFinder extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
  }
  captText(text) {
    this.setState({text})
  }

  render() {
    return(
      <div>
        <SearchBar captText={this.captText.bind(this)}/>
        <ItemList textSong={this.state.text}/>
      </div>
    )

  }
}
