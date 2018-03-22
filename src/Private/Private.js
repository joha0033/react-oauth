import React, {Component} from 'react';


class Private extends Component {
  constructor(props) {

    super(props);

    this.state = {

     };

  }



  render() {
    console.log(this.props.auth)
    if(this.props.auth){

    }
    return (
      <div>
        <div>
          <p>yes: {this.props.auth.toString()}</p>
        </div>
      </div>

    );
  }
}
export default Private;
