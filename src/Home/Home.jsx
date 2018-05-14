import React from 'react'

// ADD PRETTIER AND FLOW??

// FETCH ALL POSTS
import { Post } from './Helpers/fetchPosts'

// CUSTOME STYLES FROM 'STYLES COMPONENTS'
import { PostLink, SideNav } from './Styles/HomeStyles'

// HELPER FUNCTIONS
import { filterPost } from './Helpers/filterPosts'
import { PageHelper, SplitDataHelper } from './Helpers/pagination'
import { fillsBlankData } from './Helpers/fillsBlankData'
import { filterGroupCreator } from './Helpers/filterGroupCreator'


// BOOTSTRAP STYLE TAGS
import {
  Pagination,
  FormControl,
  Checkbox,
  FormGroup,
  PageHeader,
  Row,
  Col
  } from 'react-bootstrap'


/**
 *
 * Home class creates posts and side bar for home page display.
 * While on the Home Page you are able to see all posts.
 * You are able to filter them using a dynamicly created sidebar
 * You can search posts.
 *
 */
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      searchCriteria: [],
      filterCriteria: [],
      filterGroups: [
        {
          search: {
            input: false,
          },
        },
      ],
      itemsPerPage: 6,
      currentPage: 1
    }

    this.fetchPosts = this.fetchPosts.bind(this)
    this.sideBarCreator = this.sideBarCreator.bind(this)
    this.filterGroupUpdate = this.filterGroupUpdate.bind(this)
    this.postsMap = this.postsMap.bind(this)
    this.filterParams = this.filterParams.bind(this)

  } // END OF CONSTRUCTOR


  /**
  * @returns {func} calls fetchPosts to GET all post data
  */
  componentWillMount() {

    return this.fetchPosts()

  } // END OF COMPONENT WILL MOUNT


  /**
  * FETCHPOSTS() CALLS IMPORTED FETCH FUNCTION AND RECIEVES ARRAY OF POSTS
  * NEXT, BLANK DATA IS FILLED WITH A HELPER FUNCTION > FILLBLANKDATA(results)
  * IF FILTER CRITERIA HAS BEEN SELECTED, CREATE ARRAY OF CRITERIA.
  * SET THE ARRAY TO STATE AND CRITERIA APPLY TO LIST
  * WITH FILTERPOSTS() IMPORTED HELPER FUNCTION
  * @returns {array} POSTS ARRAY, DEPENDENT ON FILTER CRITERIA.
  */
  fetchPosts() {

    /////////////////////////////////
    // CREATING NEW ARRAYS FROM STATE
    const filterCriteriaFromState = this.state.filterCriteria
    const searchCriteriaFromState = this.state.searchCriteria

    // ////////////////////////
    // FETCH ROUTE from Imports
    Post.fetchAllPosts().then((result) => {

      const posts = fillsBlankData(result)

      // /////////////////////////////
      // FILL FILTER CRITERIA IF EMPTY
      if (this.state.filterGroups.length === 1) {

        // //////////////////////////////
        // GET FROM USER?? ADD TO STATE??
        const filterTypesFromKeys = ['category', 'level']

        // ///////////////////////
        // CREATE THE FILTER GROUP
        const filterGroupArray = filterGroupCreator(filterTypesFromKeys, posts)

        // ///////////////////////
        // SET STATE FOR POST DISPLAY
        this.setState({filterGroups: this.state.filterGroups.concat(filterGroupArray)})

      } // END OF IF FILTER GROUP

      ///////////////////////////////////////////////////////////////////////
      // IF THERE'S NO FILTER, DISPLAY ALL OTHERWISE, LETS FILTER AND SEARCH!
      filterCriteriaFromState.length <= 0 && searchCriteriaFromState === ''
      ? this.setState({ posts })
      : this.setState({
          posts: filterPost(
              posts,
              filterCriteriaFromState,
              searchCriteriaFromState
            )})

    }).catch(alert)

  } // END OF FETCH POSTS


  /**
  *
  * SIDEBARCREATOR() CREATES FILTERS GROUPS AND TYPES IN RIGHT SIDENAV
  * CREATES SEARCH INPUT AND CATEGORIES WITH CHECKBOXES FOR EACH FILTER TYPE
  * @returns {JSX/HTML} SEARCH INPUT + CATEGORIES/GROUPS + SUBCATEGORIES/TYPES
  *
  */
  sideBarCreator(){

    ////////////////////////////////////////////////
    // CREATE A NEW ARRAY OUT OF FILTER GROUP STATE
    const filterArray = this.state.filterGroups

    ///////////////////////////////////
    // MAP OVER NEW FILTER GROUP ARRAY
    // CREATE A SIDEBAR WITH FILTER GROUPS AND TYPES TO RENDER
    const theSidebar = filterArray.map((element, index)=>{

        //////////////////////////////////
        // GET THE KEYS FOR FILTER GROUPS
        let group = Object.keys(element)

        //////////////////////////////////
        // THIS WILL HEADER FOR EACH GROUP
        group = group[0].charAt(0).toUpperCase() + group[0].slice(1)

        //////////////////////////////////
        // 'FILTER ARRAY' CONTAINS OBJECTS
        // KEY/(GROUP NAME): VALUE/(ARRAY OF TYPES)
        let type = Object.values(element)

        /////////////////////////////////////////////////
        // CONVERTING TYPE TO HTML CHECKBOXES/SUB-HEADERS
        type = Object.keys(type[0]).map((element, index)=>{

          /////////////////////////////////////////////////////
          // CRAETES NAME WITH CAPITAL FIRST LETTER FOR DISPLAY
          let displayName = element[0].charAt(0).toUpperCase()
            + element.substring(1, element.length)

          ///////////////////////////////
          // IF ELEMENT IS A SEARCH INPUT
          return element === 'input'

            ////////////////////
            // CREATE INPUT BOX
            ? ( <FormControl
                id="formControlsText"
                key={index}
                type="text"
                onChange={event=>this.sendSearchEventValue(event.target.value)}
                label="Search"
                placeholder="Search..."
              /> )

              ///////////////////////
              // ELSE CREATE CHECKBOX
            : ( <Checkbox
                      key={index}// FILTER GROUP CREATES FILTER CRITERIA ARRAY
                      onChange={()=>this.filterGroupUpdate(element)}>
                      {displayName}
                    </Checkbox> )

        }) // END OF TYPE MAP

        //////////////////////////////////////////////////////
        // CREATE THE ELEMENT THAT WILL RENDER TO SIDE-NAV-BAR
        return (
          <div key={index}>
            <h3>{group}</h3>
            <div>{type}</div>
          </div>
        )

      }) // END OF FILTER ARRAY MAP

      return theSidebar

  } // END OF SIDEBAR CREATOR


  /**
  *
  * CREATES AN ARRAY OF VALUES FROM SEARCH INPUT
  * EACH VALUE IS SPLIT ON ' '
  * @returns {array} INPUT SPLIT ON ' ' AND SET TO STATE
  *
  */
  sendSearchEventValue(input) {

    ///////////////
    // SEARCH INPUT
    input = input.split(' ')

    ///////////////////////////////////////////////////////
    // RETURN SET STATE WITH CALLBACK FOR IMMEADIATE CHANGE
    return this.setState({searchCriteria: input}, () =>{
        this.fetchPosts()
      })

  } // END OF SEND SEARCH EVENT VALUE

  /**
  *
  * CALLED FROM CHECKBOXES ON CHANGE
  * THIS UPDATES RESPECTIVE OBJECT IN FILTER GROUP ARRAY
  * WILL TOGGLE KEY'S VALUE WHICH IS A BOOLEAN
  * @param filterType SENT FROM SIDEBAR CHECKBOXES
  * @returns {array} INPUT SPLIT ON ' ' AND SET TO STATE
  *
  */
  filterGroupUpdate(filterType) {

    ////////////////////////////////////////////////
    //CREATE A NEW ARRAY OF FILTER GROUPS FROM STATE
    const newArray = this.state.filterGroups

      //////////////////////////////////////////////////////
      // MAP OVER FILTER GROUPS ARRAY TO ACCCESS EACH OBJECT
      // ELEMENT1 = OBJECT EX: {level:{beginner: false, moderate: false, expert: false}}
      newArray.map((element1, index)=>{

        ////////////////////////////////////////////
        // MAP OVER KEYS TO TARGET DATA MANIPULATION
        // Object.values(element1)[0] = { beginner: false, moderate: false, expert: false }
        // ELEMENT = moderate (KEY)
        Object.keys(Object.values(element1)[0]).map((element) => {

          ////////////////////////////////////////
          // CREATES AN ARRAY OF KEYS FROM OBJECT
          // KEY = KEY OF ELEMENT1 (OUTERMOST KEY)
          let key = Object.keys(element1)[0]

          ///////////////////////////////////////
          // IF THE CURRENT ELEMENT === FILTER TYPE ARG, TOGGLE BOOLEAN VALUE
          return (
            element === filterType
            ? (newArray[index][key][element] = !newArray[index][key][element])
            : null
          )

        }) // END OF OBJECT KEYS

        //////////////////////////////////////////////////////
        // SET/UPDATE STATE WITH THE NEW ARRAY/ NEW T/F VALUES
        return this.setState({filterGroups: newArray})

      }) // END OF MAP ELEMENT1

      // //////////////////////////////////////////////////
      // CALL FILTER PARAMS TO CREATE FILTER CRITERIA ARRAY
      // FILTER CRITERIA ARRAY MANAGES FILTER LOGIC ARGS
      return this.filterParams()

  } // END OF FILTER GROUP UPDATE


  /**
  *
  * SETS THE STATE OF THE CURRENT PAGE NUMBER FOR PAGINATION
  * @param {stirng} currentPage ACTIVE PAGE NUMBER
  * @returns {int} SETS ACTIVE PAGE NUMBER
  *
  */
  handlePages(currentPage) {

    ///////////////////////////////////////
    // ~~ BITWISE CONVERTS STRING TO NUMBER
    currentPage = ~~currentPage

    //////////////////////
    // SET STATE FOR TO USE
    this.setState({ currentPage })

  } // END OF HANDLE PAGES


  /**
  *
  * USED IN RENDER FUNCTION
  * CREATES WHOLE DISPLAY FOR POSTS
  * CREATES ARRAY OF THE CURRENT POST ACCORDING TO CURRENT PAGE NUMBER
  * CREATES PAGINATION NAVIGATION TOP AND BOTTOM
  * @returns {int} SETS ACTIVE PAGE NUMBER
  *
  */
  postsMap() {

    /////////////////////////////////////////////////////////////////
    // CREATES AN ARRAY FROM STATE THAT SPLITS UP POSTS FOR PAGINATION
    // SPLIT DATA HELPER FROM PAGINATION HELPER RETURNS ARRAY SLICED
    let currentData = SplitDataHelper(this.state)

    ////////////////////////////////////////////////////////////////////
    // CHANGES CURRENT DATA ARRAY INTO DISPLAYABLE ARRAY OF HTML OBJECTS
    let postToRender = currentData.map((post, index)=>{

    //////////////////////////////////////////////
    // ADDING HTML/POST TO ARRAY/(POSTS TO RENDER)
      return(<div key={index}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <p>{post.category}</p>
              <p>{post.level}</p>
            </div>)
    }) // END OF POST TO RENDER

    /////////////////////////////////////////////////////////
    // CREATES AN ARRAY OF PAGE NUMBERS BASED ON POSTS LENGTH
    let pageNumbers = PageHelper(this.state)

    /////////////////////////////////////////////////////////////
    // CREATES PAGINATION NAVIGATION BY MAPPING OVER PAGE NUMBERS
    const renderPageNumbers = pageNumbers.map(number => {

      return (
         <Pagination.Item
           key={number}
           id={number}
           active={number === this.state.currentPage}
           onClick={(event) => this.handlePages(event.target.id)}
         >
           {number}
         </Pagination.Item>
       )
     }) // END OF PAGE NUMBERS MAP

   ///////////////////////////////////////////////////////
   // RETURN STRUCTURE OF ALL DATA CREATED TO BE DISPLAYED
   return (
      <div>
        <div>
          <Pagination bsSize="medium">{renderPageNumbers}</Pagination>
        </div>
        {postToRender}
        <div>
          <Pagination bsSize="medium">{renderPageNumbers}</Pagination>
        </div>
      </div>
   )

 } // END OF POSTMAP


  /**
  *
  * USED TO SET STATE OF FILTER CRITERIA ARRAY/(OF OBJECTS)
  * CALLED FROM FILTER GROUP UPDATE
  * OBJECT/ELEMENTS ARE (KEY/GROUP: [ARRAY/TYPES])
  * THEY ARE ADDED TO, OR MANIPULATED IN, FILTER CRITERIA ARRAY
  * CHECKS FOR TRUE VALUES IN FILTER GROUPS ARRAY
  * ADDS TRUE VALUES TO AN ARRAY WITH GROUP
  * @returns {func} CALLS FETCH POSTS FOR RERENDER
  *
  */
  filterParams(){

    ////////////////////////////////////////////////
    // CLEAR CURRENT STATE IMMEADIATELY WITH CALLBACK
    return this.setState({filterCriteria: []}, function(){

      //////////////////////////
      // KEEPING STATE IMMUTABLE
      // ARRAY OF OBJECTS FROM STATE
      let filterState = this.state.filterGroups

      /////////////////////////////////////////////
      // USING ARRAY FOR ORDERING PURPOSES -> FILTER!
      let filterArray = []

      /////////////////////////////////////////////
      // MAPPING OVER FILTER STATE ARRAY OF OBJECTS
      return filterState.map((object, i)=> { // object = OBJECT IN ARRAY @ I

        /////////////////
        // KEY = STRING
        let key = Object.keys(object)[0]

        //////////////////////
        // VALUE OF OBJECT KEY
        //  valueOfKey = {GitHub: false, CLI: false... }
        return Object.values(object).filter((valueOfKey) => {

          //////////////////////
          // KEY OF OBJECT VALUE
          // keyOfValue = 'GitHub'
          Object.keys(valueOfKey).filter((keyOfValue) => {

            ///////////////////////////////////
            // ISKEY PRESENT = BOOLEAN VARIABLE
            // RECIEVES VALUE FROM FINDKEY FUNC
            let isKeyPresent = this.findKey(key, filterArray)

            /////////////////////////////////////////////////////////////
            // CHECK IF THE KEY VALUE PAIR EXISTS AND IS NEW || undefined
            if(valueOfKey[keyOfValue] && !isKeyPresent){

              //////////////////////////////////////////////
              // CREATE A NEW OBJECT TO PUSH TO FILTER ARRAY
              let newFilterObject = {[key] : [keyOfValue.toLowerCase()]}

              ////////////////////////////////////
              // PUSH NEW OBJECT TO FILTER ARRAY
              return filterArray.push({...newFilterObject})

              //////////////////////////////////////////////////////
              // IF OBJECT'S VALUE AND KEY EXISTS AND KEY IS PRESENT
            } else if ( valueOfKey[keyOfValue] && isKeyPresent ) {

              ///////////////////////////////////////
              // MAP TO FIND MATCHING OBJECT IN ARRAY
              filterArray.map((obj) => {

                ///////////////////////////////////////////////
                // IF OBJECT KEY MATCHES CURRENT INTERATION KEY
                // PUSH FILTER TYPE TO OBJECT IN ARRAY
                return Object.keys(obj)[0] === key
                       ? obj[key].push(keyOfValue.toLowerCase())
                       : null

              }) // END OF FILTER ARRAY MAP

            } // END OF ELSE

            return null

          }) // END OF OBJECT KEYS FILTER

          // SET STATE TO NEW FILTER CRITERIA ARRAY
          return this.setState({filterCriteria: filterArray}, () => {

            return this.fetchPosts() // for immeadiate set state

          })// END OF SET STATE: FILTER CRITERIA

        }) // END OF OBJECT VALUES FILTER

      }) // END OF FILTER STATE MAP

    }) // END OF SET STATE: FILTER CRITERIA CALLBACK

  } // END OF FILTER PARAMS


  /**
  *
  * USED AS CONDITIONAL IN FILTER PARAMS
  * CREATE A NEW OBJECT IN ARRAY OR ADD TO ONE?
  * @param key LOOKING FOR KEY IN ARRAY
  * @param array FILTER ARRAY (OF OBJECTS)
  * @returns {bool} t/f
  *
  */
  findKey(key, array) {

    //////////////////////////////////
    // INITIALIZE EMPTY ARRAY FOR KEYS
    let keys = []

    ///////////////////////////////
    // GET KEY(S) FROM EACH ELEMENT
    array.map((obj)=> Object.keys(obj).map(el => keys.push(el)))

    ////////////////////////////////////////////////
    // BOOLEAN VARIABLE CHECKS IF KEY ARG IS PRESENT
    let keyFound = keys.some((k) => {
      return k === key
    }) // END OF SOME

    ///////////////////////////
    // RETURN THE BOOLEAN VALUE
    return  keyFound

  } // END OF FINDKEY


  render() {

    return (
      <div>

        {/* PAGE HEADER */}

        <PageHeader className='container'>

          small things tech. <small>learning + exploring</small>

        </PageHeader>

        {/* PAGE CONTENT */}

        <Row className="show-grid container">

          <div className=" container">

            <br/>

            {/* SIDENAV */}

            <Col xs={2}>

              <SideNav>

                  <ul>

                    <FormGroup>

                      {this.sideBarCreator()}

                    </FormGroup>

                    <hr />

                    <h4 >Other</h4>

                    <p><a>Top 10</a></p>

                    <p><a>Most Recent</a></p>

                  </ul>

              </SideNav>

            </Col>

            {/* PADDING */}

            <Col xs={1}></Col>

            {/* POSTS */}

            <Col xs={8}>

              <PostLink>

                <div>{this.postsMap()}</div>

                <hr/>

              </PostLink>

            </Col>
          </div>
        </Row>

      </div>
    ) // END OF RENDER RETURN

  } // END OF RENDER

} // END OF HOME CLASS

export default Home
