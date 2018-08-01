import React from 'react'
import { Link } from 'react-router-dom'






const Post = (props) => {
    // I DONT WANT TO GET OUT OF SESSION STORAGE
    const backButton = (<Link to={`/profile/${sessionStorage.getItem('username')}`}> Back </Link>)
    return (
    <div>
        {/* HEADER, from PROFILE or Home? profile... */}
        {/* Profile > Posts breadcrumbs? need to refactor profile page*/}
        <h1>Post Page</h1>
        {/* POSTS List */}
        {/* POST Item */}
        {backButton}
    </div> 
        
    )
}

export default Post