const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

var initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            var body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 5, message: body})
        return state
         default:
            return state 

    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE }) 
export const updateNewMessageBodyCreator = (body) => 
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer