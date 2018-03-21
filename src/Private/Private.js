import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class Private extends Component {
  constructor(props) {

    super(props);

    this.state = {
       redirect: false
     };

  }

  render() {
    console.log(this.props);
    return (

      <div>
        <h2 id="welcomeText">Private!</h2>

          <Link to="/">back</Link>


      </div>

    );
  }
}
export default Private;


// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       fakeAuth.isAuthenticated ? (
//         <Component {...props} />
//       ) : (
//         <Redirect
//           to={{
//             pathname: "/login",
//             state: { from: props.location }
//           }}
//         />
//       )
//     }
//   />
// );
