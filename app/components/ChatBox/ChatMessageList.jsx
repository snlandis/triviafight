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
    this.handleSendMessage = this.handleSendMessage.bind(this)
    this.messagesDBUL = firebase.database().ref(`userlist/`)

  }

  state = {
    messages: [],
    users: [],
    count: 0
  }

  componentWillMount () {
    this.messagesDB.on('child_added', snap => {
      this.setState({
        messages: this.state.messages.concat(snap.val())
      })
    })
    this.messagesDBUL.on('child_added', snap => {
      this.setState({
        users: this.state.users.concat(snap.val())
      })
    })
  }

  ComponentWillUnmount () {
    this.messagesDB.off()
    this.messagesDBUL.off()
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
    console.log(msg);
  }

  userModal () {
    console.log("Heck yea");
  }

  userSend () {
    if (localStorage.displayName === "Bob Barker"){
      console.log("Hi Kollin");
    } else {
      console.log("who are you");
    }
  }

  render () {

    return (
      <div className='3'>
        <div className="row" id="MessageAndUserList">
          <div className='large-9 columns 2' id="MessageList">
            {
              this.state.messages.map(msg => (
                <ChatMessage
                  userSend={this.userSend}
                  key={msg.date}
                  message={msg}
                />
              )).reverse()
            }
          </div>
          <div className='large-3 columns' id="UserList">
            <div className="row" id="userlisttitle">
              User List
            </div>
            {
              this.state.users.map(msg => (
                <UserList
                  message={msg}
                />
              )).reverse()
            }
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
