export const filterPost = (results, filters, searchInput) => {

    // FIRST HOLDS ALL POSTS THEN GETS FILTERED
    // HOLDER FOR COMPLETED FILTERS COMBINED
    let filteredPosts = results

    // MAP THROUGH EACH OF THE 'FILTERS' = ITEM(OBJECT)(S)
    // 'FILTERGROUP' WILL BE AN OBJECT FROM 'FILTERS' ARRAY
    filters.map((filterGroup, mainIndex) => {

      // MANIPULATE DATA PER KEY THEN VALUE
      return Object.keys(filterGroup).map((filterKey) => {

        return Object.values(filterGroup).map((filterValue)=> {

          // HOLDS WHICH ARRAY TO FILTER
          let toBeFiltered = filteredPosts
          let toBeFlattened = [] //FLATTENED LATER

          // DELIVERS A FILTERED ARRAY FOR EACH INTERATION
          filterValue.forEach((filterType)=>{

            // PUSH FILTERED VALUES TO PLACE HOLDER BY 'FILTER TYPE'
            toBeFlattened.push(toBeFiltered.filter((post) => {
              // console.log(post);
              return post[filterKey] === filterType
            })) // END OF FILTER

          }) //END OF FOR EACH

          // ARRAY OF ARRAYS TO SINGLE FILTERED ARRAY, 'FILTERED POSTS'
          return filteredPosts = toBeFlattened
            .reduce((acc, cur) => {
              // seachPost?
              return acc.concat(cur);
            }, []);

        }) // END OF VALUES MAP

      })// END OF KEYS MAP

    })// END OF FILTERS MAP

    // SEACH ALGORITHM IF NEEDED
    return searchInput[0] === undefined || searchInput[0] === ""
           ? filteredPosts
           : searchPosts(filteredPosts, searchInput)

} // FUNC END



const searchPosts = ( posts, criteria ) => {

  criteria = criteria.filter(i => i !== '')


  let openIndex;
  let closeIndex;
  let quoteFound = false


  criteria.forEach((item, index)=>{
    let len = item.length -1
    if(item[0] === '"' || item[0] === '\''){
      openIndex = index
      // console.log(item);
    }
    if((item[len] === '"' || item[len] ==='\'') && item.length > 1){
      closeIndex = index

    }

  })
  // console.log(!!closeIndex);
  if( !!closeIndex ){
    // console.log('TRUE!');
    criteria = combineQuotedCriteria(criteria, openIndex, closeIndex, posts)
  }
  console.log(criteria);
  let passingPosts = [];

  criteria.forEach((item)=>{
    criteria === ''
    ? null
    : posts.map((post)=>{

      let keys = Object.keys(post)

      keys = keys.filter((item) => {
        return item[0] !== '_'
      })

      keys.forEach((i) =>{

        let postLower = post[i].toLowerCase()
        let itemLower = item.toLowerCase()
        console.log(itemLower);
        if(postLower.search(itemLower) !== -1 && !undefined){
          return passingPosts.push(post)
        }

      })

    })
  })


  let uniqueArray = passingPosts.filter(function(item, pos, self) {

    return self.indexOf(item) === pos;

  })

  return uniqueArray

}


const combineQuotedCriteria = (array, open, close) =>{

  let indexList = []
  let newItem = ''

  for (var i = open; i <= close; i++) {

    indexList.push(i)
    let item = array[i].replace(/["]+/g, '')
    newItem += (item + ' ')

  }

  array.splice(open, indexList.length, newItem.trim())

  return array

}
