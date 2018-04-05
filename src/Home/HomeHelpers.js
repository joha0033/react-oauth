export const filterPost = (results, filters) => {

    // ALL POSTS
    let nonFilteredPosts = results

    // HOLDER FOR COMPLETED FILTERS COMBINED
    let filteredPosts = []


    // MAP THROUGH EACH OF THE 'FILTERS' = ITEM(OBJECT)(S)
    // 'FILTERGROUP' WILL BE AN OBJECT FROM 'FILTERS' ARRAY
    filters.map((filterGroup, mainIndex) => {

      // MANIPULATE DATA PER KEY THEN VALUE
      Object.keys(filterGroup).map((filterKey) => {

        Object.values(filterGroup).map((filterValue)=> {

          // HOLDS WHICH ARRAY TO FILTER
          let toBeFiltered = []

          // 'MAIN INDEX' IS USED FOR FIRST ROUND FILTER
          mainIndex === 0
              ? toBeFiltered = nonFilteredPosts // ALL POSTS
              : toBeFiltered = filteredPosts //FILTERED POST

          //PLACE HOLDER FOR FILTERED GROUP ARRAYS
          let toBeFlattened = [] //FLATTENED LATER

          // DELIVERS A FILTERED ARRAY FOR EACH INTERATION
          filterValue.forEach((filterType)=>{

            // PUSH FILTERED VALUES TO PLACE HOLDER BY 'FILTER TYPE'
            toBeFlattened.push(toBeFiltered.filter((post) => {
              return post[filterKey] === filterType
            })) // END OF FILTER

          }) //END OF FOR EACH

          // ARRAY OF ARRAYS TO SINGLE FILTERED ARRAY, 'FILTERED POSTS'
          filteredPosts = toBeFlattened
            .reduce((acc, cur) => {
              return acc.concat(cur);
            }, []);

        }) // END OF VALUES MAP

      })// END OF KEYS MAP

    })// END OF FILTERS MAP

    return filteredPosts // ...  yay...

} // FUNC END
