const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

var initialState = {
    
    posts: [ {id: 1, message: 'Hi', likesCount: 2},
             {id: 2, message: "It's my first post", likesCount: 5} ],
    
    newPostText: 'It- Kamasutra.com'

}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
    case ADD_POST:
        var newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
        }
    
       state.posts.push(newPost)
       state.newPostText = ''
       return state
    case UPDATE_NEW_POST_TEXT:
        state.newPostText = action.newText
        return state
    default:
        return state
                 
       }
    }

export const addPostActionCreator = () => ({ type: ADD_POST }) 
export const updateNewPostTextActionCreator = (text) => 
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })


export default profileReducer