export const filterGroupCreator = (filterTypes, posts) => {

  // FILTER GROUP ARRAY TO HOLD FILTER GROUP CRITERIA
  let filterGroupArray = []


  filterTypes.forEach((key, index)=>{

    filterGroupArray.push({[key]: {}})

  })

  filterGroupArray.forEach((obj) => {


    filterTypes.forEach((markedKey) => {


      posts.forEach((post)=>{


      return  !!obj[markedKey] && post[markedKey] !== 'none'
        ? obj[markedKey][post[markedKey]] = false
        : null

      })

    })
  })


  return filterGroupArray

}
