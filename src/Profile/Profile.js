import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'

class Private extends Component {
  constructor(props) {

    super(props);

    this.state = {
      redirect: false
     };

  }



  render() {

    return (

      <div>
        {!this.props.tokenValidationFromApp ?
          <Redirect to= "/"/>
          :
          <div>
            <h2>PRIVATE ROUTE!!!</h2>
            <p>yes, you made it!</p>
          </div>
         }



      </div>

    );
  }
}

export default Private;

// const Profile = withRouter(
//   ({history}) =>
//     this.state.isAuthenticated ? (
//       <div>
//         <p>You are Logged in!</p>
//         <Profile
//           path='/profile'
//           component={Profile}
//         />
//         <button
//           onClick={this.signout}
//         >
//           Sign out
//         </button>
//       </div>
//     ) : (
//       null
//       // <div>
//       //   <p><small>You are not logged in </small></p>
//       //   <Home />
//       // </div>)
//     )
//   )
