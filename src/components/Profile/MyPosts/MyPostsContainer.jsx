import React from 'react';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {
  var state = props.store.getState()

  var addPost = () => {
    
    props.store.dispatch(addPostActionCreator())
    
  }

  var onPostChange = (text) => {
    
    var action = updateNewPostTextActionCreator(text)
    props.store.dispatch(action)

  }

    return   ( 
    <MyPosts updateNewPostText = {onPostChange} 
             addPost = {addPost} 
             posts = {state.profilePage.posts} 
             newPostText = {state.profilePage.newPostText} />

    )
}

export default MyPostsContainer;

