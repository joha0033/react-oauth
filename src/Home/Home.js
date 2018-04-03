import React, {Component} from 'react';

import { HelpBlock, FormControl, Checkbox, FormGroup, PageHeader, Row, Col, Clearfix } from 'react-bootstrap'
import styled from 'styled-components';
import { Post } from '../services/posts'


const PostLink = styled.div`
  text-align: left;
  width: 800px;
  min-height: 50px;
  margin: 30px auto;
`;

const SideNav = styled.div`
  text-align: left;

`
function FieldGroup({ id, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts: [],
      filter: {
        categories:{
          Github: false,
          CLI: false,
          Editor: false
        },
        levels: {
          Beginner: false,
          Intermediate: false,
          Epert: false
        }
      }
    }
  }

  componentWillMount(){
    this.filterMap()
    this.fetchPosts()
  }

  fetchPosts() {
    Post.fetchAllPosts().then((result)=>{
      this.setState({posts: result})
    }).catch(alert)
  }

  postsMap() {
    return this.state.posts.map((post, index)=>{
      return(<div key={index}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <p>{post.category}</p>
              <p>{post.level}</p>
            </div>)
    })
  }

  filterMap(){

    let newObject = {...this.state.filter}

    return Object.entries(newObject).map((filterGroup, index)=>{

        let filterType = Object.keys(filterGroup[1]).map((element, index)=>{

          return (
            <Checkbox
              key={index}
              onChange={()=>this.filterGroup(element)}>
              {element}
            </Checkbox>
          )

        })

        let filterHeader = filterGroup[0].charAt(0).toUpperCase() + filterGroup[0].slice(1);

        return (
          <div key={index}>
            <h3 >
              {filterHeader}
            </h3>
            <h4>
              {filterType}
            </h4>
          </div>
        )

    })
  }

  filterGroup(filterType) {

    let newObject = {...this.state.filter}

    return (Object.entries(newObject).map(( keyElement ) => {

      Object.keys( keyElement[1] ).map(( element ) => {

        return (
          element === filterType
          ? keyElement[1][element]= !keyElement[1][element]
          : null
        )
      })

      return this.setState({filters: {...newObject}})

    }))

  }


render() {
  // var stylesJtrn = {
  //   // "paddingTop" : '120px',
  //   // "backgroundColor" : "#FFE66D",
  //   "opacity" : '.8'
  //
  //   // "background-color" : 'yellow'
  //
  //  };



return (
<div >

    <Row>


      <PageHeader className='container'>
        small things tech. <small>learning + exploring</small>
      </PageHeader>


    </Row>


  <div className=" container">
      <br/>
    <Row className="show-grid container">

        <Col xs={3}>
          <SideNav>
            <Clearfix>
              <ul>


                <FormGroup>

                  <h3>Search</h3>
                  <FieldGroup
                    id="formControlsText"
                    type="text"
                    label="Search"
                    placeholder="Enter Search stuff..."
                  />

                  {this.filterMap()}

              </FormGroup>

                <hr />

                <h4 >Other</h4>
                <p><a>Top 10</a></p>
                <p><a>Most Recent</a></p>

              </ul>
            </Clearfix>
          </SideNav>


        </Col>

        <Col xs={8}>

          <PostLink>
            <div>{this.postsMap()}</div>
            <hr/>
          </PostLink>


        </Col>

  </Row>
</div>
</div>
);
}
}
export default Home;
