let URL;
process.env.NODE_END === 'development' ?
URL =  'http://localhost:5000/posts/getall' :
URL =  'https://murmuring-everglades-26713.herokuapp.com/posts/getall'
export const Post = {

  fetchAllPosts: async (req, res, next) =>{
    let response = await fetch(URL)

    let posts = response.json()

    if(response.status === 200 || response.status === 201) {
      return posts;
    }

    throw new Error(response.status);

  }

}
