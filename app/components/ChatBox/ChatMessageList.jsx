import React, { Component, PropTypes } from 'react'
import firebase from 'firebase'
import ChatMessage from './ChatMessage'
import ChatInput from './ChatInput'

const BOT_AVATAR = 'https://firebasestorage.googleapis.com/v0/b/react-firebase-chat-74da6.appspot.com/o/img%2Fpaje_real.png?alt=media&token=7c2a5fd4-09ac-4997-8c50-ae9e1de8fca7'
const BOT_NAME = 'Big Dave'

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
      <div>
        <div className="">
          {
            this.state.messages.map(msg => (
              <ChatMessage
                key={msg.date}
                message={msg}
              />
            )).reverse()
          }
        </div>
        <ChatInput onSendMessage={this.handleSendMessage} />
      </div>
    )
  }
}

export default ChatMessageList
