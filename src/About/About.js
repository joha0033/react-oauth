import React, {Component} from 'react';
import { Jumbotron, Row, Col, Panel } from 'react-bootstrap'
class Home extends Component {



render() {


return (
<div className="container">
  <Jumbotron>
    <h1>About some OAuth stuff.</h1>
    <p>
      OAuth is a simple way to publish and interact with protected data. That's about it.
    </p>
    <p>
      <small>Bellow are the strategies I plan to use for this project</small>
    </p>
  </Jumbotron>
  <hr/>
  <Row className="show-grid ">
    <Col xs={6} md={4}>
      <Panel>
        <Panel.Body>LOCAL STRATS</Panel.Body>
        <Panel.Footer>
          I can log you in locally, meaning no facebook login, and save all
          your things to my database.
          This is great and all, but you can login with just a click with
          either Facebook or Google+.
          Crazy, I know...
        </Panel.Footer>
      </Panel>
    </Col>
    <Col xs={6} md={4}>
      <Panel>
        <Panel.Body>FACEBOOK STRATS</Panel.Body>
        <Panel.Footer>
          This is great, I can pass all my work to facebook and
          all I have to do is mess wtih a little token and gather
          all of your sensative information you've given to facebook. Got you now!
        </Panel.Footer>
      </Panel>
    </Col>
    <Col xsHidden md={4}>
      <Panel>
        <Panel.Body>GOOGLE STRATS</Panel.Body>
        <Panel.Footer>
          This is ok, much like facebook, I can pass all my work to Google and
        all I have to do is mess wtih a little token and gather
        all of your sensative information you've given to Google, which isn't as
        much as facebook I bet. Got you now!
      </Panel.Footer>
      </Panel>
    </Col>
  </Row>

  <hr/>

</div>
);
}
}
export default Home;
