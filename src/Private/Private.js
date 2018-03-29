import React, {Component} from 'react';
// import  { Redirect } from 'react-router-dom'

class Private extends Component {
  constructor(props) {

    super(props);

    this.state = {
      redirect: false
     };
     this.redirect = this.redirect.bind(this)
  }

  redirect() {
    if(!sessionStorage.getItem('userData')){
      this.setState({redirect: true})
      this.props.history.push("/");
    }
  }

  render() {

    return (

      <div>
        {this.state.redirect ?
          <div>
            <h2>PRIVATE ROUTE!!!</h2>
            <p>yes, you made it!</p>
          </div> :
          null
        }

      </div>

    );
  }
}

export default Private;
