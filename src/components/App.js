import React, {Component} from 'react';
import Form from './Form';
import SearchInput from './SearchInput';
import SearchButton from './SearchButton';
import ItemList from './ItemList';

class App extends Component {
  render() {
    return(
      <div>
        <Form>
          <SearchInput/>
          <SearchButton/>
        </Form>
        <ItemList/>
      </div>
    );
  }
}
 export default App;





 // import ListingUsers from './users/ListingUsers'

// export default class App extends Component {
//   render () {
//     return (
//       <div>
//         <div className="row">
//           <div className="col-xs-12">
//             <div className="alert alert-success" id="notice">
//               Hello world!!
//             </div>
//           </div>
//         </div>
//         <ListingUsers/>
//       </div>
//     )
//   }
// }
