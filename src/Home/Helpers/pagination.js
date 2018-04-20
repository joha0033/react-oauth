export const PageHelper = (state) => {

  // GRAB DATA FROM STATE
  let { itemsPerPage, posts } = state
  console.log(itemsPerPage);
  // CREATE ARRAY TO SEND
  const pageNumbers = [];

  // INTERATE THE LENGTH OF DATA TO CREATE PAGES
  for (let i = 1; i <= Math.ceil(posts.length / itemsPerPage); i++) {

    pageNumbers.push(i);

  }

  
  // SEND FILLED ARRAY
  return pageNumbers

}

export const SplitDataHelper = (state) => {

    // QUICK HELPER TO CRATE SPLIT DATA FOR EAHC PAGE
    const { currentPage, itemsPerPage, posts } = state

    // PAGE LOGIC FOR EACH PAGE'S LIST
    const indexOfLastData = currentPage * itemsPerPage;
    const indexOfFirstData = indexOfLastData - itemsPerPage;

    // RETURN THE SHORTENED LIST
    return posts.slice(indexOfFirstData, indexOfLastData);


  }
