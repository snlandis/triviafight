import React, { Component } from 'react'

class ChatRoom extends Component {
  constructor(props, context){
    super(props, context)
    this.state = {
      messages: [
        {id: 0, text:'first Message'},
        {id: 1, text:'second Message'},
        {id: 2, text:'third Message'},
      ]
    }
  }
  render() {
    const CurrentMessage = this.state.messages.map((message, i) => {
      return (
        <li key={message.id}>{message.text}</li>
      )
    })
    return (
      <div>
        This is the Chatroom Component!
        <ol>
          {CurrentMessage}
        </ol>
        <input type="text" placeholder="Message" />
        <br />
        <button> Submit Message</button>
      </div>
    )
  }
}

export default ChatRoom
