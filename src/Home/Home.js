import React, {Component} from 'react';
import { HelpBlock, FormControl, Checkbox, FormGroup, PageHeader, Row, Col, Clearfix } from 'react-bootstrap'
import styled from 'styled-components';
import { Post } from '../services/posts'
import { filterPost } from './HomeHelpers'


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
      searchCriteria: [],
      filterCriteria: [], //NEED AN ARRAY FOR ORDERING PURPOSES
      filterGroups: [
        {
          search: {
            input: false
          }
        }
      ]
    }

    // this.searchPosts = this.searchPosts.bind(this)
    this.fetchPosts = this.fetchPosts.bind(this)
    this.sideBarCreator = this.sideBarCreator.bind(this)
    this.filterGroupUpdate = this.filterGroupUpdate.bind(this)
    this.postsMap = this.postsMap.bind(this)
    this.filterParams = this.filterParams.bind(this)

  }

  // FETCH ALL POSTS AT MOUNT
  componentWillMount(){
    console.log('componentWillMount');
    this.fetchPosts()
  }

  // IMPLEMENTS POSTDATA FUNCTION
  fetchPosts() {

    //DONT MANIPULATE STATE
    let filterCriteriaFromState = this.state.filterCriteria
    let searchCriteriaFromState = this.state.searchCriteria

    // FETCH ROUTE
    Post.fetchAllPosts().then((result)=>{

      // FILL FILTER CRITERIA IF EMPTY
      result.map((el)=>{
        // CLOUD FUNCTION ON POST EVENTUALLY
        // NO CATEGORY? ADD IT
        if(!el.category || el.category === ''){
          el['category'] = 'none'
        }

        //  NO LEVEL, ADD IT
        if(!el.level || el.level === ''){
          el['level'] = 'none'
        }

        if(el.category === 'Text Editor'){
          el.category = 'editor'
        }

        // MAKE THEM LOWERCASE FOR COMPARISON PURPOSES
        el.category = el.category.toLowerCase()
        el.level = el.level.toLowerCase()

        // MOVE FILTERPOST HERE AND ADD SEARCH ARG

        // WHAT DO I DO WITH THIS?
        return null // SUCCESS MESSAGE? TAG UPDATED RESULTS

      })

      if (this.state.filterGroups.length === 1){
        // console.log('firstRun');
        let filterGroupCreator = []
        // PROMT USER WITH KEYS+CHECKBOXES TO MARK KEYS!!!
        // WOULD YOU LIKE TO OMIT VALUES??
        //
        /////////////////////////////
        // IF YOU KNOW WHAT TO OMIT
        /////////////////////////////
        // let ignoreTheseKeys = [ 'title', 'content' ]
        // let dash = '_'
        // get each Object from result
        // result.forEach((obj) =>{
        //
        //   // get the objects key and map to filter
        //   Object.keys(obj).map((key) =>{
        //
        //     // if the key is in the ingnored keys list + '_'
        //     ignoreTheseKeys.includes(key)
        //       ? key = '_' + key
        //       : null
        //
        //     // filter anything that begins with '_' and push others to Marked Keys
        //     key[0] !== dash
        //       ? markTheseKeys.push(key)
        //       : null
        //
        //   })
        //
        // })
        //
        /////////////////////////////
        // IF YOU KNOW WHAT YOU WANT
        /////////////////////////////
        let markTheseKeys = ['category', 'level']
        // markTheseKeys = markTheseKeys.filter(function(item, pos) {
        //   return markTheseKeys.indexOf(item) === pos;
        // })

        markTheseKeys.forEach((key)=>{
          filterGroupCreator.push({[key]: {}})
        })

        filterGroupCreator.forEach((obj) => {

          markTheseKeys.forEach((markedKey) => {
            result.forEach((post)=>{

            return  !!obj[markedKey] && post[markedKey] !== 'none'
              ? obj[markedKey][post[markedKey]] = false
              : null

            })

          })
        })

        // console.log(filterGroupCreator);

        this.setState({filterGroups: this.state.filterGroups.concat(filterGroupCreator)}, () => {
          return console.log('filter\'s set');
        })

      }



      // ENDING
      /////////////////////////////////////////

      // console.log(filterCriteriaFromState.length);


      // IF THERE'S NO FILTER, DISPLAY ALL
      filterCriteriaFromState.length <= 0 && searchCriteriaFromState === ''
      ? this.setState({ posts: result })
      : this.setState({ posts: filterPost(result, filterCriteriaFromState, searchCriteriaFromState)})

    }).catch(alert)
  }

  // SIDEBAR CREATOR
  sideBarCreator(){
    // console.log('sideBarCreator');
    // CREATE A NEW OBJECT OUT OF FILTER GROUP STATE
    let filterArray = this.state.filterGroups

    // MAP OVER NEW FILTER GROUP OBJECT
    // CREATE A FILTER GROUP TO RENDER
    let filterGroup = filterArray.map((element, index)=>{

        // GET THE KEYS FOR FILTER GROUPS
        let group = Object.keys(element)
        //////////////////////////////////
        // THIS WILL HEADER FOR EACH GROUP
        group = group[0].charAt(0).toUpperCase() + group[0].slice(1)

        // 'FILTER ARRAY' CONTAINS OBJECTS
        // KEY/(GROUP NAME): VALUE/(ARRAY OF TYPES)
        let type = Object.values(element)
        /////////////////////////////////
        // CREATING CHECKBOXES/SUB-HEADERS THAT WILL HELP MANIPULATE DATA
        type = Object.keys(type[0]).map((element, index)=>{
          let displayName =  element[0].charAt(0).toUpperCase() + element.substring(1, element.length)
          if(element === 'input'){
            return (
              <FieldGroup
                id="formControlsText"
                key={index}
                type="text"
                onChange={(event)=>{this.sendSearchEventValue(event.target.value, element)}}
                label="Search"
                placeholder="Search..."
              />
            )
          }
          // 'ELEMENT' = TYPE USED FOR FILTER
          return (
                  <Checkbox
                    key={index}// FILTER GROUP CREATES FILTER CRITERIA ARRAY
                    onChange={()=>this.filterGroupUpdate(element)}>
                    {displayName}
                  </Checkbox>
          )
        })

        // CREATE THE ELEMENT THAT WILL RENDER TO SIDE-NAV-BAR
        return (
          <div key={index}>
            <h3>{group}</h3>
            <div>{type}</div>
          </div>
        )

      })

      return filterGroup

  }

  sendSearchEventValue(input) {


    input = input.split(' ')
    return this.setState({searchCriteria: input}, () =>{
        this.fetchPosts()
      })
  }

  // CALLED FORM CHECKBOXES
  // CREATE/UPDATE CURRENT FILTER CRITERIA
  filterGroupUpdate(filterType) {

    //CREATE A NEW ARRAY OF FILTER GROUPS FROM STATE
    let newArray = this.state.filterGroups

      // MAP OVER EACH OBJECT TO ACCESS EACH KEY
      newArray = newArray.map((element1, index)=>{

        // MAP OVER KEYS TO TARGET DATA MANIPULATION
        Object.keys(Object.values(element1)[0]).map((element) => {

          let key = Object.keys(element1)[0]
          console.log(element, filterType.toLowerCase());
          return (// TOGGLE DATA ON CHECKBOX CHANGE
            element === filterType // FILTER TYPE IS SENT FROM CHECKBOX
            ? (newArray[index][key][element] = !newArray[index][key][element])
            : null
          )

        })

        // SET/UPDATE STATE WITH THE NEW ARRAY
        return this.setState({filterGroups: newArray})

      })

      return this.filterParams()
  }

  postsMap() {
    // console.log('postsMap');
    // DISPLAYS POSTS (ALL OR FILTERED FORM SIDEBAR)
    let newPostArray = this.state.posts
    // console.log(newPostArray);

    return newPostArray.map((post, index)=>{
      return(<div key={index}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <p>{post.category}</p>
              <p>{post.level}</p>
            </div>)
    })
  }

  // THIS CREATES THE FILTER CRITERIA
  // WHENEVER THE SIDEBAR/CHECKBOXES ARE MANIPULATED
  filterParams(){
    console.log('filterParams');
      // CLEAR CURRENT STATE WITH CALLBACK
      return this.setState({filterCriteria: []}, function(){

        // KEEPING STATE IMMUTABLE
        let filterState = this.state.filterGroups // ARRAY OF OBJECTS FROM STATE

        //USING ARRAY FOR ORDERING PURPOSES -> FILTER!
        let filterArray = this.state.filterCriteria // EMPTY ARRAY.. for now...

        // MAPPING OVER FILTER STATE COPY
        return filterState.map((el, i)=> { // el = OBJECT IN ARRAY @ i

          // CREATES AN ARRAY OF KEYS FROM el = ["category"]
          let key = Object.keys(el) // FIRST INTERATION = 1ST IN STATE

          // VALUE OF OBJECT KEYS: WHY NOT USE MAP OR REDUCE??
          Object.values(el).filter((el2)=>{ //  el2 = {GitHub: false, CLI: false... }

              // VALUE OF OBJECT KEYS: WHY NOT USE MAP OR REDUCE??
              Object.keys(el2).filter((el3)=>{ // KEY OF VALUE OBJECT el3 = 'GitHub'

                // VARIABLE RECIEVES BOOLEAN FROM FINDKEY FUNC
                // ARGS ARE CURRENT KEY INTERATION AND FILTER CRITERIA
                let isKeyPresent = this.findKey(key[0], filterArray)
                // console.log(el2[el3]);
                // CHECK IF THE KEY VALUE PAIR IS TRUE AND NEW || undefined
                // console.log(el2[el3], !isKeyPresent);
                // console.log(el2[el3], isKeyPresent);
                if(el2[el3] && !isKeyPresent){

                  // CREATE A NEW OBJECT TO PUSH TO FILTER ARRAY
                  let newFilterObject = {[key[0]] : [el3.toLowerCase()]}
                  // console.log(newFilterObject);
                  // COULD JUST RETURN filterArray.push(newFilterObject)
                  // NO NEED TO SPREAD OP, BUT ITS COOL
                  return filterArray.push({...newFilterObject}) //ARRAY W/ OBJECTS

                  // IF VALUE OF OBJECT'S VALUE AND KEY EXISTS AND IS TRUE
                } else if ( el2[el3] && isKeyPresent ) {

                  // FIND MATCHING OBJECT IN ARRAY TO PUSH INTO
                  filterArray.map((obj) => {

                    // IF OBJECT KEY MATCHES CURRENT INTERATION KEY
                    // PUSH FILTER TYPE TO OBJECT IN ARRAY
                    console.log(Object.keys(obj)[0] === key[0]);
                    return Object.keys(obj)[0] === key[0]
                           ? obj[key[0]].push(el3.toLowerCase())
                           :null

                  })
                }

                return null

              })

              // SET STATE TO NEW FILTER CRITERIA ARRAY
              return this.setState({filterCriteria: filterArray}, () => {
                return this.fetchPosts()
              })

            })

            // RECALL FETCH AND FILTER RESULTS, REINITIALIZE STATE
            // SHOULD I MANIPULATE STATE INSTEAD OF FETCH?
            return this.fetchPosts()

          })
      })

}



  findKey(key, array) {
    // console.log('findKey');
    // console.log(key, array);
      // INITIALIZE EMPTY ARRAY FOR KEYS
      let keys = []

      // GET KEY(S) FROM EACH ELEMENT
      array.map((obj)=> Object.keys(obj).map(el => keys.push(el)))

      // BOOLEAN VARIABLE CHECKS IF KEY ARG IS PRESENT
      let keyFound = keys.some((k) => {
        return k === key
      })

      // RETURN THE BOOLEAN VALUE
      return  keyFound

  }








render() {


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

        <Col xs={2}>
          <SideNav>
            <Clearfix>
              <ul>


                <FormGroup>

                  {/*<h3>Search</h3>
                   <FieldGroup
                    id="formControlsText"
                    type="text"
                    onChange={(event)=>{this.sendSearchEventValue(event.target.value)}}
                    label="Search"
                    placeholder="Search..."
                  /> */}

                  {this.sideBarCreator()}

                </FormGroup>

                <hr />

                <h4 >Other</h4>
                <p><a>Top 10</a></p>
                <p><a>Most Recent</a></p>

              </ul>
            </Clearfix>
          </SideNav>


        </Col>
        <Col xs={1}></Col>

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
