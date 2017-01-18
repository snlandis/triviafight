import React, { Component, PropTypes } from 'react'
import firebase from 'firebase'
import ChatMessage from './ChatMessage'
import ChatInput from './ChatInput'
import UserList from './UserList'

class ChatMessageList extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
    this.messagesDB = firebase.database().ref(`messages/`)
  /*  this is the original string this.messagesDB = firebase.database().ref(`messages/${this.props.user.uid}`) */
    this.handleSendMessage = this.handleSendMessage.bind(this)
    this.messagesDBUL = firebase.database().ref(`userlist/`)

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
            <UserList></UserList>
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
