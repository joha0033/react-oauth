import { searchPosts } from './searchPosts'

export const filterPost = (posts, filters, searchInput) => {
  // MAP THROUGH EACH OF THE 'FILTERS' = ITEM(OBJECT)(S)
  // 'FILTERGROUP' WILL BE AN OBJECT FROM 'FILTERS' ARRAY
  filters.map((filterGroup) => {
    // MANIPULATE DATA PER KEY THEN VALUE
    return Object.keys(filterGroup).map((filterKey) => {

      return Object.values(filterGroup).map((filterValue)=> {

        // HOLDS WHICH ARRAY TO FILTER
        let toBeFiltered = posts
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
        return posts = toBeFlattened
          .reduce((acc, cur) => {
            // seachPost?
            return acc.concat(cur);
          }, []);

      }) // END OF VALUES MAP

    })// END OF KEYS MAP

  })// END OF FILTERS MAP

  // SEACH ALGORITHM IF NEEDED
  return searchInput[0] === undefined || searchInput[0] === ""
          ? posts
          : searchPosts(posts, searchInput)

} // FUNC END
