import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './Dialogitem/Dialogitem';
import  Message  from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';



const Dialogs = (props) => {

    var state = props.store.getState().dialogsPage


    var messagesElements = state.messages.map ( m => <Message message = {m.message} id = {m.id} key = {m.id} />)
    var dialogsElements = state.dialogs.map ( d => <DialogItem name = {d.name} id = {d.id} key = {d.id}/>)
    var newMessageBody = state.newMessageBody
     
    var onSendMessageClick = () => {     
        props.store.dispatch (sendMessageCreator())

    }

    var onNewMessageChange = (e) => {
        var body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))

    }

    return (

    <div className = {classes.dialogs}>
        <div className = {classes.dialogItems}>
            {dialogsElements}  
        </div>

        <div  className = {classes.messages}>
           <div> {messagesElements} </div>         
        <div>
        <div><textarea 
                       onChange = {onNewMessageChange}
                       value = {newMessageBody}  
                       placeholder='Enter your message'></textarea></div>
                       
        <div><button onClick={onSendMessageClick}> Send </button></div>

      </div>
    </div>
</div>

 )
}

export default Dialogs;