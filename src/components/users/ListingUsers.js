import React from 'react'
import SearchForm from './SearchForm'
import UserForm from './UserForm'
import UserTable from './UserTable'

export default class ListingUsers extends React.Component {
  constructor () {
    super()
    this.state = { users: [],
                    content: ''}
  }

  handleUserData (userData) {
    const users = this.state.users
    users.push(userData)
    this.setState({users})
  }

  handleSearch(content) {
    this.setState({content})
  }


  render () {
    return (
      <div className="row">
        <div className="col-xs-10 col-xs-offset-1">
          <h1 className="text-center">Listing Users</h1>
          <SearchForm sendSearch = {this.handleSearch.bind(this)} />
          <div className="row">
            <UserForm onUserSubmit={this.handleUserData.bind(this)}/>
            <UserTable searchContent={this.state.content} users={this.state.users}/>
          </div>
        </div>
      </div>
    )
  }
}
