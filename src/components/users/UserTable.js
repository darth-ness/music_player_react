import React from 'react'
import User from './User'

export default class UserTable extends React.Component {
  constructor() {
    super();
  }
  myFunct() {
    var userData = this.props.users;

    if (this.props.searchContent.length > 0) {
      var content = this.props.searchContent;
      var userData = this.props.users.filter(function(user) {
        return user.name.match(content);
      });
    }
    return userData.map(function(user) {
      return <User key={user.id} userData = {user} />
    });
  }




  render () {
    // const users = this.props.users.map((user) => {
    //   return(
    //     <User userData={user} key={user.id}/>
    //   )
    // })
    let users = this.myFunct.bind(this)();
    return (
      <div className="col-xs-6">
        <table id="usersTable" className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Lastname</th>
              <th>DNI</th>
            </tr>
          </thead>
          <tbody>
            {users}
          </tbody>
        </table>
      </div>
    )
  }
}
