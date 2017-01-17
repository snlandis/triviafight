import React, { Component, PropTypes } from 'react'
import firebase from 'firebase'
import ChatMessage from './ChatMessage'
import ChatInput from './ChatInput'

class ChatMessageList extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
    this.messagesDB = firebase.database().ref(`messages/`)
  /*  this is the original string this.messagesDB = firebase.database().ref(`messages/${this.props.user.uid}`) */
    this.handleSendMessage = this.handleSendMessage.bind(this)
  }

  state = {
    messages: [],
    count: 0
  }

  componentWillMount () {
    this.messagesDB.on('child_added', snap => {
      this.setState({
        messages: this.state.messages.concat(snap.val())
      })
    })
  }

  ComponentWillUnmount () {
    this.messagesDB.off()
  }

  handleSendMessage (text) {
    let newUserMessage = this.messagesDB.push()
    let msg = {
      text,
      avatar: this.props.user.photoURL,
      displayName: this.props.user.displayName,
      date: Date.now()
    }
    newUserMessage.set(msg)
  }

  render () {
    return (
      <div className='3'>
        <div className="row" id="MessageAndUserList">
          <div className='large-9 columns 2' id="MessageList">
            {
              this.state.messages.map(msg => (
                <ChatMessage
                  key={msg.date}
                  message={msg}
                />
              )).reverse()
            }
          </div>
          <div className='large-3 columns' id="UserList">
            User List
             <ul>
               <li>User 1</li>
               <li>User 2</li>
               <li>User 3</li>
               <li>User 4</li>
               <li>User 5</li>
               <li>User 6</li>
               <li>User 7</li>
               <li>User 8</li>
               <li>User 9</li>
               <li>User 10</li>
             </ul>
          </div>
        </div>
        <div className="1">
          <ChatInput onSendMessage={this.handleSendMessage} />
        </div>
      </div>
    )
  }
}

export default ChatMessageList
