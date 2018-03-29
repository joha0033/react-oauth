import React, {Component} from 'react';
// import { withRouter, Link } from 'react-router-dom'
import Private from '../Private/Private'
import Home from '../Home/Home'


class Welcome extends Component {
  constructor(props) {

    super(props);

    this.state = {
      change: true,
      signedin: false
     };
     this.changeForRender = this.changeForRender.bind(this)
  }
  changeForRender() {
    let something
    this.setState({change: !this.state.change})
    something = this.state.change
    console.log(something);
  }


  componentDidMount() {

    console.log('process: ', process.env.NODE_ENV);
  }


  render() {

    const

    );

    return (
      <div>
        <hr/>
        <AuthButton signout={this.props.signout} auth={this.props.auth}/>

      </div>

    );
  }
}
export default Welcome;
