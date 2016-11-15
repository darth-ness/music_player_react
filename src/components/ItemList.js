import React, {Component} from 'react'
import Item from './Item'

export default class ItemList extends Component {
  render() {
    let items = this.props.musicList.map((value, index) => {return <Item key={index} title={value.title}/>});
    return <div>{items}</div>
  }
}

ItemList.defaultProps = {
  musicList: [
    {title: 'Closer'},
    {title: 'This is what you come for'},
    {title: 'The wall'},
    {title: 'What it takes'},
    {title: 'Roxane'}
  ]
}
