import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Posts/Post';




const MyPosts = (props) => {
  
  var postsElements = props.posts.map (p => <Post message = {p.message} likesCount = {p.likesCount} key = {p.id}/>)
  
  var newPostElement = React.createRef()
  
  var onAddPost = () => {
    props.addPost()
  
  }

  var onPostChange = () => {
    var text = newPostElement.current.value
    props.updateNewPostText(text)
    
  }

    return   <div className = {classes.postsBlock}>
    <h4> My post </h4>
  <div>
    <div>
      <textarea  
                 onChange = {onPostChange}
                 ref = {newPostElement} 
                 value = {props.newPostText }
                 />        
      </div>
      <div>
    <button onClick = {onAddPost}> Add Post </button>
    </div>
  </div>
  <div className = {classes.posts}>
    {postsElements}
    
    </div>
</div>

}

export default MyPosts;

