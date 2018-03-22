import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class Private extends Component {
  constructor(props) {

    super(props);

    this.state = {

     };

  }



  render() {

    return (
      <div>
        <div>
          <p>yes: {this.props.isAuthenticated}</p>
          <Link to="/">back</Link>
        </div>
      </div>

    );
  }
}
export default Private;
