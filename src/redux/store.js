import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


var store = {
    _state: {  

        profilePage: {
    
            posts: [ {id: 1, message: 'Hi', likesCount: 2},
                     {id: 2, message: "It's my first post", likesCount: 5} ],
            
            newPostText: 'It- Kamasutra.com'
    
        },
    
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Bill'},
                {id: 2, name: 'John'},
                {id: 3, name: 'Samanta'},
                {id: 4, name: 'Eliza'},
                {id: 5, name: 'Valera'}
      ],
    
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hola'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Hey'} ],
              
                newMessageBody: ''
        },
        sidebar: {}
    
     },
    _callSubscriber () {
       
     },

     getState() {
        return this._state
     },
     subscribe(observer) {
        this._callSubscriber = observer
    
     },

     dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
      
    }    
} 

export default store;

 