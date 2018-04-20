///////////////////////////////
// IT SEARCHES THE CONTENT AS A WHOLE...
// CALLED FROM FILTERPOSTS WITH AGS
// USED TO SEACH FILTERED POSTS
export const searchPosts = ( posts, criteria ) => {

  // FILTER ANY BLANK CRITERIA FROM ARRAY
  criteria = criteria.filter(i => i !== '')

  // IF MULTIPLE WORDS ARE IN QUOTES
  // THE FOLLOWING IS USED IN COMBINING ALGORITHM
  let openIndex;
  let closeIndex;

  // USED TO FIND IF COMBINATION OF QUOTES IS NECESSARY
  criteria.forEach((item, index)=>{

    // USED TO FIND OUT IF QUOTE CHARACTER IS IN LAST POSITION OF ANY ARRAY ITEM
    let len = item.length -1

    // HOLD ITEM INDEX, USED IN SPLICING TO COMBINE ITEMS
    if(item[0] === '"' || item[0] === '\''){
      openIndex = index
    }

    // HOLD ITEM INDEX, USED IN SPLICING TO COMBINE ITEMS
    if((item[len] === '"' || item[len] ==='\'') && item.length > 1){
      closeIndex = index
    }

  })

  // IF THIS IS TRUE, COMBINING ITEMS IS TRIGGERED
  if( !!closeIndex ){
    criteria = combineQuotedCriteria(criteria, openIndex, closeIndex)
  }



  // USED TO HOLD POSTS THAT PASS SEARCH CRITERIA
  let passingPosts = [];


  // REFACTOR NESTED FOREACH
  // CYCLE THROUGH ITEMS
  criteria.forEach((item)=>{
    // IF THERE IS NO CRITERIA TO SEARCH, MOVE ON.
  return criteria === ''
    ? null
    // BUT IS THERE IS SEARCH CRITERIA
    : posts.map((post)=>{

      // SNAG THE KEYS FROM THE POST OBJECT
      let keys = Object.keys(post)

      // REMOVE UNECESSARY KEYS, BEGINNING WITH _
      keys = keys.filter((item) => {
        return item[0] !== '_'
      })

      // ITERATE THROUGH AND SEARCH FOR CRITERIA
      return keys.forEach((i) =>{

        // LOWER THE PLAYING FEILD, CAPS IS NOT USED TO FILTER/SEARCH
        let postLower = post[i].toLowerCase()
        let itemLower = item.toLowerCase()



        // SEARCH THE POST FOR CRITERIA AND PUSH PASSING POSTS TO ARRAY
        if(postLower.search(itemLower) !== -1 && !undefined){

          return passingPosts.push(post)
        }



      }) // END OF KEYS FOR EACH

    }) // END OF POST MAP

  }) // END OF CRITERIA FOR EAECH

  // REMOVE ANY DUPLICATES IF NECESSARY
  let uniqueArray = passingPosts.filter(function(item, pos, self) {

    return self.indexOf(item) === pos;

  })

  ///////////////////////////
  // HERE YOU GET THE PASSING POSTS, CAN I PRIORITIZE AFTER THAT??
  // CAN I HOLD THE MATCHING RESULT??
  let match;
  uniqueArray.forEach((post) =>{
    /////// DO YOU SEARCH ALL KEYS?
    /////// IS THERE PRIORITIES???
    return console.log('match', match );

  })
  console.log(uniqueArray);

  return uniqueArray

}

//////////////////////////////
// ADD WILD CARDS TO BEGINNING AND END OF QUOTED SEARCHES??
// SPACES AND PUNCUATION??
// USED TO COMINE QUOTED SEARCH CRITERIA
const combineQuotedCriteria = (array, open, close) =>{

  // USED TO EASE SPLICING
  let indexList = []

  // NEW ITEM CREATED FROM QUOTED ITEMS
  let newItem = ''

  // LOOP THROUGH SEARCH CRITERIA USING
  // STARTING/OPEN AND ENDING/CLOSING QUOTE POSITIONS
  for (var i = open; i <= close; i++) {

    // USED FOR SPLICING IF MORE THAN 2 ITEMS COMBINED
    indexList.push(i)

    // RID ITEM OF HANGING QUOTES AND ADD SPACE BETWEEN
    let item = array[i].replace(/["]+/g, '')

    // COMBINE!
    newItem += (item + ' ')

  }

  // SPLICE UNWANTED QUOTED ITEMS AND REPLACE WITH TRIMMED SINGLE ITEM
  array.splice(open, indexList.length, newItem.trim())

  return array

}
