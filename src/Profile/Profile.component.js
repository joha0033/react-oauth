import React, {Component} from 'react';
import { PageHeader, Row, Panel, ListGroup, ListGroupItem, Button, Col, Image } from 'react-bootstrap'
import { profileActions } from './Profile.actions'
import { connect } from "react-redux"
import { Link, withRouter } from "react-router-dom";
import history from "../_Helpers/history.js";
// import EditProfile from './Profile.Edit'



class Profile extends Component {
  componentDidMount() {
    console.log(history);
    let token = this.props.credentials.token
    return this.props.fetchProfile(token)

  }

  render() {
    
    return (
     
      <div >
        
        <style type='text/css'>
          {`
          .profile {
            height: 100%;
            text-align: left;
          }
          .center{
            text-align: center;
          }
          .profilePicture{
            border: 5px solid white;
            border-radius: 200px;
            padding:0;
            margin:0
          }
          .smallProfilePicture{
            border: 5px solid white;
            border-radius: 200px;
            // padding-top: 5em;
            display: inline-block;
          }
          .well {
            color: white;
            background-image: none;
            background-color: white;
            border: none;
            box-shadow: none;
          }
          .bottomOverlay{
            z-index: 0;
          }
          .topOverlay{
            margin-top: -140px;
            z-index: 1;

          }
          .overlay{
            position: realtive;

          }
          `}

        </style>
        {this.props.profile.loading ?
          
         (<h1>LOADING...</h1>)
         

          :
          
            <div className='profile'>
              <div className='overlay'>

                <div className='bottomOverlay'>
                  <Image src="https://picsum.photos/g/1280/200/" responsive />
                </div>

                <div className='topOverlay container'>
                  <Row>


                    <Col className='center' smHidden xsHidden md={3}>
                      <div className='profilePicture'>

                        <Image src="https://picsum.photos/300/300" responsive circle />

                      </div>
                      
                      <div style={{paddingTop: "1em"}}>
                        
                        {/* <h3>{(this.props.profile.details.fullName || null)}</h3>
                        <h5 >{this.props.profile.details.email || null}</h5> */}
                      </div>

                      
                    </Col>
                    <Col sm={1}></Col>


                    <Col mdHidden lgHidden className='center' md={6}>
                      <div className='smallProfilePicture'>

                        <Image src="https://picsum.photos/300/300" circle />

                      </div>

                      <div style={{paddingTop: "1em"}}>
                        {/* <h3>{this.props.profile.details.fullName}</h3>
                        <h5 >{this.props.profile.details.email}</h5> */}
                      </div>
                    </Col>

                    
                    <Col xs={12} md={7}>

                      <Col smHidden xsHidden>
                        <PageHeader style={{paddingTop: "8em", paddingLeft: "2em"}}>
                            Profile
                        </PageHeader>
                      </Col>

                      <Col  mdHidden lgHidden>
                        <PageHeader style={{paddingLeft: "2em"}}>
                            Profile
                        </PageHeader>
                      </Col>


                      <div style={{paddingBottom: "4em"}}>
                        <Panel >
                          <Panel.Heading >
                            Your Information
                          </Panel.Heading>
                          <ListGroup>
                            {/* <ListGroupItem>Name: {this.props.profile.details.fullName}</ListGroupItem>
                            <ListGroupItem>Username: {this.props.profile.details.username}</ListGroupItem>
                            <ListGroupItem>Email: {this.props.profile.details.email}</ListGroupItem> */}
                            
                            <ListGroupItem>Number of <Link to={`${this.props.match.url}/posts`}>Posts</Link> : {this.props.profile.details.posts.length}</ListGroupItem>
                            <ListGroupItem>Member Since: data coming... </ListGroupItem>
                          </ListGroup>
                          <Panel.Body className='center'>
                            <Col xs={4} xsOffset={4}>
                              <Link to={`${this.props.match.url}/edit`}>
                                <Button block bsStyle="primary">
                                  Edit
                                </Button>
                                
                              </Link>
                              
                            </Col>

                          </Panel.Body>
                        </Panel>
                      </div>
                    </Col>

                  </Row>
                </div>
              </div>
          </div>
        }
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  const { credentials, profile } = state
  return {
    credentials,
    profile
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProfile: (credentials) => {
      dispatch(profileActions.fetchProfile(credentials))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile))
