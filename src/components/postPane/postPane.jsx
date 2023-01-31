import React from 'react'
import NewPost from '../NewPost/NewPost'
import Post from '../ExiststingPosts/Post'
import "./postPane.css"
const PostPane = () => {
  return (
    <div className='post-pane'>
      <div className="container">
        <NewPost/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
      
    </div>
  )
}

export default PostPane