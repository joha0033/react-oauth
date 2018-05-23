export const fillsBlankData = (posts) =>{


  posts.map((el)=>{
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

    return posts // SUCCESS MESSAGE? TAG UPDATED RESULTS

  })

  return posts

}
