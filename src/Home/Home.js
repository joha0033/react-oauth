import React, {Component} from 'react';
import { Jumbotron, Button, Row, Col, Panel } from 'react-bootstrap'
import { bootstrapUtils } from 'react-bootstrap/lib/utils';

bootstrapUtils.addStyle(Jumbotron, 'jumbotronStyle');

class Home extends Component {



render() {
  var stylesJtrn = {
    // "paddingTop" : '120px',
    // "backgroundColor" : "#FFE66D",
    "opacity" : '.8'

    // "background-color" : 'yellow'

   };


return (
<div >

    <Row>
      <Jumbotron style={stylesJtrn}>
      <Col xs={0} xsOffset={0}>


          <h1>small things tech.</h1>
          <p>
            learning + exploring
          </p>
          <p>
            <Button bsStyle="primary" href="/About">Learn more</Button>
          </p>


      </Col>
      </Jumbotron>

    </Row>

  <hr/>
  <div>
    <Row className="show-grid ">
      <Col xs={12} md={4}>
        <Panel >
          <Panel.Body >LOCAL STRATS</Panel.Body>
          <Panel.Footer>
            I can log you in locally, meaning no facebook login, and save all
            your things to my database.
            This is great and all, but you can login with just a click with
            either Facebook or Google+.
            Crazy, I know...
          </Panel.Footer>
        </Panel>
      </Col>
      <Col xs={12} md={4}>
        <Panel>
          <Panel.Body>FACEBOOK STRATS</Panel.Body>
          <Panel.Footer>
            This is great, I can pass all my work to facebook and
            all I have to do is mess wtih a little token and gather
            all of your sensative information you've given to facebook. Got you now!
          </Panel.Footer>
        </Panel>
      </Col>
      <Col xs={12} md={4}>
        <Panel>
          <Panel.Body>GOOGLE STRAS</Panel.Body>
          <Panel.Footer>
            This is ok, much like facebook, I can pass all my work to Google and
          all I have to do is mess wtih a little token and gather
          all of your sensative information you've given to Google, which isn't as
          much as facebook I bet. Got you now!
        </Panel.Footer>
        </Panel>
      </Col>
      <Col xs={12} md={4}>
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
      <Col xs={12} md={4}>
        <Panel>
          <Panel.Body>FACEBOOK STRATS</Panel.Body>
          <Panel.Footer>
            This is great, I can pass all my work to facebook and
            all I have to do is mess wtih a little token and gather
            all of your sensative information you've given to facebook. Got you now!
          </Panel.Footer>
        </Panel>
      </Col>
      <Col xs={12} md={4}>
        <Panel>
          <Panel.Body>GOOGLE STRAS</Panel.Body>
          <Panel.Footer>
            This is ok, much like facebook, I can pass all my work to Google and
          all I have to do is mess wtih a little token and gather
          all of your sensative information you've given to Google, which isn't as
          much as facebook I bet. Got you now!
        </Panel.Footer>
        </Panel>
      </Col>
    </Row>
  </div>



  <hr/>

</div>
);
}
}
export default Home;
