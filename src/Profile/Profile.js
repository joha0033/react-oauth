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
